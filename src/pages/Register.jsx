import React from "react";
import { useState } from "react";
import { register, googleSignIn } from "../lib/firebase";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();
  function handleOnChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      const response = await register(form.email, form.password);
      navigate("/Login");
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="form-layout">
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
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
          <button>Register</button>
          <p>Or sign up with</p>
          <button onClick={googleSignIn}>Google</button>
        </form>
      </div>
    </>
  );
};

export default Register;
