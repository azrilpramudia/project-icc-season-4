import { useClient } from "../context/ModalContext";

const TableList = () => {
  const {
    clients,
    openAddModal,
    openEditModal,
    deleteClient,
    search,
    setSearch,
  } = useClient();

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Clients</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            placeholder="Search"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="bg-gray-800 border border-gray-600 px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            className="bg-cyan-400 hover:bg-cyan-500 text-black font-semibold px-4 py-2 rounded-md"
            onClick={openAddModal}
          >
            Add Client
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full table-auto text-left rounded-lg overflow-hidden">
          <thead className="bg-gray-800 text-gray-300">
            <tr>
              <th className="px-4 py-3">#</th>
              <th className="px-4 py-3">Name</th>
              <th className="px-4 py-3">Email</th>
              <th className="px-4 py-3">Job</th>
              <th className="px-4 py-3">Rate</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody>
            {clients.map((client, index) => (
              <tr key={client.id} className="border-b border-gray-700">
                <td className="px-4 py-3">{index + 1}</td>
                <td className="px-4 py-3">{client.name}</td>
                <td className="px-4 py-3">{client.email}</td>
                <td className="px-4 py-3">{client.job}</td>
                <td className="px-4 py-3">{client.rate}</td>
                <td className="px-4 py-3">
                  {client.status ? (
                    <span className="bg-cyan-400 text-black px-4 py-1 rounded-full text-sm font-semibold">
                      Active
                    </span>
                  ) : (
                    <span className="border border-cyan-400 text-cyan-400 px-4 py-1 rounded-full text-sm font-semibold">
                      Inactive
                    </span>
                  )}
                </td>
                <td className="px-4 py-3 space-x-2">
                  <button
                    onClick={() => openEditModal(client)}
                    className="bg-indigo-400 hover:bg-indigo-500 text-black font-semibold px-3 py-1 rounded-md"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => deleteClient(client.id)}
                    className="bg-pink-400 hover:bg-pink-500 text-black font-semibold px-3 py-1 rounded-md"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableList;
