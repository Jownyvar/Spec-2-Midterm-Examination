import React from "react";
import { useState } from "react";
import { register, googleSignIn } from "../lib/firebase";
const Register = () => {
  const [form, setForm] = useState({ email: "", password: "" });

  function handleOnChange(e) {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await register(form.email, form.password);
    console.log(response);
  }

  return (
    <div>
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
          type="text"
          placeholder="password"
          value={form.password}
          name="password"
          onChange={handleOnChange}
        />
        <button>Register</button>
      </form>
      <button onClick={googleSignIn}>Google</button>
    </div>
  );
};

export default Register;
