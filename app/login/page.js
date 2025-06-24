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
      <div style={{ minHeight: '72vh', display: 'flex', justifyContent: 'center',  padding: '1rem' }}>
        <div className="trm-blog-categories " style={{  borderRadius: '0.75rem', padding: '2rem', maxWidth: '28rem', width: '100%', boxShadow: '0 10px 15px rgba(0,0,0,0.05)' }}>
          <h2 style={{ fontSize: '1.875rem', fontWeight: '600', marginBottom: '1.5rem', textAlign: 'center' }}>
            Sign in to your account
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
            {/* Email Field */}
            <div>
              <label htmlFor="email" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Email Address</label>
              <input id="email" type="email" placeholder="Enter your Email" value={email} onChange={(e) => setEmail(e.target.value)} style={{ width: '100%', padding: '0.625rem 1rem', borderRadius: '0.375rem', border: '1px solid #cbd5e0', backgroundColor: '#f9fafb', color: '#2d3748', outline: 'none' }} />
            </div>

            {/* Password Field */}
            <div>
              <label htmlFor="password" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', marginBottom: '0.25rem' }}>Password</label>
              <div style={{ position: 'relative' }}>
                <input id="password" type={showPassword ? 'text' : 'password'} placeholder="Enter your Password" value={password} onChange={(e) => setPassword(e.target.value)} style={{ width: '100%', padding: '0.625rem 1rem', borderRadius: '0.375rem', border: '1px solid #cbd5e0', backgroundColor: '#f9fafb', color: '#2d3748', outline: 'none', paddingRight: '2.5rem' }} />
                <button type="button" onClick={() => setShowPassword(!showPassword)} style={{ position: 'absolute', top: '50%', right: '0.75rem', transform: 'translateY(-50%)', display: 'flex', alignItems: 'center', color: '#718096', background: 'none', border: 'none', cursor: 'pointer' }}>
                  {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                </button>
              </div>
            </div>

            {/* Options */}
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.875rem' }}>
              <label style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <input type="checkbox" /> Remember me
              </label>
              <a href="#" style={{ textDecoration: 'none' }}>Forgot password?</a>
            </div>

            {/* Login Button */}
            <button onClick={handleLogin} style={{ width: '100%', padding: '0.75rem 1rem', marginTop: '0.25rem', borderRadius: '0.375rem', background: 'linear-gradient(to right, #667eea, #764ba2)', color: 'white', fontWeight: '600', border: 'none', cursor: 'pointer', transition: 'opacity 0.2s ease' }}>
              Sign in
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
