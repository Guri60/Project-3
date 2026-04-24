import { useState } from "react";
import API, { setToken } from "../api";

export default function Login({ setToken: saveToken }) {
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    const res = await API.post("/auth/login", form);
    setToken(res.data.token);
    saveToken(res.data.token);
  };

  return (
    <div>
      <h2>Login</h2>
      <input placeholder="Email" onChange={e => setForm({ ...form, email: e.target.value })}/>
      <input placeholder="Password" type="password" onChange={e => setForm({ ...form, password: e.target.value })}/>
      <button onClick={submit}>Login</button>
    </div>
  );
}