import { Plus, Edit, Trash2, Eye, Save, X, Menu, BarChart3, FolderOpen, Brain, Briefcase, MessageSquare, PenTool, CheckCircle, XCircle } from 'lucide-react';

export const initialData = {
    projects: [
        { id: 1, name: 'E-commerce Platform', status: 'Completed', description: 'Full-stack web application for online retail.', liveLink: 'https://example.com/ecommerce', githubLink: 'https://github.com/example/ecommerce' },
        { id: 2, name: 'Task Management App', status: 'In Progress', description: 'React Native mobile application for task organization.', liveLink: '', githubLink: 'https://github.com/example2/task-app' },
        { id: 3, name: 'Portfolio Website', status: 'Completed', description: 'Personal portfolio site built with React and Tailwind CSS.', liveLink: 'https://myportfolio.com', githubLink: 'https://github.com/myusername/portfolio' },
    ],
    skills: [
        { id: 1, name: 'JavaScript', level: 'Expert', category: 'Frontend' },
        { id: 2, name: 'React', level: 'Advanced', category: 'Frontend' },
        { id: 3, name: 'Node.js', level: 'Intermediate', category: 'Backend' },
        { id: 4, name: 'Python', level: 'Intermediate', category: 'Backend' },
        { id: 5, name: 'MongoDB', level: 'Intermediate', category: 'Database' },
    ],
    employment: [
        { id: 1, title: 'Senior Developer', company: 'Tech Corp', duration: '2022-Present', description: 'Lead development team, managed project lifecycle, and mentored junior developers.' },
        { id: 2, title: 'Frontend Developer', company: 'StartupXYZ', duration: '2020-2022', description: 'Built responsive web applications using React and optimized user interfaces.' },
    ],
    testimonials: [
        { id: 1, text: 'Excellent work and great communication! John delivered a high-quality product on time.', author: 'John Doe', company: 'ABC Inc', approved: true },
        { id: 2, text: 'Delivered on time and exceeded expectations. A true professional.', author: 'Jane Smith', company: 'XYZ Corp', approved: false },
    ],
    blogs: [
        { id: 1, title: 'Getting Started with React Hooks', content: 'React Hooks revolutionized functional components. This post covers useState and useEffect.', published: true, date: '2024-01-15' },
        { id: 2, title: 'Advanced JavaScript Concepts: Closures', content: 'Understanding closures is crucial for mastering JavaScript. Dive deep into their mechanics.', published: false, date: '2024-01-10' },
        { id: 3, title: 'CSS Grid vs. Flexbox: When to Use Which', content: 'A comparison of CSS Grid and Flexbox for layout design, with practical examples.', published: true, date: '2024-02-01' },
    ]
};