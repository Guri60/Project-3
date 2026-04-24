import { useEffect, useState } from "react";
import API from "../api";
import ItemForm from "../components/ItemForm";
import ItemList from "../components/ItemList";
import Navbar from "../components/Navbar";

export default function Dashboard({ setPage, setToken }) {
  const [items, setItems] = useState([]);
  const [editItem, setEditItem] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");

    // If no token → send user to auth page
    if (!token) {
      setPage("auth");
      return;
    }

    // Fetch items from backend
    API.get("/items")
      .then((res) => {
        setItems(res.data);
      })
      .catch((err) => {
        // If token expired or invalid
        if (err.response?.status === 401) {
          localStorage.removeItem("token");
          setToken(null);
          setPage("auth");
        } else {
          console.error("Error fetching items:", err);
        }
      });
  }, [setPage, setToken]);

  return (
    <div>
      <Navbar setPage={setPage} setToken={setToken} />

      <div style={{ padding: "20px" }}>
        <ItemForm
          setItems={setItems}
          editItem={editItem}
          setEditItem={setEditItem}
        />

        <ItemList
          items={items}
          setItems={setItems}
          setEditItem={setEditItem}
        />
      </div>
    </div>
  );
}