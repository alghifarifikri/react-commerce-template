import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const sidemenu = [
  {
    title: "Dashboard",
    route: "/",
    hovered: "dashboard",
    iconActive: "/images/icons/dashboard.svg",
    icon: "/images/icons/dashboard-black.svg",
  },
  {
    title: "Manajemen User",
    route: "/management-user",
    hovered: "management-user",
    iconActive: "/images/icons/user.svg",
    icon: "/images/icons/user-black.svg",
  },
  {
    title: "Manajemen Produk",
    route: "/management-product",
    hovered: "management-product",
    iconActive: "/images/icons/product.svg",
    icon: "/images/icons/product-black.svg",
  },
];

const Sidebar = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const [hoveredItem, setHoveredItem] = useState(null);

  return (
    <aside className="flex h-screen overflow-hidden">
      <div className="bg-white text-black transition-all duration-300 fixed lg:relative h-full w-64">
        <div>
          <ul className="mt-4 space-y-2">
            {sidemenu.map((menu, index) => (
              <li
                key={index}
                className={`flex items-center p-3 hover:text-white hover:bg-[#41A0E4] cursor-pointer ${
                  pathname === menu.route ? "bg-[#41A0E4]" : ""
                }`}
                onMouseEnter={() => setHoveredItem(menu.hovered)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <Link
                  to={menu.route}
                  className="flex flex-row items-center w-full "
                >
                  <img
                    src={
                      hoveredItem === menu.hovered || pathname === menu.route
                        ? menu.iconActive
                        : menu.icon
                    }
                    alt={`${menu.title} Icon`}
                    width={24}
                    height={24}
                  />
                  <span
                    className={`ml-2 ${
                      hoveredItem === menu.hovered || pathname === menu.route
                        ? "text-white"
                        : "text-black"
                    }`}
                  >
                    {menu.title}
                  </span>
                </Link>
              </li>
            ))}
            {/* <li
              className={`flex items-center p-3 hover:text-white hover:bg-[#41A0E4] cursor-pointer ${
                pathname === "/management-user" ? "bg-[#41A0E4]" : ""
              }`}
              onMouseEnter={() => setHoveredItem("management-user")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                to="/management-user"
                className="flex flex-row items-center w-full "
              >
                <img
                  src={
                    hoveredItem === "management-user" ||
                    pathname === "/management-user"
                      ? "/images/icons/dashboard.svg"
                      : "/images/icons/dashboard-black.svg"
                  }
                  alt="API Keys Icon"
                  width={24}
                  height={24}
                />
                <span
                  className={`ml-2 ${
                    hoveredItem === "management-user" ||
                    pathname === "/management-user"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  Manajemen User
                </span>
              </Link>
            </li>
            <li
              className={`flex items-center p-3 hover:text-white hover:bg-[#41A0E4] cursor-pointer ${
                pathname === "/management-product" ? "bg-[#41A0E4]" : ""
              }`}
              onMouseEnter={() => setHoveredItem("management-product")}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <Link
                to="/management-product"
                className="flex flex-row items-center w-full "
              >
                <img
                  src={
                    hoveredItem === "management-product" ||
                    pathname === "/management-product"
                      ? "/images/icons/dashboard.svg"
                      : "/images/icons/dashboard-black.svg"
                  }
                  alt="API Keys Icon"
                  width={24}
                  height={24}
                />
                <span
                  className={`ml-2 ${
                    hoveredItem === "management-product" ||
                    pathname === "/management-product"
                      ? "text-white"
                      : "text-black"
                  }`}
                >
                  Manajemen Produk
                </span>
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
