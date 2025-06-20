'use client';

import React, { useState, useEffect, useContext } from 'react';
import Layout from '@/layout/Layout';
import { context } from '@/context/context';
import { DashboardContent, ProjectsContent, SkillsContent, EmploymentHistoryContent, TestimonialsContent, BlogsContent } from '@/components/Admin/component';

// A minimal Layout component to make the example self-contained within this immersive.
// In a full application, this would typically be a shared component.
// const Layout = ({ children }) => {
//   return (
//     <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
//       {children}
//     </div>
//   );
// };

// Custom Modal Component for confirmations/messages (replaces alert/confirm)
const Modal = ({ show, title, message, onConfirm, onCancel, type = 'info' }) => {
    if (!show) return null;

    const modalStyles = {
        overlay: {
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.75)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 1000,
        },
        modalContent: {
            backgroundColor: '#303746', // Dark background matching panel
            padding: '2rem',
            borderRadius: '8px',
            boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
            maxWidth: '400px',
            width: '90%',
            color: 'white',
            textAlign: 'center',
        },
        modalTitle: {
            fontSize: '1.5rem',
            marginBottom: '1rem',
            fontWeight: 'bold',
            color: type === 'error' ? '#ef4444' : type === 'success' ? '#22c55e' : 'white',
        },
        modalMessage: {
            fontSize: '1rem',
            marginBottom: '1.5rem',
            color: '#cbd5e0',
        },
        buttonContainer: {
            display: 'flex',
            justifyContent: 'center',
            gap: '1rem',
        },
        button: {
            padding: '0.6rem 1.2rem',
            borderRadius: '5px',
            border: 'none',
            cursor: 'pointer',
            fontSize: '0.9rem',
            fontWeight: '600',
            transition: 'background-color 0.2s',
        },
        confirmButton: {
            backgroundColor: type === 'confirm' ? '#ef4444' : '#3b82f6', // Red for confirm delete, blue otherwise
            color: 'white',
        },
        cancelButton: {
            backgroundColor: '#6b7280',
            color: 'white',
        },
    };

    return (
        <div style={modalStyles.overlay}>
            <div style={modalStyles.modalContent}>
                <h3 style={modalStyles.modalTitle}>{title}</h3>
                <p style={modalStyles.modalMessage}>{message}</p>
                <div style={modalStyles.buttonContainer}>
                    {onConfirm && (
                        <button
                            onClick={onConfirm}
                            style={{ ...modalStyles.button, ...modalStyles.confirmButton }}
                        >
                            {type === 'confirm' ? 'Delete' : 'OK'}
                        </button>
                    )}
                    {onCancel && (
                        <button
                            onClick={onCancel}
                            style={{ ...modalStyles.button, ...modalStyles.cancelButton }}
                        >
                            Cancel
                        </button>
                    )}
                    {/* For info/success/error types where only a close action is needed */}
                    {!onConfirm && !onCancel && (
                        <button
                            onClick={() => { onConfirm && onConfirm(); }} // Call onConfirm if it exists, to close the modal
                            style={{ ...modalStyles.button, ...modalStyles.confirmButton }}
                        >
                            Close
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};


// Shared styles object
const styles = {
    topbar: {
        width: '100%',
        backgroundColor: '#1c1c24',
        padding: '0.75rem 1.5rem',
        borderBottom: '1px solid #333',
        position: 'sticky',
        top: 0,
        zIndex: 1000,
    },
    topbarNav: {
        display: 'flex',
        flexDirection: 'row',
        gap: '1rem',
        listStyle: 'none',
        margin: 0,
        padding: 0,
        justifyContent: 'space-evenly',
        alignItems: 'center',
        flexWrap: 'wrap', // for responsiveness
        // borderRadius: '5px',
    },
    sidebarNavItem: {
        color: '#ccc',
        padding: '0.5rem 1rem',
        borderRadius: '8px',
        cursor: 'pointer',
        transition: 'all 0.3s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.5rem',
    },
    sidebarNavItemHover: {
        backgroundColor: '#2e2e38',
        color: '#fff',
    },
    sidebarNavItemActive: {
        backgroundColor: '#3b82f6',
        color: '#fff',
        fontWeight: 'bold',
    },
    sidebarText: {
        fontSize: '1rem',
    },
    // Overall container for the entire admin panel
    container: {
    display: "flex",
    flexDirection: "column",
    height: "100vh", // Full screen height
    overflow: "hidden", // Prevent unwanted scroll
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
    // Left sidebar navigation styling
    sidebar: {
        width: '250px', // Default width for larger screens
        backgroundColor: '#34495e', // Slightly lighter blue-gray
        color: 'white',
        padding: '1.5rem 0',
        boxShadow: '2px 0 10px rgba(0,0,0,0.1)',
        display: 'flex',
        flexDirection: 'column',
        transition: 'width 0.3s ease-in-out', // Smooth transition for responsive collapse
        flexShrink: 0, // Prevent sidebar from shrinking below its width
        borderRadius: '0 0 0 0.5rem', // Rounded bottom-left corner
        zIndex: 10, // Increased z-index to ensure it's above other elements
    },
    sidebarNav: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
    },
    sidebarNavItem: {
        padding: '1rem 1.5rem',
        cursor: 'pointer', // Explicitly set cursor to pointer
        borderLeftWidth: '4px',
        borderLeftStyle: 'solid',
        borderLeftColor: 'transparent',
        transition: 'background-color 0.2s ease-in-out, border-left-color 0.2s ease-in-out',
        display: 'flex',
        alignItems: 'center',
        gap: '0.75rem', // Space between icon and text
        borderRadius: '0 0.5rem 0.5rem 0', // Slight rounding on the right for items
        marginRight: '1rem', // Space from right edge of sidebar
    },
    sidebarNavItemHover: {
        backgroundColor: '#4a637d', // Background on hover
    },
    sidebarNavItemActive: {
        backgroundColor: '#4a637d', // Background for active item
        borderLeftColor: '#3498db', // Active border color (bright blue)
    },
    sidebarText: {
        opacity: 1,
        transition: 'opacity 0.3s ease-in-out',
    },
    // Main content area styling
    content: {
    flex: 1,
    overflowY: "auto", // Enables vertical scroll
    padding: "1rem",
    maxHeight: "100%", // Ensure it respects parent's height
  },
  contentHeader: {
    fontSize: "1.5rem",
    fontWeight: "bold",
    marginBottom: "1rem",
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
        marginRight: '0.5rem',
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

    container: {
        display: 'flex',
        flexDirection: 'column',
        minHeight: '100vh',
        backgroundColor: '#f0f2f5', // Light grey background for the overall app
    },
    content: {
        flexGrow: 1, // Allows content to take up remaining space
        padding: '2rem',
        maxWidth: '1200px',
        margin: '2rem auto', // Center content horizontally
        backgroundColor: '#ffffff',
        borderRadius: '12px',
        boxShadow: '0 8px 30px rgba(0, 0, 0, 0.08)',
        overflow: 'hidden', // Ensures no content spills out
    },
    contentHeader: {
        fontSize: '2.5rem',
        color: '#2c3e50',
        marginBottom: '2rem',
        textAlign: 'center',
        fontWeight: '700',
        borderBottom: '2px solid #e9ecef',
        paddingBottom: '1rem',
    },

    // --- TopBar Styles ---
    topbar: {
        backgroundColor: '#2c3e50', // Darker, professional blue/grey
        color: '#ffffff',
        padding: '0.8rem 1.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between', // Distribute items
        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
        position: 'sticky', // Makes it stick to the top
        top: 0,
        zIndex: 1000, // Ensures it's always on top
        flexWrap: 'wrap', // Allow wrapping on very small screens if needed
    },
    topbarBrand: {
        fontSize: '1.8rem',
        fontWeight: 'bold',
        color: '#ffffff',
        textDecoration: 'none',
        padding: '0.5rem 0',
    },
    menuToggle: {
        // These are base styles; media query in component handles display
        fontSize: '1.8rem', // Slightly larger for better tap target
        background: 'none',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        padding: '0.5rem 0.8rem',
        borderRadius: '5px',
        transition: 'background-color 0.2s ease',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.1)',
        },
        // Will be hidden on desktop via <style jsx>
    },
    topbarNav: {
        listStyle: 'none',
        margin: 0,
        padding: 0,
        // On mobile, these will be overridden by the <style jsx> block
        // On desktop, they will revert to flex row and be visible
    },
    topbarNavItem: {
        cursor: 'pointer',
        padding: '0.6rem 1.2rem',
        borderRadius: '5px',
        transition: 'background-color 0.2s ease, transform 0.2s ease',
        display: 'flex',
        alignItems: 'center',
        gap: '0.6rem',
        color: '#ffffff', // Default text color
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
            transform: 'translateY(-1px)',
        },
    },
    topbarNavItemActive: {
        backgroundColor: '#007bff', // Active blue
        fontWeight: 'bold',
        boxShadow: '0 2px 8px rgba(0, 0, 0, 0.2)',
        transform: 'translateY(-1px)',
    },
    topbarNavIcon: {
        fontSize: '1.2rem',
    },
    topbarNavText: {
        fontSize: '1rem',
    },

    // --- Sidebar Item Styles (if you decide to use them in TopBar context) ---
    // Note: These are reused from your SidebarItem, ensure consistency
    sidebarNavItem: { // Base style for items, applied in TopBar
        // This is a placeholder for `topbarNavItem` as you reused `sidebarNavItem` in TopBar
        // It's better to have distinct styles or alias them.
    },
    sidebarNavItemActive: { // Also a placeholder for `topbarNavItemActive`
        // Used in your TopBar, consider aliasing or mapping to topbarNavItemActive
    },
    sidebarText: { // Also a placeholder for `topbarNavText`
        // Used in your TopBar, consider aliasing or mapping to topbarNavText
    },

    // --- General Form & Content Styles (from previous responses, for completeness) ---
    contentSection: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        color: "#333",
        backgroundColor: "#ffffff",
        borderRadius: "8px",
        boxShadow: "0 4px 15px rgba(0, 0, 0, 0.08)",
        lineHeight: "1.6",
    },
    formGroup: {
        display: "flex",
        flexDirection: "column",
        gap: "0.5rem",
    },
    label: {
        fontWeight: "600",
        color: "#444",
        fontSize: "0.95rem",
    },
    input: {
        padding: "0.8rem 1rem",
        border: "1px solid #ced4da",
        borderRadius: "6px",
        fontSize: "1rem",
        width: "100%",
        boxSizing: "border-box",
        "&:focus": {
            outline: "none",
            borderColor: "#007bff",
            boxShadow: "0 0 0 0.2rem rgba(0, 123, 255, 0.25)",
        },
    },
    button: {
        padding: "0.8rem 1.5rem",
        borderRadius: "6px",
        cursor: "pointer",
        fontSize: "1rem",
        fontWeight: "bold",
        transition: "background-color 0.2s ease, transform 0.1s ease",
        border: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "0.5rem",
    },
    primaryButton: {
        backgroundColor: "#007bff",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#0056b3",
            transform: "translateY(-1px)",
        },
    },
};


