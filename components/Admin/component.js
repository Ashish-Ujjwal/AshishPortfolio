import { useEffect, useState } from "react";
import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";


// Shared styles object
const styles = {
  // Overall container for the entire admin panel
  container: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    fontFamily: 'Inter, sans-serif', // Using Inter as per guidelines
    backgroundColor: '#f8f9fa', // Light background for the overall page
    borderRadius: '0.5rem',
  },
  // Top navigation bar styling
  topbar: {
    backgroundColor: '#2c3e50', // Dark blue-gray
    color: 'white',
    padding: '1rem 2rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
    height: '60px', // Fixed height for a consistent top bar
    borderBottom: '1px solid #1a252f',
    borderRadius: '0.5rem 0.5rem 0 0', // Rounded top corners
  },
  topbarTitle: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  topbarUser: {
    fontSize: '0.9rem', // Smaller font for userId
    opacity: '0.9',
    display: 'flex',
    alignItems: 'center',
    gap: '0.5rem',
    wordBreak: 'break-all', // Ensure long IDs wrap
  },
  // Area containing the sidebar and the main content
  mainContentArea: {
    display: 'flex',
    flexGrow: 1, // Allows it to expand and fill available vertical space
    height: 'calc(100vh - 60px)', // Explicitly set height based on viewport minus topbar
  },
  // Main content area styling
  content: {
    flexGrow: 1, // Allows content to take up remaining horizontal space
    padding: '2rem',
    backgroundColor: '#ecf0f1', // Light gray background for content
    overflowY: 'auto', // Enable vertical scrolling if content overflows
    borderLeft: '1px solid #dcdcdc',
    borderRadius: '0 0 0.5rem 0', // Rounded bottom-right corner
    zIndex: 1, // Added z-index for the content area
    // Removed minHeight: 0, as flex: 1 often handles this implicitly and the parent has a fixed height
    flex: 1, // Use flex shorthand to ensure it correctly fills available space and allows overflow
  },
  contentHeader: {
    fontSize: '2.2rem',
    marginBottom: '1.8rem',
    color: '#333',
    borderBottom: '2px solid #ddd',
    paddingBottom: '0.8rem',
  },
  contentSection: {
    backgroundColor: 'white',
    padding: '2rem',
    borderRadius: '8px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
    marginBottom: '1.5rem',
    border: '1px solid #e0e0e0',
  },
  contentSectionTitle: {
    fontSize: '1.6rem',
    marginBottom: '1.2rem',
    color: '#555',
    fontWeight: '600',
  },
  contentList: {
    listStyleType: 'disc',
    marginLeft: '1.5rem',
    color: '#666',
    lineHeight: '1.8',
  },
  formGroup: {
    marginBottom: '1rem',
  },
  label: {
    display: 'block',
    marginBottom: '0.5rem',
    fontWeight: 'bold',
    color: '#555',
  },
  input: {
    width: '100%',
    padding: '0.8rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box', // Include padding in width calculation
  },
  textarea: {
    width: '100%',
    padding: '0.8rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
    minHeight: '80px',
    boxSizing: 'border-box',
  },
  checkboxContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  checkbox: {
    marginRight: '0.5rem',
    width: '18px',
    height: '18px',
  },
  button: {
    padding: '0.75rem 1.5rem',
    borderRadius: '5px',
    border: 'none',
    cursor: 'pointer',
    fontSize: '1rem',
    fontWeight: '600',
    transition: 'background-color 0.2s ease-in-out',
    // marginRight: '0.5rem',
  },
  primaryButton: {
    backgroundColor: '#3498db',
    color: 'white',
  },
  editButton: {
    backgroundColor: '#f39c12',
    color: 'white',
  },
  deleteButton: {
    backgroundColor: '#e74c3c',
    color: 'white',
  },
  cancelButton: {
    backgroundColor: '#95a5a6',
    color: 'white',
  },
  listTable: {
    width: '100%',
    borderCollapse: 'collapse',
    marginTop: '1.5rem',
    borderRadius: '8px',
    overflow: 'hidden', // Ensures rounded corners apply to table
    boxShadow: '0 2px 8px rgba(0,0,0,0.05)',
  },
  tableHeader: {
    backgroundColor: '#e0e0e0',
    borderBottom: '1px solid #ddd',
    padding: '0.8rem',
    textAlign: 'left',
    color: '#444',
  },
  tableRow: {
    borderBottom: '1px solid #eee',
    transition: 'background-color 0.1s ease-in-out',
  },
  tableRowHover: {
    backgroundColor: '#f5f5f5', // Hover effect for table rows
  },
  tableCell: {
    padding: '0.8rem',
    color: '#666',
  },
  noDataMessage: {
    textAlign: 'center',
    padding: '2rem',
    color: '#888',
    fontSize: '1.1rem',
  },
};

