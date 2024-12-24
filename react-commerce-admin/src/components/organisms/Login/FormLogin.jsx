import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";
import Input from "../../atoms/Input";
import Button from "../../atoms/Button";
import { endpoint } from "../../../utils/endpoint";

const FormLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const { data } = await endpoint.getLogin({
        email: email,
        password: password,
      });

      if (data.length > 0) {
        Cookies.set("auth_token", "dummy_token_12345", { expires: 7 });

        alert("Login berhasil!");
        navigate("/");
      } else {
        setError("Email atau password salah!");
      }
    } catch (err) {
      console.error("Error logging in:", err);
      setError("Terjadi kesalahan saat login. Silakan coba lagi.");
    }
  };

  return (
    <div className="bg-white py-8 px-20 rounded w-full md:w-1/2 lg:w-full">
      <h2 className="text-2xl font-semibold mb-2">Selamat Datang Admin</h2>
      <p className="text-[#9B9B9B] text-sm mb-8">
        Silahkan masukkan email atau nomor telepon dan password Anda untuk mulai
        menggunakan aplikasi
      </p>
      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
      <form onSubmit={handleSubmit}>
        <Input
          label="Email / Nomor Telepon"
          type="email"
          id="email"
          placeholder="Contoh: admin@gmail.com"
          value={email}
          onChange={(e) => setEmail(e)}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
        <Input
          label="Password"
          type="password"
          id="password"
          placeholder="Masukkan password"
          value={password}
          onChange={(e) => setPassword(e)}
          className="w-full border border-gray-300 rounded px-2 py-1"
          required
        />
        <br />
        <Button
          buttonType="Submit"
          label="Masuk"
          type="primary"
          width="w-full"
        />
      </form>
    </div>
  );
};

export default FormLogin;