const MiniTopBar = ({ activeSection, setActiveSection, styles }) => {
    const [menuOpen, setMenuOpen] = useState(false);

    const getIcon = (item) => {
        switch (item) {
            case 'dashboard': return '📊';
            case 'projects': return '🚀';
            case 'skills': return '💡';
            case 'employment': return '💼';
            case 'testimonials': return '💬';
            case 'blogs': return '✍️';
            default: return '📁';
        }
    };

    const formatLabel = (item) =>
        item.replace(/-/g, ' ')
            .split(' ')
            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

    const navItems = ['dashboard', 'projects', 'skills', 'employment', 'testimonials', 'blogs'];

    return (
        <nav style={styles.topbar}>
            {/* Hamburger button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                style={styles.menuToggle}
                aria-expanded={menuOpen}
                aria-controls="topbar-navigation"
                className={`menu-toggle ${menuOpen ? 'open' : ''}`}
            >
                <div className="bar"></div>
                <div className="bar"></div>
                <div className="bar"></div>
            </button>

            {/* Navigation Items */}
            <ul
                id="topbar-navigation"
                className={`nav-menu ${menuOpen ? 'open' : ''}`}
                style={styles.topbarNav}
            >
                {navItems.map((item) => (
                    <li
                        key={item}
                        style={{
                            ...styles.topbarNavItem,
                            ...(activeSection === item ? styles.topbarNavItemActive : {}),
                        }}
                        onClick={() => {
                            setActiveSection(item);
                            setMenuOpen(false);
                        }}
                    >
                        <span style={styles.topbarNavIcon}>{getIcon(item)}</span>
                        <span style={styles.topbarNavText}>{formatLabel(item)}</span>
                    </li>
                ))}
            </ul>

            {/* Styling for hamburger and animation */}
            <style>{`
                .menu-toggle {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    align-item: center;
                    gap: 4px;
                    width: 40px;
                    height: 28px;
                    background: transparent;
                    border: none;
                    cursor: pointer;
                    padding: 0;
                    z-index: 1100;
                }
                .menu-toggle .bar {
                    width: 15px;
                    height: 3px;
                    background-color: #fff;
                    transition: all 0.3s ease;
                }
                .menu-toggle.open .bar:nth-child(1) {
                    transform: rotate(45deg) translateY(8px);
                }
                .menu-toggle.open .bar:nth-child(2) {
                    opacity: 0;
                }
                .menu-toggle.open .bar:nth-child(3) {
                    transform: rotate(-45deg) translateY(-8px);
                }

                @media (min-width: 768px) {
                    .menu-toggle {
                        display: none;
                    }
                    .nav-menu {
                        display: flex !important;
                        flex-direction: row;
                        align-items: center;
                        gap: 1rem;
                    }
                }

                @media (max-width: 767px) {
                    .nav-menu {
                        position: absolute;
                        top: 100%;
                        left: 0;
                        right: 0;
                        background-color: #1c1c24;
                        flex-direction: column;
                        align-items: flex-start;
                        padding: 1rem;
                        display: none;
                        transition: max-height 0.3s ease-in-out;
                    }
                    .nav-menu.open {
                        display: flex;
                        animation: fadeDown 0.3s ease;
                    }
                    @keyframes fadeDown {
                        from {
                            opacity: 0;
                            transform: translateY(-10px);
                        }
                        to {
                            opacity: 1;
                            transform: translateY(0);
                        }
                    }
                }
            `}</style>
        </nav>
    );
};


