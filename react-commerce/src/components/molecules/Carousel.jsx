import { useState } from "react";

const Carousel = () => {
  const images = [
    "/images/banner.png",
    "/images/banner.png",
    "/images/banner.png",
    "/images/banner.png",
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-[650px] pt-32 overflow-hidden">
      <div
        className="flex transition-transform duration-500"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className="w-full h-[400px] object-cover flex-shrink-0"
          />
        ))}
      </div>

      <div className="relative mt-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        <div
          onClick={goToPrevious}
          className="transform -translate-y-1/2 cursor-pointer text-3xl text-[#A19B91] rounded-full p-2 hover:bg-gray-200"
        >
          &#8249;
        </div>
        {images.map((_, index) => (
          <div
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              currentIndex === index ? "bg-[#A19B91]" : "bg-[#F9F9F9]"
            }`}
          ></div>
        ))}
        <div
          onClick={goToNext}
          className="transform -translate-y-1/2 cursor-pointer text-3xl text-[#A19B91] rounded-full p-2 hover:bg-gray-200"
        >
          &#8250;
        </div>
      </div>
    </div>
  );
};

export default Carousel;
