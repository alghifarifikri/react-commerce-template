import { useEffect, useState } from "react";
import ModalForm from "../../components/organisms/ManagementProduct/ModalForm";
import Table from "../../components/atoms/Table";
import { headersProduct, tableKeyProduct } from "../../utils/data";
import Button from "../../components/atoms/Button";
import { endpoint } from "../../utils/endpoint";

const ManagementProduct = () => {
  const [users, setUsers] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await endpoint.getProducts();

      if (data.length > 0) setUsers(data);
    } catch (e) {
      console.log({ e });
    }
  };

  const handleAddUser = () => setModalData({ mode: "add" });
  const handleEditUser = (user) => setModalData({ mode: "edit", data: user });
  const handleViewUser = (user) => setModalData({ mode: "view", data: user });

  const handleModalClose = () => {
    setModalData(null);
    fetchUsers();
  };

  return (
    <div className="w-full p-8">
      <h1 className="text-xl font-bold">Manajemen Produk</h1>
      <div className="flex justify-end mb-4">
        <Button label="Tambah Produk" type="primary" onClick={handleAddUser} />
      </div>
      <Table
        headers={headersProduct}
        datas={users}
        tableKey={tableKeyProduct}
        onEdit={handleEditUser}
        onView={handleViewUser}
      ></Table>
      {modalData && (
        <ModalForm
          label={"Product"}
          modalData={modalData}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default ManagementProduct;