// --- Section Components (Moved from renderContent switch cases) ---

const DashboardContent = ({ projects, skills, employmentHistory, testimonials, blogs }) => (
  <>
    <p style={{ textAlign: "justify" }}>Welcome to your admin dashboard. Below is a detailed summary of your site's key activities and entries.</p>

    {/* Projects */}
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem 1rem', margin: '15px' }}>
      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>📁 Projects ({projects.length})</h4>
      <ul style={{ marginLeft: '1rem', fontSize: '0.95rem', listStyle: 'disc' }}>
        {projects.map((p, i) => (
          <li key={i}><strong>{p.title}</strong> — {p.status?.slice(0, 60) || 'No description provided'}</li>
        ))}
      </ul>
    </div>

    {/* Skills */}
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem 1.25rem', margin: '15px' }}>
      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>🛠️ Skills ({skills.length})</h4>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', fontSize: '0.95rem', justifyContent: 'center' }}>
        {skills.map((s, i) => (
          <span key={i} style={{ padding: '0.25rem 0.75rem', borderRadius: '9999px' }}>{s.name}</span>
        ))}
      </div>
    </div>

    {/* Employment History */}
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem 1.25rem', margin: '15px' }}>
      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>🏢 Employment History ({employmentHistory.length})</h4>
      <ul style={{ marginLeft: '1rem', fontSize: '0.95rem', listStyle: 'disc' }}>
        {employmentHistory.map((job, i) => (
          <li key={i}>
            <strong>{job.title}</strong> at <em>{job.company}</em> ({job.duration})
          </li>
        ))}
      </ul>
    </div>

    {/* Testimonials */}
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem 1.25rem', margin: '15px' }}>
      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>💬 Testimonials ({testimonials.length})</h4>
      <ul style={{ marginLeft: '1rem', fontSize: '0.95rem', listStyle: 'disc' }}>
        {testimonials.map((t, i) => (
          <li key={i}><strong>{t.author}</strong>: {t.text?.slice(0, 60) || 'No message'}... {t.approved ? '✅ Approved' : '⏳ Pending'}</li>
        ))}
      </ul>
    </div>

    {/* Blogs */}
    <div style={{ border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem 1.25rem', margin: '15px' }}>
      <h4 style={{ fontSize: '1.25rem', marginBottom: '0.5rem', fontWeight: 600 }}>📝 Blog Posts ({blogs.length})</h4>
      <ul style={{ marginLeft: '1rem', fontSize: '0.95rem', listStyle: 'disc' }}>
        {blogs.map((b, i) => (
          <li key={i}>
            <strong>{b.title}</strong> — {b.published ? '📢 Published' : '📝 Draft'} | {b.createdAt || 'No date'}
          </li>
        ))}
      </ul>
    </div>
  </>
);




const ProjectsContent = ({
  projects, setProjects,
  newProjectName, setNewProjectName,
  newProjectStatus, setNewProjectStatus,
  editingProject, setEditingProject,
  addProject, updateProject, deleteProject
}) => (
  <>
    <p style={{ textAlign: "justify" }}>Welcome to your admin dashboard. Below is a detailed summary of your site's key activities and entries.</p>

      {/* Add Project Form */}
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
        <div>
          <label htmlFor="newProjectName" style={{ fontWeight: 500, display: 'block', marginBottom: '0.25rem' }}>Project Name</label>
          <input
            id="newProjectName"
            type="text"
            placeholder="Enter project name"
            value={newProjectName}
            onChange={(e) => setNewProjectName(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #cbd5e0', borderRadius: '0.375rem', outline: 'none' }}
          />
        </div>

        <div>
          <label htmlFor="newProjectStatus" style={{ fontWeight: 500, display: 'block', marginBottom: '0.25rem' }}>Status</label>
          <input
            id="newProjectStatus"
            type="text"
            placeholder="e.g., Active, Completed, In Progress"
            value={newProjectStatus}
            onChange={(e) => setNewProjectStatus(e.target.value)}
            style={{ width: '100%', padding: '0.5rem', border: '1px solid #cbd5e0', borderRadius: '0.375rem', outline: 'none' }}
          />
        </div>

        <button
          onClick={addProject}
          style={{ padding: '0.6rem 1rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer', fontWeight: 600 }}
        >
          ➕ Add Project
        </button>
      </div>

      {/* Projects Table */}
      <h4 style={{ fontSize: '1.25rem', fontWeight: 600, marginBottom: '0.75rem' }}>📦 Existing Projects</h4>

      {projects.length === 0 ? (
        <p style={{ color: '#718096' }}>No projects added yet.</p>
      ) : (
        <div style={{ overflowX: 'auto' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ textAlign: 'left' }}>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>Name</th>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>Status</th>
                <th style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {projects.map((project) => (
                <tr
                  key={project.id}
                  style={{ transition: 'background-color 0.2s ease-in-out' }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                >
                  {editingProject && editingProject.id === project.id ? (
                    <>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                        <input
                          type="text"
                          value={editingProject.title}
                          onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
                          style={{ width: '100%', padding: '0.4rem', borderRadius: '0.375rem', border: '1px solid #cbd5e0' }}
                        />
                      </td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                        <input
                          type="text"
                          value={editingProject.status}
                          onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value })}
                          style={{ width: '100%', padding: '0.4rem', borderRadius: '0.375rem', border: '1px solid #cbd5e0' }}
                        />
                      </td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                        <button
                          onClick={() => updateProject(project.id)}
                          style={{ marginRight: '0.5rem', backgroundColor: '#3b82f6', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
                        >
                          Save
                        </button>
                        <button
                          onClick={() => setEditingProject(null)}
                          style={{ backgroundColor: '#e53e3e', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
                        >
                          Cancel
                        </button>
                      </td>
                    </>
                  ) : (
                    <>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>{project.name}</td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>{project.status}</td>
                      <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                        <button
                          onClick={() => setEditingProject(project)}
                          style={{ marginRight: '0.5rem', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
                        >
                          Edit
                        </button>
                        <button
                          onClick={() => deleteProject(project.id)}
                          style={{ backgroundColor: '#e53e3e', color: 'white', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
                        >
                          Delete
                        </button>
                      </td>
                    </>
                  )}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
  </>
);


const SkillsContent = ({
  skills, setSkills,
  newSkillName, setNewSkillName,
  newSkillLevel, setNewSkillLevel,
  editingSkill, setEditingSkill,
  addSkill, updateSkill, deleteSkill
}) => (
  <>
    <p style={{ textAlign: "justify" }}>Welcome to your admin dashboard. Below is a detailed summary of your site's key activities and entries.</p>

    {/* Add Skill Form */}
    <div style={{ marginTop: '15px', display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '1.5rem' }}>
      <div>
        <label htmlFor="newSkillName" style={{ fontWeight: 500, color: '#4a5568', display: 'block', marginBottom: '0.25rem' }}>Skill Name</label>
        <input
          id="newSkillName"
          type="text"
          placeholder="e.g., React.js"
          value={newSkillName}
          onChange={(e) => setNewSkillName(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #cbd5e0', borderRadius: '0.375rem', outline: 'none' }}
        />
      </div>

      <div>
        <label htmlFor="newSkillLevel" style={{ fontWeight: 500, color: '#4a5568', display: 'block', marginBottom: '0.25rem' }}>Level</label>
        <input
          id="newSkillLevel"
          type="text"
          placeholder="e.g., Advanced, Intermediate"
          value={newSkillLevel}
          onChange={(e) => setNewSkillLevel(e.target.value)}
          style={{ width: '100%', padding: '0.5rem', border: '1px solid #cbd5e0', borderRadius: '0.375rem', outline: 'none' }}
        />
      </div>

      <button
        onClick={addSkill}
        style={{ backgroundColor: '#4caf50', color: 'white', padding: '0.6rem 1rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer', fontWeight: 600 }}
      >
        ➕ Add Skill
      </button>
    </div>

    {/* Skills Table */}
    <h4 style={{ fontSize: '1.25rem', fontWeight: 600, color: '#2d3748', marginBottom: '0.75rem' }}>💼 Existing Skills</h4>

    {skills.length === 0 ? (
      <p style={{ color: '#718096' }}>No skills added yet.</p>
    ) : (
      <div style={{ overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ backgroundColor: '#edf2f7', textAlign: 'left' }}>
              <th style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>Name</th>
              <th style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>Level</th>
              <th style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {skills.map((skill) => (
              <tr
                key={skill.id}
                style={{ transition: 'background-color 0.2s ease-in-out' }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f1f5f9'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
              >
                {editingSkill && editingSkill.id === skill.id ? (
                  <>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                      <input
                        type="text"
                        value={editingSkill.name}
                        onChange={(e) => setEditingSkill({ ...editingSkill, name: e.target.value })}
                        style={{ width: '100%', padding: '0.4rem', borderRadius: '0.375rem', border: '1px solid #cbd5e0' }}
                      />
                    </td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                      <input
                        type="text"
                        value={editingSkill.level}
                        onChange={(e) => setEditingSkill({ ...editingSkill, level: e.target.value })}
                        style={{ width: '100%', padding: '0.4rem', borderRadius: '0.375rem', border: '1px solid #cbd5e0' }}
                      />
                    </td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                      <button
                        onClick={() => updateSkill(skill.id)}
                        style={{ marginRight: '0.5rem', backgroundColor: '#3b82f6', color: 'white', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingSkill(null)}
                        style={{ backgroundColor: '#e53e3e', color: 'white', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
                      >
                        Cancel
                      </button>
                    </td>
                  </>
                ) : (
                  <>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>{skill.name}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>{skill.level}</td>
                    <td style={{ padding: '0.75rem', borderBottom: '1px solid #e2e8f0' }}>
                      <button
                        onClick={() => setEditingSkill(skill)}
                        style={{ marginRight: '0.5rem', backgroundColor: '#3182ce', color: 'white', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteSkill(skill.id)}
                        style={{ backgroundColor: '#e53e3e', color: 'white', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', cursor: 'pointer' }}
                      >
                        Delete
                      </button>
                    </td>
                  </>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    )}
  </>
);




const EmploymentHistoryContent = ({
  employmentHistory = [],
  newEmploymentTitle,
  setNewEmploymentTitle,
  newEmploymentCompany,
  setNewEmploymentCompany,
  newEmploymentDuration,
  setNewEmploymentDuration,
  editingEmployment,
  setEditingEmployment,
  addEmployment,
  updateEmployment,
  deleteEmployment,
}) => (
  <>
    <p style={{ textAlign: "justify" }}>Welcome to your admin dashboard. Below is a detailed summary of your site's key activities and entries.</p>

    {/* Add Form */}
    <div style={{ background: "#fff", border: "1px solid #e2e8f0", padding: "1rem", margin: '15px 0', borderRadius: "0.5rem", display: "flex", flexDirection: "column", gap: "1rem" }}>
      <input
        type="text"
        placeholder="Job Title"
        value={newEmploymentTitle}
        onChange={(e) => setNewEmploymentTitle(e.target.value)}
        style={{ padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem" }}
      />
      <input
        type="text"
        placeholder="Company"
        value={newEmploymentCompany}
        onChange={(e) => setNewEmploymentCompany(e.target.value)}
        style={{ padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem" }}
      />
      <input
        type="text"
        placeholder="Duration (e.g., Jan 2022 – Present)"
        value={newEmploymentDuration}
        onChange={(e) => setNewEmploymentDuration(e.target.value)}
        style={{ padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem" }}
      />

      <button
        onClick={addEmployment}
        style={{ alignSelf: "flex-end", background: "#4caf50", color: "#fff", padding: "0.55rem 1rem", border: "none", borderRadius: "0.375rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem", fontWeight: 600 }}
      >
        <FaSave /> Add
      </button>
    </div>

    {/* List */}
    {employmentHistory.length === 0 ? (
      <p style={{ color: "#718096" }}>No employment history added yet.</p>
    ) : (
      <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
        {employmentHistory.map((entry) => (
          <div key={entry.id} style={{ background: "#fff", border: "1px solid #e2e8f0", borderRadius: "0.5rem", padding: "1rem", boxShadow: "0 1px 3px rgba(0,0,0,0.05)" }}>

            {/* EDIT MODE */}
            {editingEmployment?.id === entry.id ? (
              <>
                <input
                  type="text"
                  value={editingEmployment.title}
                  onChange={(e) => setEditingEmployment({ ...editingEmployment, title: e.target.value })}
                  style={{ width: "100%", marginBottom: "0.6rem", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem" }}
                />
                <input
                  type="text"
                  value={editingEmployment.company}
                  onChange={(e) => setEditingEmployment({ ...editingEmployment, company: e.target.value })}
                  style={{ width: "100%", marginBottom: "0.6rem", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem" }}
                />
                <input
                  type="text"
                  value={editingEmployment.duration}
                  onChange={(e) => setEditingEmployment({ ...editingEmployment, duration: e.target.value })}
                  style={{ width: "100%", marginBottom: "0.8rem", padding: "0.5rem", border: "1px solid #cbd5e0", borderRadius: "0.375rem" }}
                />

                <div style={{ display: "flex", gap: "0.5rem" }}>
                  <button
                    onClick={() => updateEmployment(entry.id)}
                    style={{ flex: 1, background: "#3b82f6", color: "#fff", padding: "0.5rem", border: "none", borderRadius: "0.375rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}
                  >
                    <FaSave /> Save
                  </button>
                  <button
                    onClick={() => setEditingEmployment(null)}
                    style={{ flex: 1, background: "#e53e3e", color: "#fff", padding: "0.5rem", border: "none", borderRadius: "0.375rem", cursor: "pointer", display: "flex", alignItems: "center", justifyContent: "center", gap: "0.4rem" }}
                  >
                    <FaTimes /> Cancel
                  </button>
                </div>
              </>
            ) : (
              /* VIEW MODE */
              <>
                <p style={{ margin: "0 0 0.25rem 0" }}><strong>Title:</strong> {entry.title}</p>
                <p style={{ margin: "0 0 0.25rem 0" }}><strong>Company:</strong> {entry.company}</p>
                <p style={{ margin: "0 0 0.5rem 0", color: "#4a5568" }}><strong>Duration:</strong> {entry.duration}</p>

                <div style={{ display: "flex", gap: "0.5rem", justifyContent: "flex-end" }}>
                  <button
                    onClick={() => setEditingEmployment(entry)}
                    style={{ background: "#3182ce", color: "#fff", padding: "0.4rem 0.75rem", border: "none", borderRadius: "0.375rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem" }}
                  >
                    <FaEdit /> Edit
                  </button>
                  <button
                    onClick={() => deleteEmployment(entry.id)}
                    style={{ background: "#e53e3e", color: "#fff", padding: "0.4rem 0.75rem", border: "none", borderRadius: "0.375rem", cursor: "pointer", display: "flex", alignItems: "center", gap: "0.4rem" }}
                  >
                    <FaTrash /> Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    )}
  </>
);


const TestimonialsContent = ({
  testimonials,
  setTestimonials,
  newTestimonialText,
  setNewTestimonialText,
  newTestimonialAuthor,
  setNewTestimonialAuthor,
  newTestimonialApproved,
  setNewTestimonialApproved,
  editingTestimonial,
  setEditingTestimonial,
  addTestimonial,
  updateTestimonial,
  deleteTestimonial,
}) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const containerStyle = {
    maxWidth: "960px",
    margin: "2rem auto",
    padding: "2rem",
    background: "#f9fafb",
    borderRadius: "0.75rem",
    boxShadow: "0 2px 10px rgba(0,0,0,0.05)",
    boxSizing: "border-box",
  };

  const inputStyle = {
    width: "100%",
    padding: "0.6rem",
    marginBottom: "1rem",
    border: "1px solid #cbd5e0",
    borderRadius: "0.375rem",
    fontSize: "1rem",
    boxSizing: "border-box",
  };

  const textareaStyle = {
    ...inputStyle,
    minHeight: "80px",
    resize: "vertical",
  };

  const checkboxStyle = {
    marginRight: "0.5rem",
    transform: "scale(1.2)",
  };

  const buttonStyle = (bgColor) => ({
    backgroundColor: bgColor,
    color: "#fff",
    padding: "0.5rem 1rem",
    border: "none",
    borderRadius: "0.375rem",
    fontWeight: 600,
    fontSize: "0.95rem",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "0.4rem",
    width: isMobile ? "100%" : "auto",
    marginTop: isMobile ? "0.4rem" : "0",
  });

  const rowBoxStyle = {
    borderBottom: "1px solid #e2e8f0",
    padding: "1rem 0",
    display: "flex",
    flexDirection: isMobile ? "column" : "row",
    justifyContent: "space-between",
    alignItems: isMobile ? "flex-start" : "center",
    gap: "1rem",
    fontSize: "0.95rem",
    color: "#4a5568",
  };

  return (
    <>
      <p style={{ textAlign: "justify" }}>Welcome to your admin dashboard. Below is a detailed summary of your site's key activities and entries.</p>
      <div style={containerStyle}>
        {/* Add Form */}
        <div>
          <textarea
            placeholder="Enter testimonial text"
            value={newTestimonialText}
            onChange={(e) => setNewTestimonialText(e.target.value)}
            style={textareaStyle}
          />
          <input
            type="text"
            placeholder="Author"
            value={newTestimonialAuthor}
            onChange={(e) => setNewTestimonialAuthor(e.target.value)}
            style={inputStyle}
          />
          <label style={{ display: "flex", alignItems: "center", marginBottom: "1rem" }}>
            <input
              type="checkbox"
              checked={newTestimonialApproved}
              onChange={(e) => setNewTestimonialApproved(e.target.checked)}
              style={checkboxStyle}
            />
            Approved
          </label>
          <button
            onClick={addTestimonial}
            style={buttonStyle("#4caf50")}
          >
            Add Testimonial
          </button>
        </div>

        <h4 style={{ marginTop: "2.5rem", fontSize: "1.25rem", fontWeight: "600" }}>
          📜 Existing Testimonials
        </h4>

        {testimonials.length === 0 ? (
          <p style={{ color: "#718096", marginTop: "1rem" }}>No testimonials added yet.</p>
        ) : (
          testimonials.map((t) => {
            const isEditing = editingTestimonial && editingTestimonial.id === t.id;
            return (
              <div key={t.id} style={rowBoxStyle}>
                {isEditing ? (
                  <div style={{ width: "100%" }}>
                    <textarea
                      value={editingTestimonial.text}
                      onChange={(e) => setEditingTestimonial({ ...editingTestimonial, text: e.target.value })}
                      style={textareaStyle}
                    />
                    <input
                      type="text"
                      value={editingTestimonial.author}
                      onChange={(e) => setEditingTestimonial({ ...editingTestimonial, author: e.target.value })}
                      style={inputStyle}
                    />
                    <label style={{ display: "flex", alignItems: "center", marginBottom: "0.75rem" }}>
                      <input
                        type="checkbox"
                        checked={editingTestimonial.approved}
                        onChange={(e) => setEditingTestimonial({ ...editingTestimonial, approved: e.target.checked })}
                        style={checkboxStyle}
                      />
                      Approved
                    </label>
                    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "0.5rem" }}>
                      <button
                        onClick={() => updateTestimonial(t.id)}
                        style={buttonStyle("#3182ce")}
                      >
                        <FaEdit /> Save
                      </button>
                      <button
                        onClick={() => setEditingTestimonial(null)}
                        style={buttonStyle("#e53e3e")}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div style={{ width: "100%" }}>
                    <div style={{ fontWeight: 600 }}>{t.text}</div>
                    <div>Author: {t.author}</div>
                    <div>Approved: {t.approved ? "Yes" : "No"}</div>
                    <div style={{ display: "flex", flexDirection: isMobile ? "column" : "row", gap: "0.5rem", marginTop: "0.5rem" }}>
                      <button
                        onClick={() => setEditingTestimonial(t)}
                        style={buttonStyle("#3182ce")}
                      >
                        <FaEdit /> Edit
                      </button>
                      <button
                        onClick={() => deleteTestimonial(t.id)}
                        style={buttonStyle("#e53e3e")}
                      >
                        <FaTrash /> Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })
        )}
      </div>
    </>
  );
};


const BlogsContent = ({
  blogs,
  setBlogs,
  newBlogTitle,
  setNewBlogTitle,
  newBlogContent,
  setNewBlogContent,
  newBlogPublished,
  setNewBlogPublished,
  editingBlog,
  setEditingBlog,
  addBlog,
  updateBlog,
  deleteBlog,
}) => {
  return (
    <>
      <p style={{ textAlign: "justify" }}>Welcome to your admin dashboard. Below is a detailed summary of your site's key activities and entries.</p>

      {/* Add Blog Form */}
      <div style={{ display: 'flex', margin: '15px 0', flexDirection: 'column', gap: '1rem' }}>
        <div>
          <label htmlFor="newBlogTitle" style={{ fontWeight: 600, color: '#4a5568' }}>Title</label>
          <input
            id="newBlogTitle"
            type="text"
            placeholder="Enter blog title"
            value={newBlogTitle}
            onChange={(e) => setNewBlogTitle(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.25rem',
              borderRadius: '0.375rem',
              border: '1px solid #cbd5e0',
              fontSize: '1rem',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div>
          <label htmlFor="newBlogContent" style={{ fontWeight: 600, color: '#4a5568' }}>Content</label>
          <textarea
            id="newBlogContent"
            placeholder="Write your blog content here..."
            value={newBlogContent}
            onChange={(e) => setNewBlogContent(e.target.value)}
            style={{
              width: '100%',
              padding: '0.5rem',
              marginTop: '0.25rem',
              borderRadius: '0.375rem',
              border: '1px solid #cbd5e0',
              fontSize: '1rem',
              resize: 'vertical',
              minHeight: '120px',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <input
            id="newBlogPublished"
            type="checkbox"
            checked={newBlogPublished}
            onChange={(e) => setNewBlogPublished(e.target.checked)}
            style={{ width: '16px', height: '16px' }}
          />
          <label htmlFor="newBlogPublished" style={{ fontWeight: 500, color: '#4a5568' }}>Mark as Published</label>
        </div>

        <button
          onClick={addBlog}
          style={{
            alignSelf: 'flex-start',
            padding: '0.6rem 1rem',
            backgroundColor: '#3182ce',
            color: 'white',
            border: 'none',
            borderRadius: '0.375rem',
            fontWeight: '600',
            cursor: 'pointer',
            fontSize: '1rem',
          }}
        >
          Add Blog
        </button>
      </div>

      {/* Blogs List */}
      <div style={{ backgroundColor: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '0.5rem', padding: '1rem 1.25rem' }}>
        <h4 style={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 600, color: '#2d3748' }}>
          📚 Blog Posts ({blogs.length})
        </h4>

        {blogs.length === 0 ? (
          <p style={{ color: '#718096', fontStyle: 'italic' }}>No blog posts added yet.</p>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            {blogs.map((b, i) => (
              <div
                key={i}
                style={{
                  backgroundColor: '#f7fafc',
                  padding: '0.75rem 1rem',
                  borderRadius: '0.5rem',
                  border: '1px solid #e2e8f0',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
              >
                {editingBlog && editingBlog.id === b.id ? (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                    <input
                      type="text"
                      value={editingBlog.title}
                      onChange={(e) => setNewBlogTitle(e.target.value)}
                      style={{
                        padding: '0.4rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #cbd5e0',
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                    />
                    <textarea
                      value={editingBlog.content}
                      onChange={(e) => setNewBlogContent(e.target.value)}
                      style={{
                        padding: '0.4rem',
                        borderRadius: '0.375rem',
                        border: '1px solid #cbd5e0',
                        resize: 'vertical',
                        width: '100%',
                        boxSizing: 'border-box',
                      }}
                    />
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      <input
                        type="checkbox"
                        checked={editingBlog.published}
                        onChange={(e) => setNewBlogPublished(e.target.checked)}
                      />
                      <label>Published</label>
                    </div>
                    <div style={{
                      display: 'flex',
                      flexDirection: window.innerWidth <= 600 ? 'column' : 'row',
                      gap: '0.5rem',
                      width: '100%',
                    }}>
                      <button
                        onClick={() => updateBlog(b.id)}
                        style={{ backgroundColor: '#38a169', color: 'white', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', width: '100%' }}
                      >
                        Save
                      </button>
                      <button
                        onClick={() => setEditingBlog(null)}
                        style={{ backgroundColor: '#e53e3e', color: 'white', padding: '0.4rem 0.8rem', border: 'none', borderRadius: '0.375rem', width: '100%' }}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
                    <div style={{ fontWeight: 600 }}>{b.title}</div>
                    <div style={{ fontSize: '0.95rem', color: '#4a5568' }}>
                      {b.published ? '📢 Published' : '📝 Draft'} {b.createdAt ? `| ${b.createdAt}` : ''}
                    </div>
                    <div style={{ display: 'flex', flexDirection: window.innerWidth <= 600 ? 'column' : 'row', gap: '0.5rem', marginTop: '0.5rem' }}>
                      <button
                        onClick={() => setEditingBlog(b)}
                        style={{ backgroundColor: '#ecc94b', color: '#1a202c', padding: '0.3rem 0.75rem', border: 'none', borderRadius: '0.375rem', width: window.innerWidth <= 600 ? '100%' : 'auto' }}
                      >
                        Edit
                      </button>
                      <button
                        onClick={() => deleteBlog(b.id)}
                        style={{ backgroundColor: '#e53e3e', color: 'white', padding: '0.3rem 0.75rem', border: 'none', borderRadius: '0.375rem', width: window.innerWidth <= 600 ? '100%' : 'auto' }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};





export {
  DashboardContent,
  ProjectsContent,
  SkillsContent,
  EmploymentHistoryContent,
  TestimonialsContent,
  BlogsContent
}