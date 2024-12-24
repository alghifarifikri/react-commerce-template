const Card = ({ product }) => {
  return (
    <div
      key={product.id}
      className="rounded-lg hover:shadow-md overflow-hidden hover:scale-105 transition-shadow p-4 cursor-pointer"
      // onClick={() => router.push(`/product/${product.id}`)}
    >
      <div className="relative w-full h-44 justify-items-center">
        <img
          src={product.thumbnail || "/placeholder.jpg"}
          alt={product.title || "Product Image"}
          loading="lazy"
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-between">
        <h3 className="text-lg font-semibold text-gray-800">
          {product.id} - {product.title}
        </h3>
        <div className="text-lg font-bold text-[#41A0E4] mb-4">
          IDR {product.price.toFixed(0)}
        </div>
      </div>
    </div>
  );
};

export default Card;
