import React, { useState } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await register(form);
    if (res.ok) navigate("/dashboard");
    else setError(res.error);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-6 w-full max-w-sm">
        <h2 className="text-xl font-bold mb-4">Register</h2>
        {error && <p className="text-red-500 mb-2">{error}</p>}
        <input type="text" name="name" placeholder="Name" className="input mb-3" value={form.name} onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" className="input mb-3" value={form.email} onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" className="input mb-3" value={form.password} onChange={handleChange} required />
        <button className="btn btn-primary w-full mb-3">Register</button>
        <p className="text-sm text-gray-600">
          Already have an account? <Link to="/login" className="text-blue-600">Login</Link>
        </p>
      </form>
    </div>
  );
};

export default Register;
