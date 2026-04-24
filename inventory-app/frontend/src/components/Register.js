import { useState } from "react";
import API from "../api";

export default function Register() {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    await API.post("/auth/register", form);
    alert("Registered!");
  };

  return (
    <div>
      <h2>Register</h2>
      <input onChange={e => setForm({ ...form, email: e.target.value })}/>
      <input type="password" onChange={e => setForm({ ...form, password: e.target.value })}/>
      <button onClick={submit}>Register</button>
    </div>
  );
}