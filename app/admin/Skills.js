import React, { useState, useEffect } from 'react';
import { Modal, ConfirmDialog } from './ModalConfirmDialog';
import { Plus, Edit, Trash2, Eye, Save, X, Menu, BarChart3, FolderOpen, Brain, Briefcase, MessageSquare, PenTool, CheckCircle, XCircle } from 'lucide-react';


// Skills Component
export const Skills = ({ data, setData }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingSkill, setEditingSkill] = useState(null);
  const [confirmDelete, setConfirmDelete] = useState(null);
  const [formData, setFormData] = useState({
    name: '',
    level: '',
    category: ''
  });

  const handleAdd = () => {
    setFormData({ name: '', level: '', category: '' });
    setEditingSkill(null);
    setIsModalOpen(true);
  };

  const handleEdit = (skill) => {
    setFormData(skill);
    setEditingSkill(skill);
    setIsModalOpen(true);
  };

  const handleSave = () => {
    if (editingSkill) {
      setData(prev => ({
        ...prev,
        skills: prev.skills.map(s => s.id === editingSkill.id ? { ...formData, id: editingSkill.id } : s)
      }));
    } else {
      setData(prev => ({
        ...prev,
        skills: [...prev.skills, { ...formData, id: Date.now() }]
      }));
    }
    setIsModalOpen(false);
  };

  const handleDelete = (id) => {
    setData(prev => ({
      ...prev,
      skills: prev.skills.filter(s => s.id !== id)
    }));
    setConfirmDelete(null);
  };

  return (
    <div style={{}}> {/* space-y-6 */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}> {/* flex justify-between items-center */}
        <h2 style={{ fontSize: '1.5rem', fontWeight: '700', color: '#1f2937' }}>Skills</h2> {/* text-2xl font-bold text-gray-800 */}
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
          Add Skill
        </button>
      </div>

      <div style={{
        backgroundColor: '#fff',// bg-white rounded-lg
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
                <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Level</th>
                <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Category</th>
                <th style={{ padding: '0.75rem 1.5rem', textAlign: 'left', fontSize: '0.75rem', fontWeight: '500', color: '#6b7280', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Actions</th>
              </tr>
            </thead>
            <tbody style={{ backgroundColor: '#fff' }}> {/* bg-white divide-y divide-gray-200 */}
              {data.skills.map((skill, index) => (
                <tr key={skill.id} style={{ borderTop: index > 0 ? '1px solid #e5e7eb' : 'none' }}
                    onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f9fafb'} // hover:bg-gray-50
                    onMouseLeave={(e) => e.currentTarget.style.backgroundColor = '#fff'}
                >
                  <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap', fontWeight: '500', color: '#111827' }}>{skill.name}</td> {/* px-6 py-4 whitespace-nowrap font-medium text-gray-900 */}
                  <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap' }}> {/* px-6 py-4 whitespace-nowrap */}
                    <span style={{
                      padding: '0.25rem 0.5rem', fontSize: '0.75rem', fontWeight: '600', // px-2 py-1 text-xs font-semibold
                      borderRadius: '9999px', // rounded-full
                      backgroundColor: skill.level === 'Expert' ? '#dcfce7' :
                                       skill.level === 'Advanced' ? '#dbeafe' :
                                       skill.level === 'Intermediate' ? '#fef9c3' :
                                       '#f3f4f6', // bg-green-100 : bg-blue-100 : bg-yellow-100 : bg-gray-100
                      color: skill.level === 'Expert' ? '#166534' :
                             skill.level === 'Advanced' ? '#1e40af' :
                             skill.level === 'Intermediate' ? '#92400e' :
                             '#1f2937' // text-green-800 : text-blue-800 : text-yellow-800 : text-gray-800
                    }}>
                      {skill.level}
                    </span>
                  </td>
                  <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap', color: '#6b7280' }}>{skill.category}</td> {/* px-6 py-4 whitespace-nowrap text-gray-500 */}
                  <td style={{ padding: '1rem 1.5rem', whiteSpace: 'nowrap', fontSize: '0.875rem', fontWeight: '500' }}> {/* px-6 py-4 whitespace-nowrap text-sm font-medium */}
                    <div style={{ display: 'flex', gap: '0.5rem' }}> {/* flex gap-2 */}
                      <button
                        onClick={() => handleEdit(skill)}
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
                        onClick={() => setConfirmDelete(skill)}
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
        title={editingSkill ? 'Edit Skill' : 'Add Skill'}
      >
        <div style={{}}> {/* space-y-4 */}
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="skillName" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Skill Name</label>
            <input
              id="skillName"
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db',
                borderRadius: '0.5rem', outline: 'none', transition: 'box-shadow 200ms, border-color 200ms'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none'; }}
              placeholder="Enter skill name"
            />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="skillLevel" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Level</label>
            <select
              id="skillLevel"
              value={formData.level}
              onChange={(e) => setFormData({ ...formData, level: e.target.value })}
              style={{
                width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db',
                borderRadius: '0.5rem', outline: 'none', transition: 'box-shadow 200ms, border-color 200ms'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <option value="">Select level</option>
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label htmlFor="skillCategory" style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#374151', marginBottom: '0.5rem' }}>Category</label>
            <select
              id="skillCategory"
              value={formData.category}
              onChange={(e) => setFormData({ ...formData, category: e.target.value })}
              style={{
                width: '100%', padding: '0.5rem 0.75rem', border: '1px solid #d1d5db',
                borderRadius: '0.5rem', outline: 'none', transition: 'box-shadow 200ms, border-color 200ms'
              }}
              onFocus={(e) => { e.currentTarget.style.borderColor = '#3b82f6'; e.currentTarget.style.boxShadow = '0 0 0 2px rgba(59, 130, 246, 0.5)'; }}
              onBlur={(e) => { e.currentTarget.style.borderColor = '#d1d5db'; e.currentTarget.style.boxShadow = 'none'; }}
            >
              <option value="">Select category</option>
              <option value="Frontend">Frontend</option>
              <option value="Backend">Backend</option>
              <option value="Database">Database</option>
              <option value="DevOps">DevOps</option>
              <option value="Mobile">Mobile</option>
              <option value="Tools">Tools</option>
              <option value="Other">Other</option>
            </select>
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
        title="Delete Skill"
        message={`Are you sure you want to delete "${confirmDelete?.name}"? This action cannot be undone.`}
      />
    </div>
  );
};