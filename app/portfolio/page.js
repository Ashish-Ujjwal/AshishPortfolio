'use client';

import { useContext, useEffect, useState } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { context } from '@/context/context';
import Layout from '@/layout/Layout';

export default function LoginPageStyled() {
  const { page_info_function } = useContext(context);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    page_info_function("Login Now <br>Access Portal", "login", "login");
  }, []);

  const handleLogin = () => {
    console.log("Logging in with:", { email, password });
  };

  return (
    <Layout>
      <div className="min-h-screen flex items-center justify-center bg-white px-4">
        <div className="w-full max-w-md bg-white border border-gray-200 shadow-lg rounded-xl p-8 space-y-6">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800">Sign in to your account</h2>
          </div>

          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                value={email}
                placeholder="Enter your Email"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  value={password}
                  placeholder="Enter your Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 text-gray-800 pr-10"
                />
                <button
                  type="button"
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Options Row */}
            <div className="flex items-center justify-between text-sm text-gray-600">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-600" />
                Remember me
              </label>
              <a href="#" className="text-indigo-600 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Submit Button */}
            <button
              onClick={handleLogin}
              className="w-full py-2.5 bg-gradient-to-r from-green-400 to-pink-500 text-white font-semibold rounded-md hover:opacity-90 transition"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
