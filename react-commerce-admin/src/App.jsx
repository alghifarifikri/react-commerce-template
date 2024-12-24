import {
  BrowserRouter as Router,
  Route,
  Routes,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";
import Cookies from "js-cookie";
import MainPage from "./pages/index";
import Login from "./pages/Login";
import Navbar from "./components/molecules/Navbar";
import Sidebar from "./components/molecules/Sidebar";
import ManagementUser from "./pages/Management-User";
import ManagementProduct from "./pages/Management-Product";

const App = () => {
  return (
    <div>
      <Router>
        <div>
          <Routes>
            <Route
              path="/"
              element={<ProtectedRoute component={<MainPage />} />}
            />
            <Route
              path="/management-user"
              element={<ProtectedRoute component={<ManagementUser />} />}
            />
            <Route
              path="/management-product"
              element={<ProtectedRoute component={<ManagementProduct />} />}
            />
            <Route
              path="/login"
              element={<RedirectIfAuthenticated component={<Login />} />}
            />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

const ProtectedRoute = ({ component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (!token) {
      navigate("/login");
    }
  }, [navigate]);

  return (
    <div className="bg-[#F8F8F8] h-screen flex flex-col">
      <Navbar />

      <div className="flex flex-row flex-1 overflow-hidden">
        <Sidebar />

        <main className="flex-1 overflow-y-auto w-full">{component}</main>
      </div>
    </div>
  );
};

const RedirectIfAuthenticated = ({ component }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("auth_token");
    if (token) {
      navigate("/");
    }
  }, [navigate]);

  return component;
};

export default App;
