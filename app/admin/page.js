'use client';

import React, { useState, useEffect, useRef, useContext } from 'react';
import { context } from '@/context/context';
import Layout from '@/layout/Layout';
import { Plus, Edit, Trash2, Eye, Save, X, Menu, BarChart3, FolderOpen, Brain, Briefcase, MessageSquare, PenTool, CheckCircle, XCircle } from 'lucide-react';
import { Dashboard } from './Dashboard';
import { Projects } from './Projects';
import { Testimonials } from './Testimonials';
import { Employment } from './Employment';
import { Skills } from './Skills';
import { Blogs } from './Blogs';
import { initialData } from './initialData';


// Main App Component
const App = () => {

    const { page_info_function } = useContext(context);

    useEffect(() => {
        page_info_function("EDIT Y'R PROFILE", "Welcome Ashish!", "Admin");
    }, []);

    const [activeSection, setActiveSection] = useState('dashboard');
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [data, setData] = useState(initialData); // State to hold all portfolio data
    // Initialize windowWidth to a default value for SSR, it will be updated on client-side mount
    const [windowWidth, setWindowWidth] = useState(1024); // Default to a desktop width
    const topBarRef = useRef(null);
    const [topBarHeight, setTopBarHeight] = useState(0);

    // Effect to inject global styles (font and body background)
    useEffect(() => {
        const styleTagId = 'global-app-styles';
        if (!document.getElementById(styleTagId)) {
            const style = document.createElement('style');
            style.id = styleTagId;
            style.innerHTML = `
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap');
        body {
          margin: 0;
          font-family: 'Inter', sans-serif;
          background-color: #f3f4f6; /* bg-gray-100 */
        }
        /* Basic reset for consistency */
        *, *::before, *::after {
          box-sizing: border-box;
        }
      `;
            document.head.appendChild(style);
        }
    }, []);

    // Effect for window resize listener to handle responsiveness and top bar height
    useEffect(() => {
        // Only access window and DOM elements on the client side
        if (typeof window !== 'undefined') {
            const updateDimensions = () => {
                setWindowWidth(window.innerWidth);
                if (topBarRef.current) {
                    setTopBarHeight(topBarRef.current.offsetHeight);
                }
            };

            updateDimensions(); // Set initial dimensions
            window.addEventListener('resize', updateDimensions);
            return () => window.removeEventListener('resize', updateDimensions);
        }
    }, []);

    // Function to render the active section component
    const renderSection = () => {
        switch (activeSection) {
            case 'dashboard':
                return <Dashboard data={data} />;
            case 'projects':
                return <Projects data={data} setData={setData} />;
            case 'skills':
                return <Skills data={data} setData={setData} />;
            case 'employment':
                return <Employment data={data} setData={setData} />;
            case 'testimonials':
                return <Testimonials data={data} setData={setData} />;
            case 'blogs':
                return <Blogs data={data} setData={setData} />;
            default:
                return <Dashboard data={data} />;
        }
    };

    const navItems = [
        { name: 'Dashboard', icon: BarChart3, section: 'dashboard' },
        { name: 'Projects', icon: FolderOpen, section: 'projects' },
        { name: 'Skills', icon: Brain, section: 'skills' },
        { name: 'Employment', icon: Briefcase, section: 'employment' },
        { name: 'Testimonials', icon: MessageSquare, section: 'testimonials' },
        { name: 'Blog Posts', icon: PenTool, section: 'blogs' },
    ];

    const isLargeScreen = windowWidth >= 1024; // lg: breakpoint

    return (
        <Layout noSidebar>
            <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', fontFamily: 'Inter, sans-serif', display: 'flex', flexDirection: 'column' }}>
                {/* Top Bar for Mobile */}
                {!isLargeScreen && (
                    <div ref={topBarRef} style={{
                        backgroundColor: '#fff', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // bg-white shadow-sm
                        padding: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between', // p-4 flex items-center justify-between
                        position: 'sticky', top: 0, zIndex: 40, borderBottom: '1px solid #e5e7eb' // sticky top-0 z-40 border-b border-gray-200
                    }}>
                        <h1 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937' }}>Portfolio Admin</h1> {/* text-xl font-bold text-gray-800 */}
                        <button
                            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
                            style={{
                                color: '#4b5563', // text-gray-600
                                padding: '0.5rem', borderRadius: '0.375rem', // p-2 rounded-md
                                transition: 'color 200ms, background-color 200ms', // hover:text-gray-800 hover:bg-gray-100
                                backgroundColor: 'transparent', border: 'none', cursor: 'pointer'
                            }}
                            onMouseEnter={(e) => { e.currentTarget.style.color = '#1f2937'; e.currentTarget.style.backgroundColor = '#f3f4f6'; }}
                            onMouseLeave={(e) => { e.currentTarget.style.color = '#4b5563'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                        >
                            <Menu size={24} />
                        </button>
                    </div>
                )}

                <div style={{ display: 'flex', flex: 1 }}> {/* flex flex-1 */}
                    {/* Sidebar Overlay for Mobile */}
                    {!isLargeScreen && isSidebarOpen && (
                        <div
                            onClick={() => setIsSidebarOpen(false)}
                            style={{
                                position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
                                backgroundColor: 'rgba(0, 0, 0, 0.5)', // bg-black bg-opacity-50
                                zIndex: 49, // Below sidebar but above main content
                            }}
                        ></div>
                    )}

                    {/* Sidebar (now top-down menu on mobile) */}
                    <aside style={{
                        position: isLargeScreen ? 'relative' : 'fixed', // lg:relative : fixed
                        top: isLargeScreen ? '0' : `${topBarHeight}px`, // Adjusted top for mobile
                        left: 0, right: 0, // Full width on mobile
                        height: 'min-content', // Adjust height to content
                        zIndex: 50, width: isLargeScreen ? '16rem' : '100%', // w-64, full width on mobile
                        backgroundColor: '#1f2937', color: '#fff', // bg-gray-800 text-white
                        padding: '1.5rem', display: 'flex', flexDirection: 'column', // p-6 flex flex-col
                        transform: isLargeScreen ? 'translateY(0)' : (isSidebarOpen ? 'translateY(0)' : 'translateY(-100%)'), // transform for top-down animation
                        transition: 'transform 300ms ease-in-out', // transition-transform duration-300 ease-in-out
                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)' // shadow-lg
                    }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}> {/* flex justify-between items-center mb-8 */}
                            <h1 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#fff' }}>Portfolio Admin</h1> {/* text-2xl font-bold text-white */}
                            {!isLargeScreen && (
                                <button
                                    onClick={() => setIsSidebarOpen(false)}
                                    style={{
                                        color: '#9ca3af', // text-gray-400
                                        padding: '0.25rem', borderRadius: '0.375rem', // p-1 rounded-md
                                        transition: 'color 200ms, background-color 200ms', // hover:text-white hover:bg-gray-700
                                        backgroundColor: 'transparent', border: 'none', cursor: 'pointer'
                                    }}
                                    onMouseEnter={(e) => { e.currentTarget.style.color = '#fff'; e.currentTarget.style.backgroundColor = '#374151'; }}
                                    onMouseLeave={(e) => { e.currentTarget.style.color = '#9ca3af'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                                >
                                    <X size={24} />
                                </button>
                            )}
                        </div>
                        <nav style={{ flex: 1 }}> {/* flex-1 space-y-2 */}
                            {navItems.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <button
                                        key={item.section}
                                        onClick={() => {
                                            setActiveSection(item.section);
                                            if (!isLargeScreen) setIsSidebarOpen(false); // Close sidebar on item click for mobile
                                        }}
                                        style={{
                                            display: 'flex', alignItems: 'center', width: '100%', // flex items-center w-full
                                            padding: '0.5rem 1rem', borderRadius: '0.5rem', // px-4 py-2 rounded-lg
                                            textAlign: 'left', // text-left
                                            transition: 'color 200ms, background-color 200ms', // transition-colors duration-200
                                            backgroundColor: activeSection === item.section ? '#2563eb' : 'transparent', // bg-blue-600
                                            color: activeSection === item.section ? '#fff' : '#e5e7eb', // text-white : text-gray-300
                                            boxShadow: activeSection === item.section ? '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' : 'none', // shadow-md
                                            border: 'none', cursor: 'pointer',
                                            marginTop: index > 0 ? '0.5rem' : '0' // space-y-2
                                        }}
                                        onMouseEnter={(e) => {
                                            if (activeSection !== item.section) {
                                                e.currentTarget.style.backgroundColor = '#374151'; // hover:bg-gray-700
                                                e.currentTarget.style.color = '#fff'; // hover:text-white
                                            }
                                        }}
                                        onMouseLeave={(e) => {
                                            if (activeSection !== item.section) {
                                                e.currentTarget.style.backgroundColor = 'transparent';
                                                e.currentTarget.style.color = '#e5e7eb';
                                            }
                                        }}
                                    >
                                        <Icon size={20} style={{ marginRight: '0.75rem' }} /> {/* mr-3 */}
                                        {item.name}
                                    </button>
                                );
                            })}
                        </nav>
                        <div style={{ marginTop: 'auto', paddingTop: '1.5rem', borderTop: '1px solid #374151', color: '#9ca3af', fontSize: '0.875rem' }}> {/* mt-auto pt-6 border-t border-gray-700 text-gray-400 text-sm */}
                            <p>&copy; 2024 Portfolio Admin</p>
                            <p>Version 1.0</p>
                        </div>
                    </aside>

                    {/* Main Content Area */}
                    <main style={{ flex: 1, padding: isLargeScreen ? '2rem' : '1.5rem', overflowY: 'auto' }}> {/* flex-1 p-6 lg:p-8 overflow-y-auto */}
                        {renderSection()}
                    </main>
                </div>
            </div>
        </Layout>
    );
};

export default App;
