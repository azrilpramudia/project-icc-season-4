import { ClientProvider } from "../context/ModalContext";
import ModalForm from "../components/ModalForm";
import TableList from "../components/TableList";

const ClientPage = () => {
  return (
    <ClientProvider>
      <ModalForm />
      <TableList />
    </ClientProvider>
  );
};

export default ClientPage;
