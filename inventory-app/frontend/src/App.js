import { useState } from "react";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import "./styles/main.scss";

function App() {
  const [page, setPage] = useState("home");
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <>
      {page === "home" && <Home setPage={setPage} />}

      {page === "auth" && (
        <Auth setToken={setToken} setPage={setPage} />
      )}

      {page === "dashboard" && (
        <Dashboard setPage={setPage} setToken={setToken} />
      )}
    </>
  );
}

export default App;