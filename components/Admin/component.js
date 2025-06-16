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

const DashboardContent = ({ projects, skills, employmentHistory, testimonials, blogs, styles }) => (
  <div style={styles.contentSection}>
    <h3 style={styles.contentSectionTitle}>Dashboard Overview</h3>
    <p style={{ color: '#666', marginBottom: '1rem' }}>Welcome to your admin dashboard. Here's a quick summary of your site's key activities and performance metrics.</p>
    <ul style={styles.contentList}>
      <li><strong>Total Projects:</strong> {projects.length}</li>
      <li><strong>Total Skills:</strong> {skills.length}</li>
      <li><strong>Employment Entries:</strong> {employmentHistory.length}</li>
      <li><strong>Testimonials:</strong> {testimonials.length} ({testimonials.filter(t => !t.approved).length} pending)</li>
      <li><strong>Blog Posts:</strong> {blogs.length} ({blogs.filter(b => !b.published).length} drafts)</li>
    </ul>
  </div>
);

const ProjectsContent = ({ projects, setProjects, newProjectName, setNewProjectName, newProjectStatus, setNewProjectStatus, editingProject, setEditingProject, addProject, updateProject, deleteProject, styles, setShowModal, setModalContent }) => (
  <div style={styles.contentSection}>
    <h3 style={styles.contentSectionTitle}>Projects Management</h3>
    {/* Add Project Form */}
    <div style={styles.formGroup}>
      <label htmlFor="newProjectName" style={styles.label}>Project Name</label>
      <input
        id="newProjectName"
        type="text"
        placeholder="Enter project name"
        value={newProjectName}
        onChange={(e) => setNewProjectName(e.target.value)}
        style={styles.input}
      />
    </div>
    <div style={styles.formGroup}>
      <label htmlFor="newProjectStatus" style={styles.label}>Status</label>
      <input
        id="newProjectStatus"
        type="text"
        placeholder="e.g., Active, Completed, In Progress"
        value={newProjectStatus}
        onChange={(e) => setNewProjectStatus(e.target.value)}
        style={styles.input}
      />
    </div>
    <button
      onClick={() => addProject()}
      style={{ ...styles.button, ...styles.primaryButton }}
    >
      Add Project
    </button>

    {/* Projects List */}
    <h4 style={{ ...styles.contentSectionTitle, marginTop: '2rem' }}>Existing Projects</h4>
    {projects.length === 0 ? (
      <p style={styles.noDataMessage}>No projects added yet.</p>
    ) : (
      <table style={styles.listTable}>
        <thead>
          <tr style={styles.tableRow}>
            <th style={styles.tableHeader}>Name</th>
            <th style={styles.tableHeader}>Status</th>
            <th style={styles.tableHeader}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr
                key={project.id}
                style={styles.tableRow}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.tableRowHover.backgroundColor}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
            >
              {editingProject && editingProject.id === project.id ? (
                <>
                  <td style={styles.tableCell}>
                    <input
                      type="text"
                      value={editingProject.name}
                      onChange={(e) => setEditingProject({ ...editingProject, name: e.target.value })}
                      style={styles.input}
                    />
                  </td>
                  <td style={styles.tableCell}>
                    <input
                      type="text"
                      value={editingProject.status}
                      onChange={(e) => setEditingProject({ ...editingProject, status: e.target.value })}
                      style={styles.input}
                    />
                  </td>
                  <td style={styles.tableCell}>
                    <button
                      onClick={() => updateProject(project.id)}
                      style={{ ...styles.button, ...styles.primaryButton }}
                    >
                      Save
                    </button>
                    <button
                      onClick={() => setEditingProject(null)}
                      style={{ ...styles.button, ...styles.cancelButton }}
                    >
                      Cancel
                    </button>
                  </td>
                </>
              ) : (
                <>
                  <td style={styles.tableCell}>{project.name}</td>
                  <td style={styles.tableCell}>{project.status}</td>
                  <td style={styles.tableCell}>
                    <button
                      onClick={() => setEditingProject(project)}
                      style={{ ...styles.button, ...styles.editButton }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteProject(project.id)}
                      style={{ ...styles.button, ...styles.deleteButton }}
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
    )}
  </div>
);

const SkillsContent = ({ skills, setSkills, newSkillName, setNewSkillName, newSkillLevel, setNewSkillLevel, editingSkill, setEditingSkill, addSkill, updateSkill, deleteSkill, styles, setShowModal, setModalContent }) => (
    <div style={styles.contentSection}>
        <h3 style={styles.contentSectionTitle}>Skills Showcase</h3>
        {/* Add Skill Form */}
        <div style={styles.formGroup}>
            <label htmlFor="newSkillName" style={styles.label}>Skill Name</label>
            <input
                id="newSkillName"
                type="text"
                placeholder="e.g., React.js"
                value={newSkillName}
                onChange={(e) => setNewSkillName(e.target.value)}
                style={styles.input}
            />
        </div>
        <div style={styles.formGroup}>
            <label htmlFor="newSkillLevel" style={styles.label}>Level</label>
            <input
                id="newSkillLevel"
                type="text"
                placeholder="e.g., Advanced, Intermediate"
                value={newSkillLevel}
                onChange={(e) => setNewSkillLevel(e.target.value)}
                style={styles.input}
            />
        </div>
        <button
            onClick={() => addSkill()}
            style={{ ...styles.button, ...styles.primaryButton }}
        >
            Add Skill
        </button>

        {/* Skills List */}
        <h4 style={{ ...styles.contentSectionTitle, marginTop: '2rem' }}>Existing Skills</h4>
        {skills.length === 0 ? (
            <p style={styles.noDataMessage}>No skills added yet.</p>
        ) : (
            <table style={styles.listTable}>
                <thead>
                    <tr style={styles.tableRow}>
                        <th style={styles.tableHeader}>Name</th>
                        <th style={styles.tableHeader}>Level</th>
                        <th style={styles.tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {skills.map((skill) => (
                        <tr
                            key={skill.id}
                            style={styles.tableRow}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.tableRowHover.backgroundColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            {editingSkill && editingSkill.id === skill.id ? (
                                <>
                                    <td style={styles.tableCell}>
                                        <input
                                            type="text"
                                            value={editingSkill.name}
                                            onChange={(e) => setEditingSkill({ ...editingSkill, name: e.target.value })}
                                            style={styles.input}
                                        />
                                    </td>
                                    <td style={styles.tableCell}>
                                        <input
                                            type="text"
                                            value={editingSkill.level}
                                            onChange={(e) => setEditingSkill({ ...editingSkill, level: e.target.value })}
                                            style={styles.input}
                                        />
                                    </td>
                                    <td style={styles.tableCell}>
                                        <button
                                            onClick={() => updateSkill(skill.id)}
                                            style={{ ...styles.button, ...styles.primaryButton }}
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setEditingSkill(null)}
                                            style={{ ...styles.button, ...styles.cancelButton }}
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td style={styles.tableCell}>{skill.name}</td>
                                    <td style={styles.tableCell}>{skill.level}</td>
                                    <td style={styles.tableCell}>
                                        <button
                                            onClick={() => setEditingSkill(skill)}
                                            style={{ ...styles.button, ...styles.editButton }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteSkill(skill.id)}
                                            style={{ ...styles.button, ...styles.deleteButton }}
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
        )}
    </div>
);

import { FaEdit, FaTrash, FaSave, FaTimes } from "react-icons/fa";

const EmploymentHistoryContent = ({
  employmentHistory,
  setEmploymentHistory,
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
  styles,
}) => {
  return (
    <div
      style={{
        ...styles.contentSection,
        padding: "1.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        overflowX: "hidden",
      }}
    >

      {/* Add Employment Form */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          marginBottom: "2rem",
          background: "#f8fafc",
          padding: "1rem",
          borderRadius: "10px",
          boxShadow: "0 1px 4px rgba(0,0,0,0.08)",
        }}
      >
        <div style={styles.formGroup}>
          <label htmlFor="newEmploymentTitle" style={styles.label}>
            Job Title
          </label>
          <input
            id="newEmploymentTitle"
            type="text"
            placeholder="e.g., Software Engineer"
            value={newEmploymentTitle}
            onChange={(e) => setNewEmploymentTitle(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="newEmploymentCompany" style={styles.label}>
            Company
          </label>
          <input
            id="newEmploymentCompany"
            type="text"
            placeholder="e.g., Microsoft"
            value={newEmploymentCompany}
            onChange={(e) => setNewEmploymentCompany(e.target.value)}
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="newEmploymentDuration" style={styles.label}>
            Duration
          </label>
          <input
            id="newEmploymentDuration"
            type="text"
            placeholder="e.g., Jan 2022 - Present"
            value={newEmploymentDuration}
            onChange={(e) => setNewEmploymentDuration(e.target.value)}
            style={styles.input}
          />
        </div>
        <button
          onClick={addEmployment}
          style={{
            ...styles.button,
            ...styles.primaryButton,
            padding: "0.75rem",
            fontWeight: "bold",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "0.5rem",
          }}
        >
          <FaSave />
        </button>
      </div>

      {/* Employment List */}
      <h4 style={{ ...styles.contentSectionTitle, fontSize: "1.5rem", marginBottom: "1rem" }}>
        Existing Entries
      </h4>

      {employmentHistory.length === 0 ? (
        <p style={{ color: "#888", fontStyle: "italic" }}>
          No employment history added yet.
        </p>
      ) : (
        <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          {employmentHistory.map((entry) => (
            <div
              key={entry.id}
              style={{
                border: "1px solid #e2e8f0",
                borderRadius: "10px",
                padding: "1rem",
                backgroundColor: "#fff",
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
                transition: "0.3s ease",
              }}
            >
              {editingEmployment?.id === entry.id ? (
                <div style={{ display: "flex", flexDirection: "column", gap: "0.75rem" }}>
                  <input
                    type="text"
                    value={editingEmployment.title}
                    onChange={(e) =>
                      setEditingEmployment({ ...editingEmployment, title: e.target.value })
                    }
                    style={styles.input}
                  />
                  <input
                    type="text"
                    value={editingEmployment.company}
                    onChange={(e) =>
                      setEditingEmployment({ ...editingEmployment, company: e.target.value })
                    }
                    style={styles.input}
                  />
                  <input
                    type="text"
                    value={editingEmployment.duration}
                    onChange={(e) =>
                      setEditingEmployment({ ...editingEmployment, duration: e.target.value })
                    }
                    style={styles.input}
                  />
                  <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>
                    <button
                      onClick={() => updateEmployment(entry.id)}
                      style={{
                        // ...styles.button,
                        ...styles.primaryButton,
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <FaSave />
                    </button>
                    <button
                      onClick={() => setEditingEmployment(null)}
                      style={{
                        // ...styles.button,
                        ...styles.cancelButton,
                        flex: 1,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: "0.5rem",
                      }}
                    >
                      <FaTimes />
                    </button>
                  </div>
                </div>
              ) : (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "0.5rem",
                  }}
                >
                  <div>
                    <p style={{ margin: 0 }}>
                      <strong>Title:</strong> {entry.title}
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Company:</strong> {entry.company}
                    </p>
                    <p style={{ margin: 0 }}>
                      <strong>Duration:</strong> {entry.duration}
                    </p>
                  </div>

                  <div
                    style={{
                      display: "flex",
                      justifyContent: "flex-end",
                      gap: "0.5rem",
                      marginTop: "0.5rem",
                    }}
                  >
                    <button
                      title="Edit"
                      onClick={() => setEditingEmployment(entry)}
                      style={{
                        ...styles.iconButton,
                        ...styles.editButton,
                      }}
                    >
                      <FaEdit />
                    </button>
                    <button
                      title="Delete"
                      onClick={() => deleteEmployment(entry.id)}
                      style={{
                        ...styles.iconButton,
                        ...styles.deleteButton,
                      }}
                    >
                      <FaTrash />
                    </button>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


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
  styles,
  setShowModal,
  setModalContent,
}) => {
  const responsiveTable = {
    overflowX: 'auto',
    display: 'block',
    maxWidth: '100%',
  };

  return (
    <div style={styles.contentSection}>
      <h3 style={styles.contentSectionTitle}>Testimonials Management</h3>

      {/* Add Testimonial Form */}
      <div style={styles.formGroup}>
        <label htmlFor="newTestimonialText" style={styles.label}>Testimonial Text</label>
        <textarea
          id="newTestimonialText"
          placeholder="Enter testimonial text"
          value={newTestimonialText}
          onChange={(e) => setNewTestimonialText(e.target.value)}
          style={styles.textarea}
        ></textarea>
      </div>
      <div style={styles.formGroup}>
        <label htmlFor="newTestimonialAuthor" style={styles.label}>Author</label>
        <input
          id="newTestimonialAuthor"
          type="text"
          placeholder="e.g., John Doe"
          value={newTestimonialAuthor}
          onChange={(e) => setNewTestimonialAuthor(e.target.value)}
          style={styles.input}
        />
      </div>
      <div style={styles.checkboxContainer}>
        <input
          id="newTestimonialApproved"
          type="checkbox"
          checked={newTestimonialApproved}
          onChange={(e) => setNewTestimonialApproved(e.target.checked)}
          style={styles.checkbox}
        />
        <label htmlFor="newTestimonialApproved" style={{ ...styles.label, marginBottom: '0' }}>
          Approved
        </label>
      </div>
      <button
        onClick={() => addTestimonial()}
        style={{ ...styles.button, ...styles.primaryButton }}
      >
        Add Testimonial
      </button>

      {/* Testimonials List */}
      <h4 style={{ ...styles.contentSectionTitle, marginTop: '2rem' }}>Existing Testimonials</h4>
      {testimonials.length === 0 ? (
        <p style={styles.noDataMessage}>No testimonials added yet.</p>
      ) : (
        <div style={responsiveTable}>
          <table style={{ ...styles.listTable, minWidth: '600px' }}>
            <thead>
              <tr style={styles.tableRow}>
                <th style={styles.tableHeader}>Text</th>
                <th style={styles.tableHeader}>Author</th>
                <th style={styles.tableHeader}>Approved</th>
                <th style={styles.tableHeader}>Actions</th>
              </tr>
            </thead>
            <tbody>
              {testimonials.map((testimonial) => {
                const isEditing = editingTestimonial && editingTestimonial.id === testimonial.id;

                return (
                  <tr
                    key={testimonial.id}
                    style={styles.tableRow}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = styles.tableRowHover.backgroundColor)
                    }
                    onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                  >
                    {isEditing ? (
                      <>
                        <td style={styles.tableCell}>
                          <textarea
                            value={editingTestimonial.text}
                            onChange={(e) =>
                              setEditingTestimonial({ ...editingTestimonial, text: e.target.value })
                            }
                            style={styles.textarea}
                          />
                        </td>
                        <td style={styles.tableCell}>
                          <input
                            type="text"
                            value={editingTestimonial.author}
                            onChange={(e) =>
                              setEditingTestimonial({ ...editingTestimonial, author: e.target.value })
                            }
                            style={styles.input}
                          />
                        </td>
                        <td style={styles.tableCell}>
                          <input
                            type="checkbox"
                            checked={editingTestimonial.approved}
                            onChange={(e) =>
                              setEditingTestimonial({
                                ...editingTestimonial,
                                approved: e.target.checked,
                              })
                            }
                            style={styles.checkbox}
                          />
                        </td>
                        <td style={styles.tableCell}>
                          <button
                            onClick={() => updateTestimonial(testimonial.id)}
                            style={{ ...styles.button, ...styles.primaryButton }}
                            title="Save"
                          >
                            <FaSave />
                          </button>
                          <button
                            onClick={() => setEditingTestimonial(null)}
                            style={{ ...styles.button, ...styles.cancelButton }}
                            title="Cancel"
                          >
                            <FaTimes />
                          </button>
                        </td>
                      </>
                    ) : (
                      <>
                        <td style={styles.tableCell}>{testimonial.text}</td>
                        <td style={styles.tableCell}>{testimonial.author}</td>
                        <td style={styles.tableCell}>{testimonial.approved ? "Yes" : "No"}</td>
                        <td style={styles.tableCell}>
                          <button
                            onClick={() => setEditingTestimonial(testimonial)}
                            style={{ ...styles.button, ...styles.editButton }}
                            title="Edit"
                          >
                            <FaEdit />
                          </button>
                          <button
                            onClick={() => deleteTestimonial(testimonial.id)}
                            style={{ ...styles.button, ...styles.deleteButton }}
                            title="Delete"
                          >
                            <FaTrash />
                          </button>
                        </td>
                      </>
                    )}
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};


const BlogsContent = ({ blogs, setBlogs, newBlogTitle, setNewBlogTitle, newBlogContent, setNewBlogContent, newBlogPublished, setNewBlogPublished, editingBlog, setEditingBlog, addBlog, updateBlog, deleteBlog, styles, setShowModal, setModalContent }) => (
    <div style={styles.contentSection}>
        <h3 style={styles.contentSectionTitle}>Blogs Section</h3>
        {/* Add Blog Form */}
        <div style={styles.formGroup}>
            <label htmlFor="newBlogTitle" style={styles.label}>Blog Title</label>
            <input
                id="newBlogTitle"
                type="text"
                placeholder="Enter blog title"
                value={newBlogTitle}
                onChange={(e) => setNewBlogTitle(e.target.value)}
                style={styles.input}
            />
        </div>
        <div style={styles.formGroup}>
            <label htmlFor="newBlogContent" style={styles.label}>Content</label>
            <textarea
                id="newBlogContent"
                placeholder="Write your blog content here..."
                value={newBlogContent}
                onChange={(e) => setNewBlogContent(e.target.value)}
                style={styles.textarea}
            ></textarea>
        </div>
        <div style={styles.checkboxContainer}>
            <input
                id="newBlogPublished"
                type="checkbox"
                checked={newBlogPublished}
                onChange={(e) => setNewBlogPublished(e.target.checked)}
                style={styles.checkbox}
            />
            <label htmlFor="newBlogPublished" style={{ ...styles.label, marginBottom: '0' }}>Published</label>
        </div>
        <button
            onClick={() => addBlog()}
            style={{ ...styles.button, ...styles.primaryButton }}
        >
            Add Blog Post
        </button>

        {/* Blogs List */}
        <h4 style={{ ...styles.contentSectionTitle, marginTop: '2rem' }}>Existing Blog Posts</h4>
        {blogs.length === 0 ? (
            <p style={styles.noDataMessage}>No blog posts added yet.</p>
        ) : (
            <table style={styles.listTable}>
                <thead>
                    <tr style={styles.tableRow}>
                        <th style={styles.tableHeader}>Title</th>
                        <th style={styles.tableHeader}>Published</th>
                        <th style={styles.tableHeader}>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {blogs.map((blog) => (
                        <tr
                            key={blog.id}
                            style={styles.tableRow}
                            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = styles.tableRowHover.backgroundColor}
                            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                            {editingBlog && editingBlog.id === blog.id ? (
                                <>
                                    <td style={styles.tableCell}>
                                        <input
                                            type="text"
                                            value={editingBlog.title}
                                            onChange={(e) => setNewBlogTitle(e.target.value)}
                                            style={styles.input}
                                        />
                                    </td>
                                    <td style={styles.tableCell}>
                                        <input
                                            type="checkbox"
                                            checked={editingBlog.published}
                                            onChange={(e) => setNewBlogPublished(e.target.checked)}
                                            style={styles.checkbox}
                                        />
                                    </td>
                                    <td style={styles.tableCell}>
                                        <button
                                            onClick={() => updateBlog(blog.id)}
                                            style={{ ...styles.button, ...styles.primaryButton }}
                                        >
                                            Save
                                        </button>
                                        <button
                                            onClick={() => setEditingBlog(null)}
                                            style={{ ...styles.button, ...styles.cancelButton }}
                                        >
                                            Cancel
                                        </button>
                                    </td>
                                </>
                            ) : (
                                <>
                                    <td style={styles.tableCell}>{blog.title}</td>
                                    <td style={styles.tableCell}>{blog.published ? 'Yes' : 'No'}</td>
                                    <td style={styles.tableCell}>
                                        <button
                                            onClick={() => setEditingBlog(blog)}
                                            style={{ ...styles.button, ...styles.editButton }}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            onClick={() => deleteBlog(blog.id)}
                                            style={{ ...styles.button, ...styles.deleteButton }}
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
        )}
    </div>
);

export {
  DashboardContent,
  ProjectsContent,
  SkillsContent,
  EmploymentHistoryContent,
  TestimonialsContent,
  BlogsContent
}