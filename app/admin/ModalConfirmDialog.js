import React from 'react';
import { Plus, Edit, Trash2, Eye, Save, X, Menu, BarChart3, FolderOpen, Brain, Briefcase, MessageSquare, PenTool, CheckCircle, XCircle } from 'lucide-react';

export const Modal = ({ isOpen, onClose, title, children, size = 'md' }) => {
    if (!isOpen) return null;

    const sizeStyles = {
        sm: { maxWidth: '28rem' }, // max-w-md
        md: { maxWidth: '32rem' }, // max-w-lg
        lg: { maxWidth: '42rem' }, // max-w-2xl
        xl: { maxWidth: '56rem' }  // max-w-4xl
    };

    return (
        <div style={{
            position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)', // bg-black bg-opacity-50
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            zIndex: 50, padding: '1rem', // z-50 p-4
            fontFamily: 'Inter, sans-serif' // font-inter
        }}>
            <div style={{
                backgroundColor: '#fff', borderRadius: '0.5rem', // bg-white rounded-lg
                boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)', // shadow-xl
                width: '100%', ...sizeStyles[size],
                maxHeight: '90vh', overflowY: 'auto'
            }}>
                <div style={{
                    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                    padding: '1.5rem', borderBottom: '1px solid #e5e7eb' // p-6 border-b border-gray-200
                }}>
                    <h2 style={{ fontSize: '1.25rem', fontWeight: '700', color: '#1f2937' }}>{title}</h2> {/* text-xl font-bold text-gray-800 */}
                    <button
                        onClick={onClose}
                        style={{
                            color: '#6b7280', // text-gray-500
                            transition: 'color 200ms, background-color 200ms', // transition-colors
                            padding: '0.25rem', borderRadius: '9999px', // p-1 rounded-full
                            backgroundColor: 'transparent', border: 'none', cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#374151'; e.currentTarget.style.backgroundColor = '#f3f4f6'; }} // hover:text-gray-700 hover:bg-gray-100
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#6b7280'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                    >
                        <X size={24} />
                    </button>
                </div>
                <div style={{ padding: '1.5rem' }}> {/* p-6 */}
                    {children}
                </div>
            </div>
        </div>
    );
};

// Confirm Dialog Component
export const ConfirmDialog = ({ isOpen, onClose, onConfirm, title, message }) => {
    return (
        <Modal isOpen={isOpen} onClose={onClose} title={title} size="sm">
            <div style={{ textAlign: 'center' }}> {/* text-center */}
                <p style={{ color: '#4b5563', marginBottom: '1.5rem' }}>{message}</p> {/* text-gray-600 mb-6 */}
                <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}> {/* flex justify-center gap-4 */}
                    <button
                        onClick={onClose}
                        style={{
                            padding: '0.5rem 1rem', // px-4 py-2
                            color: '#4b5563', border: '1px solid #d1d5db', // text-gray-600 border border-gray-300
                            borderRadius: '0.5rem', // rounded-lg
                            transition: 'background-color 200ms', // transition-colors
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
                            backgroundColor: 'transparent', cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} // hover:bg-gray-50
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        Cancel
                    </button>
                    <button
                        onClick={onConfirm}
                        style={{
                            padding: '0.5rem 1rem', // px-4 py-2
                            backgroundColor: '#dc2626', color: '#fff', // bg-red-600 text-white
                            borderRadius: '0.5rem', // rounded-lg
                            transition: 'background-color 200ms', // transition-colors
                            boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
                            border: 'none', cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#b91c1c'} // hover:bg-red-700
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#dc2626'}
                    >
                        Delete
                    </button>
                </div>
            </div>
        </Modal>
    );
};