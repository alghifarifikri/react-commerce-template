import FooterComponent from "../components/atoms/Footer";
import Carousel from "../components/molecules/Carousel";
import DisplayItem from "../components/molecules/DisplayItem";
import Navbar from "../components/molecules/Navbar";
import NewItem from "../components/molecules/NewItem";

const products = [
  {
    id: "1",
    thumbnail: "/images/product.png",
    image: "/images/product.png",
    title: "Saff & Co SOTB",
    price: 260000,
  },
  {
    id: "2",
    thumbnail: "/images/product.png",
    image: "/images/product.png",
    title: "HNMS Alpha",
    price: 260000,
  },
  {
    id: "3",
    thumbnail: "/images/product.png",
    image: "/images/product.png",
    title: "HNMS Orgasm",
    price: 260000,
  },
  {
    id: "4",
    thumbnail: "/images/product.png",
    image: "/images/product.png",
    title: "California",
    price: 260000,
  },
  {
    id: "5",
    thumbnail: "/images/product.png",
    image: "/images/product.png",
    title: "Saff & Co SOTB",
    price: 260000,
  },
  {
    id: "6",
    thumbnail: "/images/product.png",
    image: "/images/product.png",
    title: "Saff & Co SOTB",
    price: 260000,
  },
  {
    id: "7",
    thumbnail: "/images/product.png",
    image: "/images/product.png",
    title: "Saff & Co SOTB",
    price: 260000,
  },
];

function MainPage() {
  return (
    <div>
      <Navbar />
      <div className="px-40">
        <Carousel />
        <NewItem products={products} />
        <DisplayItem products={products} />
      </div>
      <hr className="mt-20" />
      <FooterComponent />
    </div>
  );
}

export default MainPage;
