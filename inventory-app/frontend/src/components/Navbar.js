
export default function Navbar({ setPage, setToken }) {
  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setPage("home");
  };

  return (
    <div className="navbar">
      <h2>📦 Inventory App</h2>

      <div style={{ display: "flex", gap: "10px" }}>
        <button type="button" onClick={() => setPage("home")}>
          Home
        </button>

        <button type="button" onClick={() => setPage("dashboard")}>
          Dashboard
        </button>

        <button type="button" onClick={logout} style={{ background: "red", color: "white" }}>
          Logout
        </button>
      </div>
    </div>
  );
}