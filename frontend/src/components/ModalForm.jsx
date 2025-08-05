import { useState, useEffect } from "react";
import { useClient } from "../context/ModalContext";

const ModalForm = () => {
  const {
    isModalOpen,
    closeModal,
    modalMode,
    selectedClient,
    addClient,
    updateClient,
  } = useClient();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [job, setJob] = useState("");
  const [rate, setRate] = useState("");
  const [status, setStatus] = useState(false);

  useEffect(() => {
    setName("");
    setEmail("");
    setJob("");
    setRate("");
    setStatus(false);
  }, [isModalOpen]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const clientData = {
      id: selectedClient?.id,
      name,
      email,
      job,
      rate: parseInt(rate),
      status,
    };

    if (modalMode === "edit") {
      updateClient(clientData);
    } else {
      addClient(clientData);
    }
  };

  return (
    <dialog id="my_modal_3" className="modal" open={isModalOpen}>
      <div className="modal-box">
        <h3 className="font-bold text-lg py-4">
          {modalMode === "edit" ? "Edit Client" : "Client Details"}
        </h3>
        <form onSubmit={handleSubmit}>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-start">Name</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-start">Email</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          <fieldset className="fieldset">
            <legend className="fieldset-legend text-start">Job</legend>
            <input
              type="text"
              className="input"
              placeholder="Type here"
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
          </fieldset>

          <div className="flex mb-7 justify-between my-4 gap-4">
            <label className="input input-bordered flex items-center gap-2">
              Rate
              <input
                type="number"
                className="grow"
                placeholder="0"
                value={rate}
                onChange={(e) => setRate(e.target.value)}
              />
            </label>
            <select
              value={status ? "Active" : "Inactive"}
              className="select"
              onChange={(e) => setStatus(e.target.value === "Active")}
            >
              <option>Inactive</option>
              <option>Active</option>
            </select>
          </div>

          <button
            type="button"
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
            onClick={closeModal}
          >
            ✕
          </button>
          <button className="btn btn-success" type="submit">
            {modalMode === "edit" ? "Save Changes" : "Add Client"}
          </button>
        </form>
      </div>
    </dialog>
  );
};

export default ModalForm;
