import { useState } from "react";
import API from "../api";

export default function Auth({ setToken, setPage }) {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState({ email: "", password: "" });

  const submit = async () => {
    const url = isLogin ? "/auth/login" : "/auth/register";
    const res = await API.post("/auth/login", form);

localStorage.setItem("token", res.data.token);  // IMPORTANT
setToken(res.data.token);
setPage("dashboard");

    if (isLogin) {
      setToken(res.data.token);
      setPage("dashboard");
    } else {
      alert("Registered successfully 🎉");
      setIsLogin(true);
    }
  };

  return (
    <div style={{ textAlign: "center", marginTop: "80px" }}>
      <div className="card" style={{ width: "300px", margin: "auto" }}>
        <h2>{isLogin ? "Login" : "Register"}</h2>

        <input
          placeholder="Email"
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />

        <input
          type="password"
          placeholder="Password"
          onChange={(e) => setForm({ ...form, password: e.target.value })}
        />

        <button onClick={submit} style={{ width: "100%", marginTop: 10 }}>
          {isLogin ? "Login" : "Register"}
        </button>

        <p
          style={{ cursor: "pointer", color: "blue" }}
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Create account" : "Already have account?"}
        </p>
      </div>
    </div>
  );
}