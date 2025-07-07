import { Plus, Edit, Trash2, Eye, Save, X, Menu, BarChart3, FolderOpen, Brain, Briefcase, MessageSquare, PenTool, CheckCircle, XCircle } from 'lucide-react';

export const initialData = {
  projects: [
    { id: 1, name: 'E-commerce Platform', status: 'Completed', description: 'Full-stack web application for online retail.', liveLink: 'https://example.com/ecommerce', githubLink: 'https://github.com/example/ecommerce' },
    { id: 2, name: 'Task Management App', status: 'In Progress', description: 'React Native mobile application for task organization.', liveLink: '', githubLink: 'https://github.com/example2/task-app' },
    { id: 3, name: 'Portfolio Website', status: 'Completed', description: 'Personal portfolio site built with React and Tailwind CSS.', liveLink: 'https://myportfolio.com', githubLink: 'https://github.com/myusername/portfolio' },
    // Add more dummy data to test scrolling
    { id: 4, name: 'Mobile Game Development', status: 'Planned', description: 'Cross-platform mobile game using Unity.', liveLink: '', githubLink: '' },
    { id: 5, name: 'AI Chatbot Integration', status: 'In Progress', description: 'Integrating a custom AI chatbot into customer service portal.', liveLink: '', githubLink: 'https://github.com/example/chatbot-ai' },
    { id: 6, name: 'Data Visualization Dashboard', status: 'Completed', description: 'Interactive dashboard for sales data using D3.js.', liveLink: 'https://example.com/dashboard', githubLink: 'https://github.com/example/d3-dashboard' },
    { id: 7, name: 'Blockchain Voting System', status: 'On Hold', description: 'Decentralized voting application on Ethereum blockchain.', liveLink: '', githubLink: '' },
    { id: 8, name: 'Cloud Migration Project', status: 'In Progress', description: 'Migrating on-premise infrastructure to AWS cloud.', liveLink: '', githubLink: '' },
    { id: 9, name: 'IoT Device Management', status: 'Planned', description: 'Platform for managing smart home IoT devices.', liveLink: '', githubLink: '' },
    { id: 10, name: 'Real-time Analytics Engine', status: 'Completed', description: 'High-performance analytics engine for streaming data.', liveLink: 'https://example.com/analytics', githubLink: 'https://github.com/example/analytics-engine' },
  ],
  skills: [
    { id: 1, name: 'JavaScript', level: 'Expert', category: 'Frontend' },
    { id: 2, name: 'React', level: 'Advanced', category: 'Frontend' },
    { id: 3, name: 'Node.js', level: 'Intermediate', category: 'Backend' },
    { id: 4, name: 'Python', level: 'Intermediate', category: 'Backend' },
    { id: 5, name: 'MongoDB', level: 'Intermediate', category: 'Database' },
    { id: 6, name: 'TypeScript', level: 'Advanced', category: 'Frontend' },
    { id: 7, name: 'Express.js', level: 'Intermediate', category: 'Backend' },
    { id: 8, name: 'PostgreSQL', level: 'Intermediate', category: 'Database' },
    { id: 9, name: 'AWS', level: 'Intermediate', category: 'DevOps' },
    { id: 10, name: 'Docker', level: 'Beginner', category: 'DevOps' },
  ],
  employment: [
    { id: 1, title: 'Senior Developer', company: 'Tech Corp', duration: '2022-Present', description: 'Lead development team, managed project lifecycle, and mentored junior developers.' },
    { id: 2, title: 'Frontend Developer', company: 'StartupXYZ', duration: '2020-2022', description: 'Built responsive web applications using React and optimized user interfaces.' },
    { id: 3, title: 'Junior Software Engineer', company: 'Innovate Solutions', duration: '2018-2020', description: 'Assisted in developing and maintaining web applications, focusing on bug fixes and new features.' },
    { id: 4, title: 'Intern Developer', company: 'Global Tech', duration: '2017-2018', description: 'Gained hands-on experience in software development, contributed to small projects.' },
  ],
  testimonials: [
    { id: 1, text: 'Excellent work and great communication! John delivered a high-quality product on time.', author: 'John Doe', company: 'ABC Inc', approved: true },
    { id: 2, text: 'Delivered on time and exceeded expectations. A true professional.', author: 'Jane Smith', company: 'XYZ Corp', approved: false },
    { id: 3, text: 'A highly skilled and dedicated developer. Always a pleasure to work with!', author: 'Alice Brown', company: 'Dev Solutions', approved: true },
    { id: 4, text: 'Very impressed with the attention to detail and problem-solving abilities.', author: 'Bob White', company: 'Innovate Co.', approved: true },
    { id: 5, text: 'John consistently goes above and beyond to ensure project success.', author: 'Carol Green', company: 'Tech Innovations', approved: false },
  ],
  blogs: [
    { id: 1, title: 'Getting Started with React Hooks', content: 'React Hooks revolutionized functional components. This post covers useState and useEffect.', published: true, date: '2024-01-15' },
    { id: 2, title: 'Advanced JavaScript Concepts: Closures', content: 'Understanding closures is crucial for mastering JavaScript. Dive deep into their mechanics.', published: false, date: '2024-01-10' },
    { id: 3, title: 'CSS Grid vs. Flexbox: When to Use Which', content: 'A comparison of CSS Grid and Flexbox for layout design, with practical examples.', published: true, date: '2024-02-01' },
    { id: 4, title: 'Optimizing Web Performance: A Checklist', content: 'Tips and tricks to make your web applications load faster and run smoother.', published: true, date: '2024-02-10' },
    { id: 5, title: 'The Future of Web Development: WebAssembly', content: 'An introduction to WebAssembly and its potential impact on web applications.', published: false, date: '2024-02-20' },
    { id: 6, title: 'Understanding Asynchronous JavaScript', content: 'A deep dive into Callbacks, Promises, and Async/Await for better async handling.', published: true, date: '2024-03-01' },
  ]
};
