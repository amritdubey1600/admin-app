import { useState, useEffect } from "react";
import { Shield } from "lucide-react";
import { Link } from 'react-router-dom';
import useAuth from "../hooks/useAuth";

const Signup = () => {  
  const [form, setForm] = useState({
    name: '',
    phNo: '',
    email: '',
    password: '',
    type: 'Admin'
  });

  const [showDelayMessage, setShowDelayMessage] = useState(false);

  const {error, loading, authenticate} = useAuth();

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    await authenticate(form, "signup");
  };

  // Handle delay message based on loading state
  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setShowDelayMessage(true);
      }, 5000);
      
      return () => clearTimeout(timer); // Cleanup when loading changes or unmount
    } else {
      setShowDelayMessage(false);
    }
  }, [loading]);

  return(
    <div className="min-h-screen bg-slate-100 flex justify-center items-center py-12 px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-slate-300 opacity-20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-slate-400 opacity-15 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 w-full max-w-md">
        <div className="bg-white p-8 rounded-xl shadow-lg border border-slate-200">
          <div className="text-center mb-8">
            <Shield className="h-12 w-12 mx-auto mb-4 text-slate-700" />
            <h2 className="text-3xl font-bold text-slate-900">Create Account</h2>
            <p className="text-slate-600 mt-2">Join our secure access control system</p>
          </div>

          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-medium text-slate-700">
              Full Name
            </label>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-white text-slate-900"
              placeholder="Enter your full name"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="name" className="block mb-2 font-medium text-slate-700">
              Phone No.
            </label>
            <input
              type="text"
              name="phNo"
              value={form.phNo}
              onInput={(e) => e.target.value = e.target.value.replace(/\D/g, '')}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-white text-slate-900"
              placeholder="Enter your phone no."
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block mb-2 font-medium text-slate-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-white text-slate-900"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block mb-2 font-medium text-slate-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-white text-slate-900"
              placeholder="Create a secure password"
            />
          </div>

          <div className="mb-6">
            <label htmlFor="type" className="block mb-2 font-medium text-slate-700">
              Account Type
            </label>
            <div className="relative">
              <select
                name="type"
                value={form.type}
                onChange={handleChange}
                className="appearance-none w-full px-4 py-3 pr-10 border border-slate-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-slate-500 focus:border-slate-500 bg-white text-slate-900"
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>

              {/* Custom dropdown arrow */}
              <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-slate-500">
                <svg
                  className="w-5 h-5"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path d="M7 7l3-3 3 3m0 6l-3 3-3-3" />
                </svg>
              </div>
            </div>
          </div>

          {error && (
            <div className="mb-6 p-3 bg-red-50 border border-red-200 rounded-lg">
              <p className="font-medium text-red-700">{error}</p>
            </div>
          )}

          {showDelayMessage && loading && (
            <div className="mb-6 p-3 bg-amber-50 border border-amber-200 rounded-lg">
              <p className="font-medium text-sm text-amber-700">
                ⏳ Please be patient! Our backend is deployed on a free tier and may take extra time to respond.
              </p>
            </div>
          )}

          <button
            disabled={loading}
            onClick={handleSubmit}
            className="w-full disabled:bg-slate-400 disabled:cursor-not-allowed bg-slate-700 hover:bg-slate-800 text-white font-semibold py-3 px-4 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
          >
            {loading ? (
              <span className="flex items-center justify-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Creating Account...
              </span>
            ) : (
              "Create Account"
            )}
          </button>

          <div className="mt-6 text-center">
            <p className="text-slate-600">
              Already have an account?{' '}
              <Link to="/login" className="font-medium text-slate-700 hover:text-slate-900 underline">
                Sign in here
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
