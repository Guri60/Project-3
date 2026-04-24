import API from "../api";

export default function ItemList({ items, setItems, setEditItem }) {

  const deleteItem = async (id) => {
    await API.delete(`/items/${id}`);
    setItems(items.filter(item => item._id !== id));
  };

  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
      {items.map(item => (
        <div className="card" key={item._id}>
          <h3>{item.name}</h3>
          <p>Qty: {item.quantity}</p>
          <p>Price: ${item.price}</p>

          <button
            type="button"
            onClick={() => setEditItem(item)}
            style={{ background: "orange" }}
          >
            Update
          </button>

          <button
            type="button"
            onClick={() => deleteItem(item._id)}
            style={{ background: "red", color: "white" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}