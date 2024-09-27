import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const Signup = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '', role: 'Public' });
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const { data } = await axios.post('http://localhost:5000/api/auth/signup', formData);
      localStorage.setItem('token', data.token);
      navigate('/dashboard');
    } catch (error) {
      setError('Signup failed. Please try again.');
      console.log('Signup error:', error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <h2 className="text-3xl font-semibold text-center text-blue-600 mb-6">Sign Up</h2>

        {error && <p className="text-red-500 mb-4">{error}</p>}

        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-medium mb-2">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700 font-medium mb-2">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
              value={formData.password}
              onChange={handleChange}
              placeholder="Enter your password"
              required
            />
          </div>

          <div className="mb-4">
            <label htmlFor="role" className="block text-gray-700 font-medium mb-2">Role</label>
            <select
              id="role"
              name="role"
              className="w-full border border-gray-300 rounded px-4 py-2 focus:outline-none focus:border-blue-400"
              value={formData.role}
              onChange={handleChange}
              required
            >
              <option value="Public">Public</option>
              <option value="Lawyer">Lawyer</option>
              <option value="Judge">Judge</option>
            </select>
          </div>

          <div className="flex justify-center">
            <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-all duration-300">Sign Up</button>
          </div>
        </form>

        <div className="text-center mt-6">
          <p className="text-gray-600">
            Already have an account? <a href="/login" className="text-blue-600 hover:underline">Log In</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Signup;
