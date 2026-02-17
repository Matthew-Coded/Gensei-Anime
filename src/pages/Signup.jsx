import React, { useState } from "react";
import { Link } from "react-router-dom";
import { User, Mail, Lock, LineSquiggle, BookDashed } from "lucide-react";

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    console.log("Signup submit:", formData);
    alert("Signed up (demo). Wire this to your backend next.");
  };

  return (
    <section className="min-h-screen bg-slate-950 text-white flex items-center justify-center px-6 py-16 relative overflow-hidden">
      <div className="absolute -top-24 -left-24 w-96 h-96 bg-blue-500/10 blur-3xl rounded-full" />
      <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-cyan-400/10 blur-3xl rounded-full" />

      <div className="w-full max-w-xl relative">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/5 border border-white/10 mb-5">
            <BookDashed className="w-7 h-7 text-blue-400" />
          </div>

          <h1 className="text-4xl sm:text-5xl font-bold mb-3">
            <span className="bg-gradient-to-b from-white to-gray-300 bg-clip-text text-transparent">
              Join the
            </span>
            <br />
            <span className="bg-gradient-to-b from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Community
            </span>
          </h1>

          <p className="text-gray-400 max-w-md mx-auto">
            Create an account to save genres, favorites, and build your watchlist.
          </p>
        </div>

        <div className="relative bg-slate-900/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 sm:p-8 overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-br from-white/10 via-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 pointer-events-none rounded-2xl" />

          <form onSubmit={handleSubmit} className="relative space-y-5">
            {/* Username */}
            <div>
              <label className="text-sm text-gray-300 font-semibold">Username</label>
              <div className="mt-2 flex items-center gap-3 bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-400/40 transition">
                <User className="w-5 h-5 text-blue-400" />
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="yourname"
                  className="w-full bg-transparent outline-none text-gray-200 placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label className="text-sm text-gray-300 font-semibold">Email</label>
              <div className="mt-2 flex items-center gap-3 bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-400/40 transition">
                <Mail className="w-5 h-5 text-blue-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@example.com"
                  className="w-full bg-transparent outline-none text-gray-200 placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm text-gray-300 font-semibold">Password</label>
              <div className="mt-2 flex items-center gap-3 bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-400/40 transition">
                <Lock className="w-5 h-5 text-blue-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none text-gray-200 placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            {/* Confirm Password */}
            <div>
              <label className="text-sm text-gray-300 font-semibold">Confirm Password</label>
              <div className="mt-2 flex items-center gap-3 bg-slate-950/40 border border-white/10 rounded-xl px-4 py-3 focus-within:border-blue-400/40 transition">
                <Lock className="w-5 h-5 text-blue-400" />
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-transparent outline-none text-gray-200 placeholder:text-gray-500"
                  required
                />
              </div>
            </div>

            <button
              type="submit"
              className="group w-full px-6 py-3 sm:py-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl font-semibold text-sm sm:text-base transition-all duration-300 hover:bg-white/10 flex items-center justify-center space-x-2"
            >
              <span>Create Account</span>
              <LineSquiggle className="w-4 h-4 text-blue-400" />
            </button>

            <div className="text-center text-sm text-gray-400">
              Already have an account?{" "}
              <Link to="/login" className="text-blue-400 hover:text-blue-300 font-semibold">
                Login
              </Link>
            </div>
          </form>
        </div>

        <div className="mt-8 text-center text-gray-500 text-xs">
        </div>
      </div>
    </section>
  );
};

export default Signup;