export default function AdminPanelPage() {
    // State for active section in the sidebar
    const [activeSection, setActiveSection] = useState('dashboard');
    const { page_info_function } = useContext(context);
    
      useEffect(() => {
        page_info_function("EDIT Y'R PROFILE", "Welcome Ashish!", "Admin");
      }, []);

    // States for CRUD data: projects (initial dummy data)
    const [projects, setProjects] = useState([
        { id: 'proj1', name: 'E-commerce Redesign', status: 'In Progress' },
        { id: 'proj2', name: 'Mobile App Launch', status: 'Completed' },
    ]);
    const [newProjectName, setNewProjectName] = useState('');
    const [newProjectStatus, setNewProjectStatus] = useState('');
    const [editingProject, setEditingProject] = useState(null); // Stores the project being edited

    // States for CRUD data: skills (initial dummy data)
    const [skills, setSkills] = useState([
        { id: 'skill1', name: 'React.js', level: 'Advanced' },
        { id: 'skill2', name: 'Node.js', level: 'Intermediate' },
    ]);
    const [newSkillName, setNewSkillName] = useState('');
    const [newSkillLevel, setNewSkillLevel] = useState('');
    const [editingSkill, setEditingSkill] = useState(null);

    // States for CRUD data: employment history (initial dummy data)
    const [employmentHistory, setEmploymentHistory] = useState([
        { id: 'emp1', title: 'Senior Developer', company: 'Tech Solutions', duration: '2020-Present' },
        { id: 'emp2', title: 'Junior Developer', company: 'Web Innovators', duration: '2018-2020' },
    ]);
    const [newEmploymentTitle, setNewEmploymentTitle] = useState('');
    const [newEmploymentCompany, setNewEmploymentCompany] = useState('');
    const [newEmploymentDuration, setNewEmploymentDuration] = useState('');
    const [editingEmployment, setEditingEmployment] = useState(null);

    // States for CRUD data: testimonials (initial dummy data)
    const [testimonials, setTestimonials] = useState([
        { id: 'test1', text: 'Great service!', author: 'Client A', approved: true },
        { id: 'test2', text: 'Very professional.', author: 'Client B', approved: false },
    ]);
    const [newTestimonialText, setNewTestimonialText] = useState('');
    const [newTestimonialAuthor, setNewTestimonialAuthor] = useState('');
    const [newTestimonialApproved, setNewTestimonialApproved] = useState(false);
    const [editingTestimonial, setEditingTestimonial] = useState(null);

    // States for CRUD data: blogs (initial dummy data)
    const [blogs, setBlogs] = useState([
        { id: 'blog1', title: 'Getting Started with React Hooks', content: '...', published: true },
        { id: 'blog2', title: 'Advanced CSS Techniques', content: '...', published: false },
    ]);
    const [newBlogTitle, setNewBlogTitle] = useState('');
    const [newBlogContent, setNewBlogContent] = useState('');
    const [newBlogPublished, setNewBlogPublished] = useState(false);
    const [editingBlog, setEditingBlog] = useState(null);


    // Modal state for custom dialogs (success, error, confirm)
    const [showModal, setShowModal] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', message: '', onConfirm: null, onCancel: null, type: 'info' });


    // CRUD Operations - Projects Section

    // Add a new project to local state
    const addProject = () => {
        if (!newProjectName.trim() || !newProjectStatus.trim()) {
            setShowModal(true);
            setModalContent({
                title: 'Input Required',
                message: 'Please provide both project name and status.',
                onConfirm: () => setShowModal(false),
                type: 'info',
            });
            return;
        }

        const newId = Date.now().toString(); // Simple unique ID for local state
        setProjects([...projects, { id: newId, name: newProjectName.trim(), status: newProjectStatus.trim() }]);
        setNewProjectName('');
        setNewProjectStatus('');
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Project added successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    // Update an existing project in local state
    const updateProject = (id) => {
        if (!editingProject) return;

        setProjects(projects.map(proj =>
            proj.id === id ? { ...proj, name: editingProject.name.trim(), status: editingProject.status.trim() } : proj
        ));
        setEditingProject(null);
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Project updated successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    // Delete a project from local state
    const deleteProject = (id) => {
        setShowModal(true);
        setModalContent({
            title: 'Confirm Deletion',
            message: 'Are you sure you want to delete this project? This action cannot be undone.',
            onConfirm: () => {
                setShowModal(false);
                setProjects(projects.filter(proj => proj.id !== id));
                setShowModal(true);
                setModalContent({
                    title: 'Success!',
                    message: 'Project deleted successfully.',
                    onConfirm: () => setShowModal(false),
                    type: 'success',
                });
            },
            onCancel: () => setShowModal(false),
            type: 'confirm',
        });
    };

    // CRUD Operations - Skills Section (similar logic)

    const addSkill = () => {
        if (!newSkillName.trim() || !newSkillLevel.trim()) {
            setShowModal(true);
            setModalContent({
                title: 'Input Required',
                message: 'Please provide both skill name and level.',
                onConfirm: () => setShowModal(false),
                type: 'info',
            });
            return;
        }
        const newId = Date.now().toString();
        setSkills([...skills, { id: newId, name: newSkillName.trim(), level: newSkillLevel.trim() }]);
        setNewSkillName('');
        setNewSkillLevel('');
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Skill added successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    const updateSkill = (id) => {
        if (!editingSkill) return;
        setSkills(skills.map(skill =>
            skill.id === id ? { ...skill, name: editingSkill.name.trim(), level: editingSkill.level.trim() } : skill
        ));
        setEditingSkill(null);
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Skill updated successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    const deleteSkill = (id) => {
        setShowModal(true);
        setModalContent({
            title: 'Confirm Deletion',
            message: 'Are you sure you want to delete this skill? This action cannot be undone.',
            onConfirm: () => {
                setShowModal(false);
                setSkills(skills.filter(skill => skill.id !== id));
                setShowModal(true);
                setModalContent({
                    title: 'Success!',
                    message: 'Skill deleted successfully.',
                    onConfirm: () => setShowModal(false),
                    type: 'success',
                });
            },
            onCancel: () => setShowModal(false),
            type: 'confirm',
        });
    };

    // CRUD Operations - Employment History Section

    const addEmployment = () => {
        if (!newEmploymentTitle.trim() || !newEmploymentCompany.trim() || !newEmploymentDuration.trim()) {
            setShowModal(true);
            setModalContent({
                title: 'Input Required',
                message: 'Please fill all employment fields.',
                onConfirm: () => setShowModal(false),
                type: 'info',
            });
            return;
        }
        const newId = Date.now().toString();
        setEmploymentHistory([...employmentHistory, { id: newId, title: newEmploymentTitle.trim(), company: newEmploymentCompany.trim(), duration: newEmploymentDuration.trim() }]);
        setNewEmploymentTitle('');
        setNewEmploymentCompany('');
        setNewEmploymentDuration('');
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Employment entry added successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    const updateEmployment = (id) => {
        if (!editingEmployment) return;
        setEmploymentHistory(employmentHistory.map(entry =>
            entry.id === id ? { ...entry, title: editingEmployment.title.trim(), company: editingEmployment.company.trim(), duration: editingEmployment.duration.trim() } : entry
        ));
        setEditingEmployment(null);
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Employment entry updated successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    const deleteEmployment = (id) => {
        setShowModal(true);
        setModalContent({
            title: 'Confirm Deletion',
            message: 'Are you sure you want to delete this employment entry? This action cannot be undone.',
            onConfirm: () => {
                setShowModal(false);
                setEmploymentHistory(employmentHistory.filter(entry => entry.id !== id));
                setShowModal(true);
                setModalContent({
                    title: 'Success!',
                    message: 'Employment entry deleted successfully.',
                    onConfirm: () => setShowModal(false),
                    type: 'success',
                });
            },
            onCancel: () => setShowModal(false),
            type: 'confirm',
        });
    };

    // CRUD Operations - Testimonials Section

    const addTestimonial = () => {
        if (!newTestimonialText.trim() || !newTestimonialAuthor.trim()) {
            setShowModal(true);
            setModalContent({
                title: 'Input Required',
                message: 'Please provide both testimonial text and author.',
                onConfirm: () => setShowModal(false),
                type: 'info',
            });
            return;
        }
        const newId = Date.now().toString();
        setTestimonials([...testimonials, { id: newId, text: newTestimonialText.trim(), author: newTestimonialAuthor.trim(), approved: newTestimonialApproved }]);
        setNewTestimonialText('');
        setNewTestimonialAuthor('');
        setNewTestimonialApproved(false);
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Testimonial added successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    const updateTestimonial = (id) => {
        if (!editingTestimonial) return;
        setTestimonials(testimonials.map(test =>
            test.id === id ? { ...test, text: editingTestimonial.text.trim(), author: editingTestimonial.author.trim(), approved: editingTestimonial.approved } : test
        ));
        setEditingTestimonial(null);
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Testimonial updated successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    const deleteTestimonial = (id) => {
        setShowModal(true);
        setModalContent({
            title: 'Confirm Deletion',
            message: 'Are you sure you want to delete this testimonial? This action cannot be undone.',
            onConfirm: () => {
                setShowModal(false);
                setTestimonials(testimonials.filter(test => test.id !== id));
                setShowModal(true);
                setModalContent({
                    title: 'Success!',
                    message: 'Testimonial deleted successfully.',
                    onConfirm: () => setShowModal(false),
                    type: 'success',
                });
            },
            onCancel: () => setShowModal(false),
            type: 'confirm',
        });
    };

    // CRUD Operations - Blogs Section

    const addBlog = () => {
        if (!newBlogTitle.trim() || !newBlogContent.trim()) {
            setShowModal(true);
            setModalContent({
                title: 'Input Required',
                message: 'Please provide both blog title and content.',
                onConfirm: () => setShowModal(false),
                type: 'info',
            });
            return;
        }
        const newId = Date.now().toString();
        setBlogs([...blogs, { id: newId, title: newBlogTitle.trim(), content: newBlogContent.trim(), published: newBlogPublished }]);
        setNewBlogTitle('');
        setNewBlogContent('');
        setNewBlogPublished(false);
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Blog post added successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    const updateBlog = (id) => {
        if (!editingBlog) return;
        setBlogs(blogs.map(blog =>
            blog.id === id ? { ...blog, title: editingBlog.title.trim(), content: editingBlog.content.trim(), published: editingBlog.published } : blog
        ));
        setEditingBlog(null);
        setShowModal(true);
        setModalContent({
            title: 'Success!',
            message: 'Blog post updated successfully.',
            onConfirm: () => setShowModal(false),
            type: 'success',
        });
    };

    const deleteBlog = (id) => {
        setShowModal(true);
        setModalContent({
            title: 'Confirm Deletion',
            message: 'Are you sure you want to delete this blog post? This action cannot be undone.',
            onConfirm: () => {
                setShowModal(false);
                setBlogs(blogs.filter(blog => blog.id !== id));
                setShowModal(true);
                setModalContent({
                    title: 'Success!',
                    message: 'Blog post deleted successfully.',
                    onConfirm: () => setShowModal(false),
                    type: 'success',
                });
            },
            onCancel: () => setShowModal(false),
            type: 'confirm',
        });
    };


    return (
        <Layout noSidebar>
            <div style={styles.container}>
                {/* TopBar Navigation */}
                <MiniTopBar
                    activeSection={activeSection}
                    setActiveSection={setActiveSection}
                    styles={styles}
                />

                {/* Main Content Area */}
                <div style={styles.content}>
                    <h1 style={styles.contentHeader}>
                        {activeSection
                            .replace(/-/g, ' ')
                            .split(' ')
                            .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
                            .join(' ')}
                    </h1>

                    {activeSection === 'dashboard' && (
                        <DashboardContent
                            projects={projects}
                            skills={skills}
                            employmentHistory={employmentHistory}
                            testimonials={testimonials}
                            blogs={blogs}
                            styles={styles}
                        />
                    )}

                    {activeSection === 'projects' && (
                        <ProjectsContent
                            projects={projects}
                            setProjects={setProjects}
                            newProjectName={newProjectName}
                            setNewProjectName={setNewProjectName}
                            newProjectStatus={newProjectStatus}
                            setNewProjectStatus={setNewProjectStatus}
                            editingProject={editingProject}
                            setEditingProject={setEditingProject}
                            addProject={addProject}
                            updateProject={updateProject}
                            deleteProject={deleteProject}
                            styles={styles}
                            setShowModal={setShowModal}
                            setModalContent={setModalContent}
                        />
                    )}

                    {activeSection === 'skills' && (
                        <SkillsContent
                            skills={skills}
                            setSkills={setSkills}
                            newSkillName={newSkillName}
                            setNewSkillName={setNewSkillName}
                            newSkillLevel={newSkillLevel}
                            setNewSkillLevel={setNewSkillLevel}
                            editingSkill={editingSkill}
                            setEditingSkill={setEditingSkill}
                            addSkill={addSkill}
                            updateSkill={updateSkill}
                            deleteSkill={deleteSkill}
                            styles={styles}
                            setShowModal={setShowModal}
                            setModalContent={setModalContent}
                        />
                    )}

                    {activeSection === 'employment' && (
                        <EmploymentHistoryContent
                            employmentHistory={employmentHistory}
                            setEmploymentHistory={setEmploymentHistory}
                            newEmploymentTitle={newEmploymentTitle}
                            setNewEmploymentTitle={setNewEmploymentTitle}
                            newEmploymentCompany={newEmploymentCompany}
                            setNewEmploymentCompany={setNewEmploymentCompany}
                            newEmploymentDuration={newEmploymentDuration}
                            setNewEmploymentDuration={setNewEmploymentDuration}
                            editingEmployment={editingEmployment}
                            setEditingEmployment={setEditingEmployment}
                            addEmployment={addEmployment}
                            updateEmployment={updateEmployment}
                            deleteEmployment={deleteEmployment}
                            styles={styles}
                            setShowModal={setShowModal}
                            setModalContent={setModalContent}
                        />
                    )}

                    {activeSection === 'testimonials' && (
                        <TestimonialsContent
                            testimonials={testimonials}
                            setTestimonials={setTestimonials}
                            newTestimonialText={newTestimonialText}
                            setNewTestimonialText={setNewTestimonialText}
                            newTestimonialAuthor={newTestimonialAuthor}
                            setNewTestimonialAuthor={setNewTestimonialAuthor}
                            newTestimonialApproved={newTestimonialApproved}
                            setNewTestimonialApproved={setNewTestimonialApproved}
                            editingTestimonial={editingTestimonial}
                            setEditingTestimonial={setEditingTestimonial}
                            addTestimonial={addTestimonial}
                            updateTestimonial={updateTestimonial}
                            deleteTestimonial={deleteTestimonial}
                            styles={styles}
                            setShowModal={setShowModal}
                            setModalContent={setModalContent}
                        />
                    )}

                    {activeSection === 'blogs' && (
                        <BlogsContent
                            blogs={blogs}
                            setBlogs={setBlogs}
                            newBlogTitle={newBlogTitle}
                            setNewBlogTitle={setNewBlogTitle}
                            newBlogContent={newBlogContent}
                            setNewBlogContent={setNewBlogContent}
                            newBlogPublished={newBlogPublished}
                            setNewBlogPublished={setNewBlogPublished}
                            editingBlog={editingBlog}
                            setEditingBlog={setEditingBlog}
                            addBlog={addBlog}
                            updateBlog={updateBlog}
                            deleteBlog={deleteBlog}
                            styles={styles}
                            setShowModal={setShowModal}
                            setModalContent={setModalContent}
                        />
                    )}
                </div>

                {/* Custom Styles */}
                <style>
                    {`
          @media (max-width: 768px) {
            .admin-topbar ul {
              flex-direction: column !important;
              gap: 0.5rem !important;
              align-items: stretch !important;
            }
            .admin-topbar li {
              justify-content: flex-start !important;
              padding: 0.75rem 1rem !important;
            }
          }

          @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}
                </style>
            </div>

            {/* Modal */}
            {showModal && (
                <Modal
                    show={showModal}
                    title={modalContent.title}
                    message={modalContent.message}
                    onConfirm={modalContent.onConfirm}
                    onCancel={modalContent.onCancel}
                    type={modalContent.type}
                />
            )}
        </Layout>
    );
}