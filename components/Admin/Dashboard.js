import React, { useState, useEffect, useContext } from 'react';

// You might have a context for global settings or themes
// For this example, we'll assume a basic context or define mock functions.
const MockContext = React.createContext({
  banner_image_function: () => {},
  page_info_function: () => {}
});

// Mock Layout component, as it's external to this example
// In a real Next.js app, this would come from your actual /layout/Layout.js
const Layout = ({ children, noSidebar }) => {
    // A simplified layout to wrap content.
    // Assuming 'noSidebar' means content takes full width.
    const containerStyle = {
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        backgroundColor: '#1f2937', // Dark background for the whole layout
        color: '#f3f4f6', // Light text color
        fontFamily: 'Inter, sans-serif' // Apply Inter font
    };

    const contentStyle = {
        flexGrow: 1,
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem',
        width: '100%',
        boxSizing: 'border-box'
    };

    return (
        <div style={containerStyle}>
            <header className="py-4 px-6 bg-gray-800 shadow-md flex justify-between items-center">
                <h1 className="text-2xl font-bold text-blue-400">Ashish Ujjwal</h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li><a href="#projects" className="text-gray-300 hover:text-blue-300 transition duration-300">Projects</a></li>
                        <li><a href="#skills" className="text-gray-300 hover:text-blue-300 transition duration-300">Skills</a></li>
                        <li><a href="#experience" className="text-gray-300 hover:text-blue-300 transition duration-300">Experience</a></li>
                        <li><a href="#testimonials" className="text-gray-300 hover:text-blue-300 transition duration-300">Testimonials</a></li>
                        <li><a href="#blog" className="text-gray-300 hover:text-blue-300 transition duration-300">Blog</a></li>
                    </ul>
                </nav>
            </header>
            <main style={contentStyle}>
                {children}
            </main>
            <footer className="py-8 px-6 bg-gray-800 text-center text-gray-400 text-sm">
                <p>&copy; {new Date().getFullYear()} Ashish Ujjwal. All rights reserved.</p>
                <p>Designed with React and Tailwind CSS</p>
            </footer>
        </div>
    );
};

// --- Sample Data ---
const projectsData = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "Developed a full-stack e-commerce solution with user authentication, product catalog, shopping cart, and payment gateway integration.",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=E-commerce+App",
        skills: ["React", "Node.js", "Express", "MongoDB", "Stripe"],
        link: "#",
    },
    {
        id: 2,
        title: "Task Management Dashboard",
        description: "A responsive dashboard for managing tasks, tracking progress, and collaborating with teams, featuring drag-and-drop functionality.",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Task+Dashboard",
        skills: ["Vue.js", "Firebase", "Tailwind CSS"],
        link: "#",
    },
    {
        id: 3,
        title: "Personal Portfolio Site",
        description: "Designed and built a sleek, animated personal portfolio website to showcase projects and skills, optimized for performance.",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Portfolio+Site",
        skills: ["Next.js", "GSAP", "Styled Components"],
        link: "#",
    },
    {
        id: 4,
        title: "Real-time Chat Application",
        description: "Implemented a real-time chat application with group chat, private messaging, and notification features using WebSockets.",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Chat+App",
        skills: ["React", "Socket.io", "Express"],
        link: "#",
    },
];

const skillsData = [
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Tailwind CSS", level: 92 },
    { name: "HTML5 & CSS3", level: 98 },
    { name: "Git & GitHub", level: 88 },
    { name: "MongoDB", level: 75 },
];

const employmentData = [
    {
        id: 1,
        title: "Senior Frontend Developer",
        company: "Innovate Solutions Inc.",
        duration: "Jan 2022 - Present",
        description: "Leading frontend development for key client projects, mentoring junior developers, and implementing scalable UI architectures."
    },
    {
        id: 2,
        title: "Frontend Developer",
        company: "WebCrafters Studio",
        duration: "Mar 2019 - Dec 2021",
        description: "Developed and maintained responsive web applications, collaborated with UX/UI designers, and integrated RESTful APIs."
    },
    {
        id: 3,
        title: "Junior Web Developer",
        company: "Tech Start LLC",
        duration: "Aug 2017 - Feb 2019",
        description: "Assisted in front-end development tasks, performed website testing, and contributed to design system documentation."
    },
];

