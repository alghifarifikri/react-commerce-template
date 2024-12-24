import { useState } from "react";
import axios from "axios";
import Modal from "../../atoms/Modal";
import Input from "../../atoms/Input";

const ModalForm = ({ label, modalData, onClose }) => {
  const [formData, setFormData] = useState(
    modalData.data || { name: "", email: "", phone: "", status: "AKTIF" }
  );

  const generateRandomPassword = () => {
    return Math.random().toString(36).slice(-8);
  };

  const handleInputChange = (param, e) => {
    setFormData({ ...formData, [param]: e });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const password = generateRandomPassword();

    if (modalData.mode === "add") {
      const payload = {
        ...formData,
        password,
      };
      await axios.post("http://localhost:3001/users", payload);
    } else if (modalData.mode === "edit") {
      await axios.put(
        `http://localhost:3001/users/${modalData.data.id}`,
        formData
      );
    }
    onClose();
  };

  return (
    <Modal onClose={onClose} onSubmit={handleSubmit}>
      <h2 className="text-xl font-bold mb-4">
        {modalData.mode === "add"
          ? `Tambah ${label}`
          : modalData.mode === "edit"
          ? `Edit ${label}`
          : `Detail ${label}`}
      </h2>
      {modalData.mode === "view" ? (
        <div>
          <p>Nama: {formData.name}</p>
          <p>Email: {formData.email}</p>
          <p>No. Telepon: {formData.phone}</p>
          <p>Status: {formData.status}</p>
        </div>
      ) : (
        <form>
          <div className="mb-4">
            <Input
              label="Nama Lengkap"
              type="text"
              id="name"
              placeholder="Masukkan Nama"
              value={formData.name}
              onChange={(e) => handleInputChange("name", e)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Nomor Telepon"
              type="text"
              id="telepon"
              placeholder="Masukkan Nomor Telepon"
              value={formData.phone}
              onChange={(e) => handleInputChange("phone", e)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Email"
              type="email"
              id="email"
              placeholder="Masukkan Email"
              value={formData.email}
              onChange={(e) => handleInputChange("email", e)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
        </form>
      )}
    </Modal>
  );
};

export default ModalForm;
