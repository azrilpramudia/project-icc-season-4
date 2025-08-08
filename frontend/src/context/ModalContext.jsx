/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react-hooks/exhaustive-deps */
import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { api } from "../lib/axios";

const ModalContext = createContext(null);

export const useClient = () => useContext(ModalContext);

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([]);
  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add");
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const abortRef = useRef(null);

  const fetchClients = async (q = "") => {
    try {
      setLoading(true);

      if (abortRef.current) abortRef.current.abort();
      abortRef.current = new AbortController();

      const res = await api.get("/api/clients", {
        params: q ? { search: q } : {},
        signal: abortRef.current.signal,
      });
      setClients(res.data?.data ?? []);
    } catch (err) {
      if (err.name !== "CanceledError" && err.code !== "ERR_CANCELED") {
        console.error(
          "fetchClients error:",
          err?.response?.data || err.message
        );
      }
    } finally {
      setLoading(false);
    }
  };

  const addClient = async (payload) => {
    await api.post("/api/clients", payload);
    await fetchClients(search);
    closeModal();
  };

  const updateClient = async (updated) => {
    await api.patch(`/api/clients/${updated.id}`, updated);
    await fetchClients(search);
    closeModal();
  };

  const deleteClient = async (id) => {
    await api.delete(`/api/clients/${id}`);
    await fetchClients(search);
  };

  const openEditModal = (client) => {
    setSelectedClient(client);
    setModalMode("edit");
    setIsModalOpen(true);
  };

  const openAddModal = () => {
    setSelectedClient(null);
    setModalMode("add");
    setIsModalOpen(true);
  };

  const closeModal = () => setIsModalOpen(false);

  useEffect(() => {
    fetchClients();
  }, []);

  useEffect(() => {
    const t = setTimeout(() => fetchClients(search), 300);
    return () => clearTimeout(t);
  }, [search]);

  const value = useMemo(
    () => ({
      // data
      clients,
      loading,
      // modal
      selectedClient,
      isModalOpen,
      modalMode,
      openAddModal,
      openEditModal,
      closeModal,
      // crud
      fetchClients,
      addClient,
      updateClient,
      deleteClient,
      // search
      search,
      setSearch,
    }),
    [clients, loading, selectedClient, isModalOpen, modalMode, search]
  );

  return (
    <ModalContext.Provider value={value}>{children}</ModalContext.Provider>
  );
};
