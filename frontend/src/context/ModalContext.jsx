import { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const useClient = () => useContext(ModalContext);

export const ClientProvider = ({ children }) => {
  const [clients, setClients] = useState([
    {
      id: 1,
      name: "John Doe",
      email: "John.Doe@gmail.com",
      job: "Developer",
      rate: 100,
      status: true,
    },
    {
      id: 2,
      name: "Jane Doe",
      email: "Jane.Doe@gmail.com",
      job: "Designer",
      rate: 90,
      status: false,
    },
  ]);

  const [selectedClient, setSelectedClient] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalMode, setModalMode] = useState("add"); // or 'edit'

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

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const updateClient = (updatedData) => {
    setClients((prev) =>
      prev.map((client) =>
        client.id === updatedData.id ? updatedData : client
      )
    );
    closeModal();
  };

  const addClient = (newClient) => {
    const id = Date.now();
    setClients((prev) => [...prev, { ...newClient, id }]);
    closeModal();
  };

  return (
    <ModalContext.Provider
      value={{
        clients,
        selectedClient,
        isModalOpen,
        modalMode,
        openEditModal,
        openAddModal,
        closeModal,
        updateClient,
        addClient,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
