import { useState } from "react";
import Card from "../atoms/Card";

const NewItem = ({ products = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const itemsToShow = 5;

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? products.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === products.length - 1 ? 0 : prevIndex + 1
    );
  };

  const displayedProducts = products.slice(
    currentIndex,
    currentIndex + itemsToShow
  );

  const overflowCount = currentIndex + itemsToShow - products.length;
  const visibleProducts =
    overflowCount > 0
      ? [...displayedProducts, ...products.slice(0, overflowCount)]
      : displayedProducts;

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-8">Terbaru</h2>
      {products.length > 0 ? (
        <div className="relative">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 transition-transform duration-500">
            {visibleProducts.map((product, index) => (
              <Card key={`${product.id}-${index}`} product={product} />
            ))}
          </div>

          {products.length > itemsToShow && (
            <>
              <div
                onClick={goToPrevious}
                className="absolute left-[-30px] top-1/2 transform text-3xl -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full hover:bg-gray-200"
              >
                &#8249;
              </div>
              <div
                onClick={goToNext}
                className="absolute right-[-30px] top-1/2 transform text-3xl -translate-y-1/2 cursor-pointer bg-white p-2 rounded-full hover:bg-gray-200"
              >
                &#8250;
              </div>
            </>
          )}
        </div>
      ) : (
        <p className="text-center text-gray-600">No products available.</p>
      )}
    </div>
  );
};

export default NewItem;
