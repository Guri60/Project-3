
export default function Home({ setPage }) {
  return (
    <div style={{ textAlign: "center", paddingTop: "100px" }}>
      <h1 style={{ fontSize: "50px" }}>📦 Inventory Manager</h1>
      <p>Manage your products easily with style</p>

      <button onClick={() => setPage("auth")} style={{ marginRight: 10 }}>
        Login / Register
      </button>

      <button onClick={() => setPage("dashboard")}>
        Go Dashboard
      </button>
    </div>
  );
}