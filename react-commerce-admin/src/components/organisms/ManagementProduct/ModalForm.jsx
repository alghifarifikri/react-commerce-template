import { useState } from "react";
import axios from "axios";
import Modal from "../../atoms/Modal";
import Input from "../../atoms/Input";

const ModalForm = ({ label, modalData, onClose }) => {
  const [formData, setFormData] = useState(modalData.data);

  const handleInputChange = (param, e) => {
    console.log({ param, e });
    setFormData({ ...formData, [param]: e });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (modalData.mode === "add") {
      const payload = {
        ...formData,
        image: "/images/product.png",
      };
      await axios.post("http://localhost:3001/products", payload);
    } else if (modalData.mode === "edit") {
      await axios.put(
        `http://localhost:3001/products/${modalData.data.id}`,
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
          <img src={formData?.image} />
          <p className="mt-2">Title : {formData?.title}</p>
          <p>Price : {formData?.price}</p>
        </div>
      ) : (
        <form>
          <div className="mb-4">
            <Input
              label="Title Product"
              type="text"
              id="title"
              placeholder="Masukkan Nama Product"
              value={formData?.title}
              onChange={(e) => handleInputChange("title", e)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
          <div className="mb-4">
            <Input
              label="Harga"
              type="number"
              id="harga"
              placeholder="Masukkan Harga"
              value={formData?.price}
              onChange={(e) => handleInputChange("price", e)}
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
          </div>
        </form>
      )}
    </Modal>
  );
};

export default ModalForm;
