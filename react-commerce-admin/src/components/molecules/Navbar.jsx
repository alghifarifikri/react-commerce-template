import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    Cookies.remove("auth_token");
    alert("Anda telah logout!");
    navigate("/login");
  };

  return (
    <nav className="text-white bg-white w-full z-10 py-2 mb-1">
      <div className="px-10 mx-auto flex items-center h-16">
        <div className="mr-20">
          <img src="/images/logo.webp" alt="logo" />
        </div>
        <div className="flex flex-row ml-auto">
          <div className="flex flex-col mr-2">
            <p className="text-blue-400 text-sm text-right">Halo, Admin</p>
            <p className="text-black">Alghifari Fikri</p>
          </div>
          <div
            className="bg-gray-400 rounded-full w-12 h-12 cursor-pointer"
            onClick={handleLogout}
          ></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
