import React from "react";
import { useState } from "react";
import { logIn, googleSignIn } from "../lib/firebase";
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  function handleOnChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleLogin(e) {
    e.preventDefault();
    const response = await logIn(form.email, form.password);
    if (response) {
      navigate("/");
    }
    console.log(response);
  }

  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="email"
          value={form.email}
          name="email"
          onChange={handleOnChange}
        />
        <input
          type="password"
          placeholder="password"
          value={form.password}
          name="password"
          onChange={handleOnChange}
        />
        <button onClick={handleLogin}>Login</button>
      </form>
    </div>
  );
};

export default Login;
