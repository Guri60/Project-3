import { useEffect, useState } from "react";
import API from "../api";

export default function ItemForm({ setItems, editItem, setEditItem }) {
  const [item, setItem] = useState({
    name: "",
    quantity: "",
    price: ""
  });

  // when update clicked → fill form
  useEffect(() => {
    if (editItem) {
      setItem(editItem);
    }
  }, [editItem]);

  // ADD or UPDATE
  const saveItem = async () => {
    if (editItem) {
      // UPDATE
      const res = await API.put(`/items/${editItem._id}`, item);

      setItems(prev =>
        prev.map(i => (i._id === editItem._id ? res.data : i))
      );

      setEditItem(null);
    } else {
      // ADD
      const res = await API.post("/items", item);
      setItems(prev => [...prev, res.data]);
    }

    setItem({ name: "", quantity: "", price: "" });
  };

  return (
    <div className="card">
      <h3>{editItem ? "Update Item" : "Add Item"}</h3>

      <input
        placeholder="Name"
        value={item.name}
        onChange={(e) => setItem({ ...item, name: e.target.value })}
      />

      <input
        placeholder="Quantity"
        value={item.quantity}
        onChange={(e) => setItem({ ...item, quantity: e.target.value })}
      />

      <input
        placeholder="Price"
        value={item.price}
        onChange={(e) => setItem({ ...item, price: e.target.value })}
      />

      <button type="button" onClick={saveItem}>
        {editItem ? "Update Item" : "Add Item"}
      </button>
    </div>
  );
}