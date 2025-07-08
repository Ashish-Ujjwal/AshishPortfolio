import React, { useState, useEffect } from 'react';
import { Modal, ConfirmDialog } from './ModalConfirmDialog';
import { Plus, Edit, Trash2, Eye, Save, X, Menu, BarChart3, FolderOpen, Brain, Briefcase, MessageSquare, PenTool, CheckCircle, XCircle } from 'lucide-react';


// Projects Component
export const Projects = ({ data, setData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProject, setEditingProject] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    status: '',
    description: '',
    liveLink: '',
    githubLink: ''
  });

  const handleAdd = () => {
    setFormData({ name: '', status: '', description: '', liveLink: '', githubLink: '' });
    setEditingProject(null);
    setIsModalOpen(true);
  };

  const handleEdit = (project) => {
    setFormData(project);
    setEditingProject(project);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingProject) {
      setData(prev => ({
        ...prev,
        projects: prev.projects.map(p => p.id === editingProject.id ? { ...formData, id: editingProject.id } : p)
      }));
    } else {
      setData(prev => ({
        ...prev,
        projects: [...prev.projects, { ...formData, id: Date.now() }]
      }));
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setData(prev => ({
      ...prev,
      projects: prev.projects.filter(p => p.id !== id)
    }));
    setConfirmDelete(null);
  };

  return (
    <div style={{}}> {/* space-y-6 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}> {/* flex justify-between items-center */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937' }}>Projects</h2> {/* text-2xl font-bold text-gray-800 */}
        <button
          onClick={handleAdd}
          style={{
            backgroundColor: '#2563eb', color: '#fff', // bg-blue-600 text-white
            padding: '0.5rem 1rem', borderRadius: '0.5rem', // px-4 py-2 rounded-lg
            transition: 'background-color 200ms', // hover:bg-blue-700 transition-colors
            display: 'flex', alignItems: 'center', gap: '0.5rem', // flex items-center gap-2
            boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
            border: 'none', cursor: 'pointer'
          }}
          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
        >
          <Plus size={20} />
          Add Project
        </button>
      </div>

      <div style={{
        backgroundColor: '#fff', borderRadius: '0.5rem', // bg-white rounded-lg
        boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)', // shadow-sm
        border: '1px solid #e5e7eb', // border border-gray-200
        maxHeight: '450px', // Fixed height for scrolling
        overflowY: 'auto' // Enable vertical scrolling
      }}>
        <div style={{ overflowX: 'auto' }}> {/* overflow-x-auto */}
          <table style={{ width: '100%', borderCollapse: 'collapse' }}> {/* min-w-full divide-y divide-gray-200 */}
            <thead style={{ backgroundColor: '#f9fafb' }}> {/* bg-gray-50 */}
              <tr>
                <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Name</th>
                <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Status</th>
                <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Description</th>
                <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#fff' }}> {/* bg-white divide-y divide-gray-200 */}
              {data.projects.map((project, index) => (
                <tr key={project.id} style={{ borderTop: index > 0 ? '1px solid #e5e7eb' : 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} // hover:bg-gray-50
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                >
                  <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap', fontWeight: '500', color: '#111827' }}>{project.name}</td> {/* px-6 py-4 whitespace-nowrap font-medium text-gray-900 */}
                  <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}> {/* px-6 py-4 whitespace-nowrap */}
                    <span style={{
                      padding: '0.25rem 0.5rem', fontSize: '0.75rem', fontWeight: '600', // px-2 py-1 text-xs font-semibold
                      borderRadius: '9999px', // rounded-full
                      backgroundColor: project.status === 'Completed' ? '#dcfce7' : '#dbeafe', // bg-green-100 : bg-blue-100
                      color: project.status === 'Completed' ? '#166534' : '#1e40af' // text-green-800 : text-blue-800
                    }}>
                      {project.status}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', color: '#6b7280', maxWidth: '12rem', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{project.description}</td> {/* px-6 py-4 text-gray-500 max-w-xs truncate */}
                  <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap', fontSize: '0.875rem', fontWeight: '500' }}> {/* px-6 py-4 whitespace-nowrap text-sm font-medium */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}> {/* flex gap-2 */}
                      <button
                        onClick={() => handleEdit(project)}
                        style={{
                          color: '#2563eb', // text-blue-600
                          padding: '0.25rem', borderRadius: '0.375rem', // p-1 rounded-md
                          transition: 'color 200ms, background-color 200ms', // hover:text-blue-900 hover:bg-blue-50 transition-colors
                          backgroundColor: 'transparent', border: 'none', cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#1e3a8a'; e.currentTarget.style.backgroundColor = '#eff6ff'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#2563eb'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                        title="Edit"
                      >
                        <Edit size={16} />
                      </button>
                      <button
                        onClick={() => setConfirmDelete(project)}
                        style={{
                          color: '#dc2626', // text-red-600
                          padding: '0.25rem', borderRadius: '0.375rem', // p-1 rounded-md
                          transition: 'color 200ms, background-color 200ms', // hover:text-red-900 hover:bg-red-50 transition-colors
                          backgroundColor: 'transparent', border: 'none', cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => { e.currentTarget.style.color = '#7f1d1d'; e.currentTarget.style.backgroundColor = '#fef2f2'; }}
                        onMouseLeave={(e) => { e.currentTarget.style.color = '#dc2626'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                        title="Delete"
                      >
                        <Trash2 size={16} />
                      </button>
                      {project.liveLink && (
                        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" 
                           style={{
                             color: '#22c55e', // text-green-600
                             padding: '0.25rem', borderRadius: '0.375rem', // p-1 rounded-md
                             transition: 'color 200ms, background-color 200ms', // hover:text-green-900 hover:bg-green-50 transition-colors
                             backgroundColor: 'transparent'
                           }}
                           onMouseEnter={(e) => { e.currentTarget.style.color = '#166534'; e.currentTarget.style.backgroundColor = '#f0fdf4'; }}
                           onMouseLeave={(e) => { e.currentTarget.style.color = '#22c55e'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                           title="View Live">
                          <Eye size={16} />
                        </a>
                      )}
                      {project.githubLink && (
                        <a href={project.githubLink} target="_blank" rel="noopener noreferrer" 
                           style={{
                             color: '#4b5563', // text-gray-600
                             padding: '0.25rem', borderRadius: '0.375rem', // p-1 rounded-md
                             transition: 'color 200ms, background-color 200ms', // hover:text-gray-900 hover:bg-gray-50 transition-colors
                             backgroundColor: 'transparent'
                           }}
                           onMouseEnter={(e) => { e.currentTarget.style.color = '#111827'; e.currentTarget.style.backgroundColor = '#f9fafb'; }}
                           onMouseLeave={(e) => { e.currentTarget.style.color = '#4b5563'; e.currentTarget.style.backgroundColor = 'transparent'; }}
                           title="View GitHub">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-github"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.2c2.8-.7 5.5-1.7 5.5-5.5.0-1.2-.4-2.2-1.2-3.0.1-.2.5-1.4.1-3.1 0 0-1.0-.3-3.0 1.2a10.0 10.0 0 0 0-5 0c-2.0-1.5-3.0-1.2-3.0-1.2-.4 1.7.0 2.9.1 3.1-.8.8-1.2 1.8-1.2 3.0.0 3.8 2.7 4.8 5.5 5.5-.1.8-.2 1.5-.2 2.3v4"/><path d="M9 18c-3.1 0-4.5-1.0-5-3"/><path d="M15 18c3.1 0 4.5-1.0 5-3"/></svg>
                        </a>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <Modal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={editingProject ? 'Edit Project' : 'Add Project'}
      >
        <div style={{}}> {/* space-y-4 */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="projectName" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Project Name</label>
            <input
              id="projectName"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db',
                borderRadius: '0.5rem', outline: 'none', transition: 'box-shadow 200ms, border-color 200ms'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none'; }}
              placeholder="Enter project name"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="projectStatus" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Status</label>
            <select
              id="projectStatus"
              value={formData.status}
              onChange={(e) => setFormData({ ...formData, status: e.target.value })}
              style={{
                width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db',
                borderRadius: '0.5rem', outline: 'none', transition: 'box-shadow 200ms, border-color 200ms'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <option value="">Select status</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
              <option value="On Hold">On Hold</option>
              <option value="Planned">Planned</option>
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="projectDescription" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Description</label>
            <textarea
              id="projectDescription"
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              style={{
                width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db',
                borderRadius: '0.5rem', outline: 'none', transition: 'box-shadow 200ms, border-color 200ms',
                resize: 'vertical'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none'; }}
              rows="3"
              placeholder="Enter project description"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="liveLink" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Live Link</label>
            <input
              id="liveLink"
              type="url"
              value={formData.liveLink}
              onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
              style={{
                width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db',
                borderRadius: '0.5rem', outline: 'none', transition: 'box-shadow 200ms, border-color 200ms'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none'; }}
              placeholder="https://example.com"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="githubLink" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>GitHub Link</label>
            <input
              id="githubLink"
              type="url"
              value={formData.githubLink}
              onChange={(e) => setFormData({ ...formData, githubLink: e.target.value })}
              style={{
                width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db',
                borderRadius: '0.5rem', outline: 'none', transition: 'box-shadow 200ms, border-color 200ms'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none'; }}
              placeholder="https://github.com/username/repo"
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '1rem', paddingTop: '1rem' }}> {/* flex justify-end gap-4 pt-4 */}
            <button
              onClick={() => setIsModalOpen(false)}
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
              onClick={handleSave}
              style={{
                padding: '0.5rem 1rem', // px-4 py-2
                backgroundColor: '#2563eb', color: '#fff', // bg-blue-600 text-white
                borderRadius: '0.5rem', // rounded-lg
                transition: 'background-color 200ms', // transition-colors
                display: 'flex', alignItems: 'center', gap: '0.5rem', // flex items-center gap-2
                boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)', // shadow-md
                border: 'none', cursor: 'pointer'
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#1d4ed8'}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#2563eb'}
            >
              <Save size={16} />
              Save
            </button>
          </div>
        </div>
      </Modal>

      <ConfirmDialog
        isOpen={!!confirmDelete}
        onClose={() => setConfirmDelete(null)}
        onConfirm={() => handleDelete(confirmDelete.id)}
        title="Delete Project"
        message={`Are you sure you want to delete "${confirmDelete?.name}"? This action cannot be undone.`}
      />
    </div>
  );
};
