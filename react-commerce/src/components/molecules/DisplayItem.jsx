import Button from "../atoms/Button";
import Card from "../atoms/Card";

const DisplayItem = ({ products = [] }) => {
  return (
    <div className="mt-20">
      <h2 className="text-2xl font-semibold mb-8">Product Tersedia</h2>
      {products.length > 0 ? (
        <>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {products.map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
          <div className="w-full text-center">
            <Button
              label="Lihat Lebih Banyak"
              type="Secondary"
              onClick={() => alert("Primary clicked!")}
            />
          </div>
        </>
      ) : (
        <p className="text-center text-gray-600">No products available.</p>
      )}
    </div>
  );
};

export default DisplayItem;
