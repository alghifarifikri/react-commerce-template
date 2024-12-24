const TableDashboard = () => {
  const products = [
    {
      id: 1,
      name: "Microsoft Surface 7",
      date: "12 Mei 2023",
      price: "Rp 1.000",
      image: "/images/product.png",
    },
    {
      id: 2,
      name: "Microsoft Surface 7",
      date: "12 Mei 2023",
      price: "Rp 1.000",
      image: "/images/product.png",
    },
    {
      id: 3,
      name: "Microsoft Surface 7",
      date: "12 Mei 2023",
      price: "Rp 1.000",
      image: "/images/product.png",
    },
  ];

  return (
    <div className="p-4">
      <h2 className="text-lg font-semibold mb-4">Produk Terbaru</h2>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white">
          <thead>
            <tr className="bg-[#41A0E4] text-white">
              <th className="py-3 px-4 text-left">Produk</th>
              <th className="py-3 px-4 text-left">Tanggal Dibuat</th>
              <th className="py-3 px-4 text-left">Harga (Rp)</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td className="py-3 px-4 flex items-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-12 h-12 object-cover mr-4"
                  />
                  <span className="text-gray-800">{product.name}</span>
                </td>
                <td className="py-3 px-4 text-gray-500">{product.date}</td>
                <td className="py-3 px-4 text-gray-800">{product.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableDashboard;
