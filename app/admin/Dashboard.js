import React, { useState, useEffect } from 'react';
import { Modal, ConfirmDialog } from './ModalConfirmDialog';
import { Plus, Edit, Trash2, Eye, Save, X, Menu, BarChart3, FolderOpen, Brain, Briefcase, MessageSquare, PenTool, CheckCircle, XCircle } from 'lucide-react';

// Dashboard Component
export const Dashboard = ({ data }) => {
    const stats = [
        { title: 'Total Projects', value: data.projects.length, color: '#3b82f6', icon: FolderOpen }, // bg-blue-500
        { title: 'Skills', value: data.skills.length, color: '#22c55e', icon: Brain }, // bg-green-500
        { title: 'Employment History', value: data.employment.length, color: '#a855f7', icon: Briefcase }, // bg-purple-500
        { title: 'Testimonials', value: data.testimonials.length, color: '#f97316', icon: MessageSquare }, // bg-orange-500
        { title: 'Blog Posts', value: data.blogs.length, color: '#ec4899', icon: PenTool }, // bg-pink-500
    ];

    // Initialize windowWidth to 0, it will be updated on client-side mount
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        // Only access window on the client side
        if (typeof window !== 'undefined') {
            setWindowWidth(window.innerWidth);
            const handleResize = () => {
                setWindowWidth(window.innerWidth);
            };
            window.addEventListener('resize', handleResize);
            return () => window.removeEventListener('resize', handleResize);
        }
    }, []);

    const getGridTemplateColumns = () => {
        if (windowWidth >= 1280) return 'repeat(3, 1fr)'; // xl
        if (windowWidth >= 1024) return 'repeat(3, 1fr)'; // lg
        if (windowWidth >= 768) return 'repeat(2, 1fr)';  // md
        return 'repeat(1, 1fr)'; // default
    };

    const getRecentSectionGridTemplateColumns = () => {
        if (windowWidth >= 1024) return 'repeat(2, 1fr)'; // lg
        return 'repeat(1, 1fr)'; // default
    };

    return (
        <div style={{}}> {/* space-y-6 */}
            <div style={{
                display: 'grid',
                gridTemplateColumns: getGridTemplateColumns(),
                gap: '1rem', // gap-4
                marginBottom: '1.5rem' // for space-y-6
            }}>
                {stats.map((stat, index) => {
                    const Icon = stat.icon;
                    return (
                        <div key={index} style={{
                            backgroundColor: '#fff', padding: '1.5rem', // bg-white p-6
                            borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // rounded-lg shadow-sm
                            border: '1px solid #e5e7eb' // border border-gray-200
                        }}>
                            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}> {/* flex items-center justify-between */}
                                <div>
                                    <p style={{ fontSize: '0.875rem', fontWeight: '500', color: '#4b5563' }}>{stat.title}</p> {/* text-sm font-medium text-gray-600 */}
                                    <p style={{ fontSize: '1.5rem', fontWeight: '700', color: '#111827' }}>{stat.value}</p> {/* text-2xl font-bold text-gray-900 */}
                                </div>
                                <div style={{ padding: '0.75rem', borderRadius: '9999px', backgroundColor: stat.color }}> {/* p-3 rounded-full ${stat.color} */}
                                    <Icon style={{ width: '1.5rem', height: '1.5rem', color: '#fff' }} /> {/* w-6 h-6 text-white */}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>

            <div style={{
                display: 'grid',
                gridTemplateColumns: getRecentSectionGridTemplateColumns(),
                gap: '1.5rem', // gap-6
                marginBottom: '1.5rem' // for space-y-6
            }}>
                <div style={{
                    backgroundColor: '#fff', padding: '1.5rem', // bg-white p-6
                    borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // rounded-lg shadow-sm
                    border: '1px solid #e5e7eb' // border border-gray-200
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Recent Projects</h3> {/* text-lg font-semibold mb-4 text-gray-800 */}
                    <div style={{}}> {/* space-y-3 */}
                        {data.projects.slice(0, 3).map((project, index) => (
                            <div key={project.id} style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem', // p-3 bg-gray-50 rounded-md
                                marginTop: index > 0 ? '0.75rem' : '0' // for space-y-3
                            }}>
                                <span style={{ fontWeight: '500', color: '#374151' }}>{project.name}</span> {/* font-medium text-gray-700 */}
                                <span style={{
                                    padding: '0.25rem 0.5rem', fontSize: '0.75rem', fontWeight: '600', // px-2 py-1 text-xs font-semibold
                                    borderRadius: '9999px', // rounded-full
                                    backgroundColor: project.status === 'Completed' ? '#dcfce7' : '#dbeafe', // bg-green-100 : bg-blue-100
                                    color: project.status === 'Completed' ? '#166534' : '#1e40af' // text-green-800 : text-blue-800
                                }}>
                                    {project.status}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <div style={{
                    backgroundColor: '#fff', padding: '1.5rem', // bg-white p-6
                    borderRadius: '0.5rem', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // rounded-lg shadow-sm
                    border: '1px solid #e5e7eb' // border border-gray-200
                }}>
                    <h3 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1rem', color: '#1f2937' }}>Recent Blog Posts</h3> {/* text-lg font-semibold mb-4 text-gray-800 */}
                    <div style={{}}> {/* space-y-3 */}
                        {data.blogs.slice(0, 3).map((blog, index) => (
                            <div key={blog.id} style={{
                                display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                                padding: '0.75rem', backgroundColor: '#f9fafb', borderRadius: '0.375rem', // p-3 bg-gray-50 rounded-md
                                marginTop: index > 0 ? '0.75rem' : '0' // for space-y-3
                            }}>
                                <span style={{ fontWeight: '500', color: '#374151' }}>{blog.title}</span> {/* font-medium text-gray-700 */}
                                <span style={{
                                    padding: '0.25rem 0.5rem', fontSize: '0.75rem', fontWeight: '600', // px-2 py-1 text-xs font-semibold
                                    borderRadius: '9999px', // rounded-full
                                    backgroundColor: blog.published ? '#dcfce7' : '#f3f4f6', // bg-green-100 : bg-gray-100
                                    color: blog.published ? '#166534' : '#1f2937' // text-green-800 : text-gray-800
                                }}>
                                    {blog.published ? 'Published' : 'Draft'}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
