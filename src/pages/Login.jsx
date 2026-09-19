import React from "react";
import { useState } from "react";
import { logIn, googleSignIn } from "../lib/firebase";
import { useNavigate } from "react-router-dom";
import "./Login.css";

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

  async function handleGoogleLogIn(e) {
    e.preventDefault();
    const response = await googleSignIn();
    if (response) {
      navigate("/");
    }
    console.log(response);
  }
  return (
    <>
      <div className="form-layout">
        <h1>Log In</h1>
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
          <button onClick={handleGoogleLogIn}>Google</button>
        </form>
      </div>
    </>
  );
};

export default Login;