const testimonialsData = [
    {
        id: 1,
        quote: "Ashish is an exceptional developer with a keen eye for detail and a strong understanding of modern web technologies. Highly recommended!",
        author: "Jane Doe",
        title: "CTO, FutureTech",
        avatar: "https://placehold.co/80x80/6b7280/e5e7eb?text=JD",
    },
    {
        id: 2,
        quote: "Working with Ashish was a pleasure. He delivered our project on time and exceeded our expectations with the quality of his code and design.",
        author: "John Smith",
        title: "CEO, Global Ventures",
        avatar: "https://placehold.co/80x80/6b7280/e5e7eb?text=JS",
    },
    {
        id: 3,
        quote: "His problem-solving skills are outstanding. Ashish tackled complex challenges with ease and always found elegant solutions.",
        author: "Emily White",
        title: "Project Manager, Creative Minds",
        avatar: "https://placehold.co/80x80/6b7280/e5e7eb?text=EW",
    },
];

const blogPostsData = [
    {
        id: 1,
        title: "The Power of React Hooks in Modern Development",
        category: "React",
        date: "17 DEC",
        time: "14:32",
        author: "Ashish Ujjwal",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=React+Hooks",
    },
    {
        id: 2,
        title: "Demystifying Asynchronous JavaScript",
        category: "JavaScript",
        date: "13 SEPT",
        time: "14:32",
        author: "Ashish Ujjwal",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Async+JS",
    },
    {
        id: 3,
        title: "Styling with Tailwind CSS: A Utility-First Approach",
        category: "CSS",
        date: "17 AUG",
        time: "09:32",
        author: "Ashish Ujjwal",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Tailwind+CSS",
    },
    {
        id: 4,
        title: "State Management in Next.js Applications",
        category: "Next.js",
        date: "17 JULY",
        time: "14:32",
        author: "Ashish Ujjwal",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Next.js+State",
    },
    {
        id: 5,
        title: "Optimizing Web Performance: Best Practices",
        category: "Performance",
        date: "17 FEB",
        time: "14:32",
        author: "Ashish Ujjwal",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Web+Perf",
    },
    {
        id: 6,
        title: "Version Control with Git and GitHub Workflow",
        category: "Tools",
        date: "17 JULY",
        time: "14:32",
        author: "Ashish Ujjwal",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Git+Workflow",
    },
    {
        id: 7,
        title: "The Rise of AI in Frontend Development",
        category: "AI",
        date: "22 DEC",
        time: "10:00",
        author: "Ashish Ujjwal",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=AI+Frontend",
    },
    {
        id: 8,
        title: "Building Accessible Web Interfaces",
        category: "Accessibility",
        date: "15 OCT",
        time: "16:45",
        author: "Ashish Ujjwal",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Accessibility",
    },
    {
        id: 9,
        title: "Introduction to Serverless Functions",
        category: "Cloud",
        date: "01 SEP",
        time: "12:12",
        author: "Ashish Ujjwal",
        image: "https://placehold.co/600x400/313c4c/d1d5db?text=Serverless",
    },
];

