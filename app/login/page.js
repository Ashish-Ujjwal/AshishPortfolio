'use client';

import { useState, useContext, useEffect } from 'react';
import { Eye, EyeOff } from 'lucide-react';
import { context } from '@/context/context';
import Layout from '@/layout/Layout';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const { page_info_function } = useContext(context);

  useEffect(() => {
    page_info_function("Login Now <br>Access Portal", "login", "login");
  }, []);

  const handleLogin = () => {
    console.log('Logging in:', { email, password });
  };

  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 px-4 rounded-xl">
        <div className="bg-[#303746] rounded-xl p-8 max-w-md w-full shadow-lg">
          <h2 className="text-2xl sm:text-3xl font-semibold text-white mb-6">
            Sign in to your account
          </h2>
            {/* <div className="text-red-500 text-xl font-bold">Tailwind is working!</div> */}

          <div className="space-y-4">
            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-white mb-1">
                Email Address
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none"
              />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-1">
                Password
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPassword ? 'text' : 'password'}
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-2 rounded-md border border-gray-600 bg-transparent text-white placeholder-gray-400 focus:ring-2 focus:ring-indigo-500 outline-none pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-2 flex items-center text-gray-400"
                >
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div className="flex items-center justify-between text-sm text-gray-300">
              <label className="flex items-center gap-2">
                <input type="checkbox" className="accent-indigo-500" />
                Remember me
              </label>
              <a href="#" className="text-blue-500 hover:underline">
                Forgot password?
              </a>
            </div>

            {/* Login Button */}
            <button
              onClick={handleLogin}
              className="w-full py-2.5 mt-2 rounded-md bg-gradient-to-r from-green-400 via-purple-400 to-pink-500 text-white font-semibold hover:opacity-90 transition"
            >
              Sign in
            </button>
          </div>
        </div>
      </div>

    </Layout>
  );
}
