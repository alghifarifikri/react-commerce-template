import { useEffect, useState } from "react";
import Input from "../atoms/Input";
import Button from "../atoms/Button";
import Modal from "../atoms/Modal";
import Cookies from "js-cookie";
import { endpoint } from "../../utils/endpoint";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isRegisterModalOpen, setRegisterModalOpen] = useState(false);
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [registerData, setRegisterData] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });
  const [loginData, setLoginData] = useState({ email: "", password: "" });

  useEffect(() => {
    const token = Cookies.get("authToken");
    setIsLoggedIn(!!token);
  }, []);

  const generateRandomPassword = () => {
    return Math.random().toString(36).slice(-8);
  };

  const handleRegister = async () => {
    const password = generateRandomPassword();
    try {
      const response = await endpoint.postRegister({
        ...registerData,
        password,
      });

      if (response.status === 201) {
        alert("Pendaftaran berhasil! Password dikirimkan ke Email Anda!");
        setRegisterModalOpen(false);
      }
    } catch (error) {
      console.error("Error registering user:", error);
    }
  };

  const handleLogin = async () => {
    try {
      const { data } = await endpoint.getLogin({
        email: loginData.email,
        password: loginData.password,
      });

      if (data.length > 0) {
        setIsLoggedIn(true);
        Cookies.set("authToken", "dummy-token", { expires: 1 });
        alert("Login berhasil!");
        setLoginModalOpen(false);
      } else {
        alert("Email atau password salah!");
      }
    } catch (error) {
      console.error("Error logging in:", error);
    }
  };

  const handleLogout = () => {
    Cookies.remove("authToken");
    setIsLoggedIn(false);
    alert("Anda telah logout!");
  };

  return (
    <nav className="text-white bg-white fixed w-full z-10 py-2 shadow-lg">
      <div className="px-20 mx-auto flex items-center h-16">
        <div className="mr-20">
          <img src="/images/logo.webp" alt="logo" />
        </div>
        <div className="w-full hidden md:block">
          <Input type="search" placeholder={"Cari parfum kesukaanmu"} />
        </div>
        <div className="ml-20 hidden md:block">
          {isLoggedIn ? (
            <Button label="Logout" type="Secondary" onClick={handleLogout} />
          ) : (
            <Button
              label="Masuk"
              type="Secondary"
              onClick={() => setLoginModalOpen(true)}
            />
          )}
        </div>
        {!isLoggedIn && (
          <div className="ml-4 hidden md:block">
            <Button
              label="Daftar"
              type="primary"
              onClick={() => setRegisterModalOpen(true)}
            />
          </div>
        )}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <span className="text-xl text-[#013787]">&#9776;</span>
        </button>
      </div>

      {/* Modal Register */}
      {isRegisterModalOpen && (
        <Modal
          title="Daftar"
          onClose={() => setRegisterModalOpen(false)}
          onSubmit={handleRegister}
        >
          <Input
            type="text"
            className="input"
            placeholder={"Nama"}
            value={registerData.name}
            onChange={(e) => setRegisterData({ ...registerData, name: e })}
          />
          <br />
          <Input
            type="text"
            placeholder="Nomor Telepon"
            className="input"
            value={registerData.phone}
            onChange={(e) => setRegisterData({ ...registerData, phone: e })}
          />
          <br />
          <Input
            type="email"
            placeholder="Email"
            className="input"
            value={registerData.email}
            onChange={(e) => setRegisterData({ ...registerData, email: e })}
          />
        </Modal>
      )}

      {/* Modal Login */}
      {isLoginModalOpen && (
        <Modal
          title="Masuk"
          onClose={() => setLoginModalOpen(false)}
          onSubmit={handleLogin}
        >
          <Input
            type="email"
            placeholder="Email"
            className="input"
            value={loginData.email}
            onChange={(e) => setLoginData({ ...loginData, email: e })}
          />
          <br />
          <Input
            type="password"
            placeholder="Password"
            className="input"
            value={loginData.password}
            onChange={(e) => setLoginData({ ...loginData, password: e })}
          />
        </Modal>
      )}
    </nav>
  );
};

export default Navbar;
