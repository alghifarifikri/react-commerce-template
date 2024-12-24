import Card from "../components/atoms/Card";
import TableDashboard from "../components/organisms/Dashboard/TableDashboard";

function MainPage() {
  return (
    <div className="w-full p-8">
      <span className="text-xl">Dashboard</span>
      <div className="justify-between flex flex-row mt-10">
        <Card title="Jumlah User" total="150 User" />
        <Card title="Jumlah User Aktif" total="150 User" />
        <Card title="Jumlah Produk" total="150 Produk" />
        <Card title="Jumlah Produk Aktif" total="150 Produk" />
      </div>
      <div className="bg-white w-2/3 p-4 rounded-2xl mt-10">
        <TableDashboard />
      </div>
    </div>
  );
}

export default MainPage;
