import { useEffect, useState } from "react";
import ModalForm from "../../components/organisms/ManagementUser/ModalForm";
import Table from "../../components/atoms/Table";
import { headersUser, tableKeyUser } from "../../utils/data";
import Button from "../../components/atoms/Button";
import { endpoint } from "../../utils/endpoint";

const ManagementUser = () => {
  const [users, setUsers] = useState([]);
  const [modalData, setModalData] = useState(null);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const { data } = await endpoint.getUsers();

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
      <h1 className="text-xl font-bold">Manajemen User</h1>
      <div className="flex justify-end mb-4">
        <Button label="Tambah User" type="primary" onClick={handleAddUser} />
      </div>
      <Table
        headers={headersUser}
        datas={users}
        tableKey={tableKeyUser}
        onEdit={handleEditUser}
        onView={handleViewUser}
      ></Table>
      {modalData && (
        <ModalForm
          label={"User"}
          modalData={modalData}
          onClose={handleModalClose}
        />
      )}
    </div>
  );
};

export default ManagementUser;