// Reusable BlogPosts Component
const BlogPosts = ({ posts }) => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {posts.map((post) => (
                <div key={post.id} className="bg-gray-800 rounded-xl shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                    <a href="#" className="block h-48 overflow-hidden">
                        <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
                    </a>
                    <div className="p-6">
                        <span className="text-sm font-semibold text-blue-400 uppercase mb-2 block">{post.category}</span>
                        <h3 className="text-xl font-bold text-gray-100 mb-3 leading-tight">{post.title}</h3>
                        <div className="flex justify-between items-center text-gray-400 text-sm">
                            <span>{post.date}</span>
                            <span>{post.time}</span>
                            <span>{post.author}</span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export const DashboardContent = () => {
    const { banner_image_function, page_info_function } = useContext(MockContext); // Use MockContext here

    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6; // Display 6 blog posts per page

    useEffect(() => {
        // Mocking the functions from context for this self-contained example
        banner_image_function("/img/banner2.png");
        page_info_function(
            "Welcome to<br>my personal dashboard",
            "Contact Me",
            "dashboard",
            false
        );
    }, [banner_image_function, page_info_function]);

    // Pagination logic for blogs
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentBlogPosts = blogPostsData.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(blogPostsData.length / postsPerPage);

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Scroll to the blog section after pagination
        document.getElementById('blog').scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <Layout noSidebar>
            {/* Hero Section */}
            <section className="text-center py-16 bg-gray-900 rounded-xl shadow-2xl mb-12 border border-gray-700">
                <img
                    src="https://placehold.co/150x150/4f46e5/ffffff?text=AU"
                    alt="Ashish Ujjwal Avatar"
                    className="rounded-full mx-auto mb-6 border-4 border-blue-500 shadow-lg"
                />
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-blue-400 leading-tight">
                    Hello, I'm <span className="text-white">Ashish Ujjwal</span>
                </h1>
                <p className="text-xl text-gray-300 max-w-2xl mx-auto mb-8">
                    A passionate Full-Stack Developer creating intuitive and robust web applications.
                </p>
                <a
                    href="#projects"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 transform hover:scale-105"
                >
                    View My Work
                </a>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-12 px-6 mb-12 bg-gray-900 rounded-xl shadow-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8">
                    {projectsData.map((project) => (
                        <div key={project.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden flex flex-col transform transition duration-300 hover:scale-105">
                            <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                            <div className="p-6 flex flex-col flex-grow">
                                <h3 className="text-2xl font-bold mb-2 text-gray-100">{project.title}</h3>
                                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {project.skills.map((skill, idx) => (
                                        <span key={idx} className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                                <a
                                    href={project.link}
                                    className="mt-auto inline-block text-blue-400 hover:underline font-semibold"
                                >
                                    Learn More &rarr;
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" className="py-12 px-6 mb-12 bg-gray-900 rounded-xl shadow-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Skills</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {skillsData.map((skill) => (
                        <div key={skill.name} className="bg-gray-800 rounded-lg p-6 shadow-md">
                            <h3 className="text-xl font-semibold mb-3 text-gray-100">{skill.name}</h3>
                            <div className="w-full bg-gray-700 rounded-full h-3">
                                <div
                                    className="bg-blue-600 h-3 rounded-full"
                                    style={{ width: `${skill.level}%` }}
                                ></div>
                            </div>
                            <span className="text-sm text-gray-400 mt-2 block">{skill.level}% Proficient</span>
                        </div>
                    ))}
                </div>
            </section>

            {/* Employment Section */}
            <section id="experience" className="py-12 px-6 mb-12 bg-gray-900 rounded-xl shadow-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">Employment History</h2>
                <div className="relative border-l-4 border-blue-500 ml-4 md:ml-12">
                    {employmentData.map((job) => (
                        <div key={job.id} className="mb-8 ml-8 relative">
                            <div className="absolute w-4 h-4 bg-blue-500 rounded-full -left-2 top-0 transform -translate-x-1/2"></div>
                            <h3 className="text-2xl font-bold text-gray-100 mb-1">{job.title}</h3>
                            <p className="text-blue-400 text-lg mb-1">{job.company}</p>
                            <p className="text-gray-400 text-sm mb-3">{job.duration}</p>
                            <p className="text-gray-300">{job.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Testimonials Section */}
            <section id="testimonials" className="py-12 px-6 mb-12 bg-gray-900 rounded-xl shadow-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">What People Say</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonialsData.map((testimonial) => (
                        <div key={testimonial.id} className="bg-gray-800 rounded-lg p-8 shadow-md flex flex-col justify-between transform transition duration-300 hover:scale-105">
                            <p className="text-gray-300 italic mb-6">"{testimonial.quote}"</p>
                            <div className="flex items-center">
                                <img src={testimonial.avatar} alt={testimonial.author} className="w-12 h-12 rounded-full mr-4 border-2 border-blue-500" />
                                <div>
                                    <p className="font-semibold text-gray-100">{testimonial.author}</p>
                                    <p className="text-sm text-gray-400">{testimonial.title}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Blog/Publications Section */}
            <section id="blog" className="py-12 px-6 mb-12 bg-gray-900 rounded-xl shadow-xl border border-gray-700">
                <h2 className="text-3xl font-bold text-center mb-10 text-blue-400">My Blog Posts</h2>
                <BlogPosts posts={currentBlogPosts} />

                {/* Pagination for Blogs */}
                {totalPages > 1 && (
                    <div className="flex justify-center mt-10">
                        <nav className="inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                            {Array.from({ length: totalPages }, (_, i) => (
                                <button
                                    key={i + 1}
                                    onClick={() => paginate(i + 1)}
                                    className={`relative inline-flex items-center px-4 py-2 border border-gray-700 text-sm font-medium rounded-md ${
                                        currentPage === i + 1
                                            ? 'z-10 bg-blue-600 text-white'
                                            : 'bg-gray-800 text-gray-300 hover:bg-gray-700 hover:text-white'
                                    } transition duration-300`}
                                >
                                    {i + 1}
                                </button>
                            ))}
                        </nav>
                    </div>
                )}
            </section>
        </Layout>
    );
};

