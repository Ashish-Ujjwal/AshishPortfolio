"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const blogPosts = [
    {
        id: 1,
        title: "Hire Me?",
        category: "Career",
        date: "17 DEC",
        time: "14:32",
        author: "Ashish U.",
        image: "/img/blog/b1.png",
    },
    {
        id: 2,
        title: "Frontend Development",
        category: "Code",
        date: "13 SEPT",
        time: "14:32",
        author: "Ashish U.",
        image: "/img/blog/b2.jpg",
    },
    {
        id: 3,
        title: "What I Love About Gatsby.js",
        category: "Frameworks",
        date: "17 AUG",
        time: "09:32",
        author: "Ashish U.",
        image: "/img/blog/b3.png",
    },
    {
        id: 4,
        title: "HTML/CSS Tips & Hacks",
        category: "Guide",
        date: "17 JULY",
        time: "14:32",
        author: "Ashish U.",
        image: "/img/blog/b4.jpg",
    },
    {
        id: 5,
        title: "What's jQuery & Javascript All About?",
        category: "Blog",
        date: "17 FEB",
        time: "14:32",
        author: "Ashish U.",
        image: "/img/blog/b5.jpg",
    },
    {
        id: 6,
        title: "Better time management at home",
        category: "Tools",
        date: "17 JULY",
        time: "14:32",
        author: "Ashish U.",
        image: "/img/blog/b6.jpg",
    },
    {
        id: 7,
        title: "The Future of AI",
        category: "Tech",
        date: "22 DEC",
        time: "10:00",
        author: "Ashish U.",
        image: "/img/blog/b1.png",
    },
    {
        id: 8,
        title: "JavaScript Best Practices",
        category: "Code",
        date: "15 OCT",
        time: "16:45",
        author: "Ashish U.",
        image: "/img/blog/b2.jpg",
    },
    {
        id: 9,
        title: "React vs Angular vs Vue",
        category: "Frameworks",
        date: "01 SEP",
        time: "12:12",
        author: "Ashish U.",
        image: "/img/blog/b3.png",
    },
];

const categoriesJson = [
    {
        "id": 1,
        "name": "Code",
        "count": 12
    },
    {
        "id": 2,
        "name": "Guide",
        "count": 22
    },
    {
        "id": 3,
        "name": "Blog",
        "count": 43
    },
    {
        "id": 4,
        "name": "Tech",
        "count": 64
    }
]


// Create a separate component for rendering blog posts
// const BlogPosts = ({ posts }) => {
//     return (
//         <div
//             className="trm-older-publications-card trm-scroll-animation"
//             data-scroll
//             data-scroll-offset={40}
//         >
//             {posts.map((post) => (
//                 <div className="trm-older-publication trm-mb-20" key={post.id}>
//                     <Link legacyBehavior href={`/publication/${post.id}`}>
//                         <a className="trm-op-top trm-anima-link">
//                             <span className="trm-op-cover">
//                                 <img src={post.image} alt="cover" />
//                             </span>
//                             <h6 className="trm-op-title">{post.title}</h6>
//                         </a>
//                     </Link>
//                     <div className="trm-divider trm-mb-15 trm-mt-20" />
//                     <ul className="trm-card-data trm-label">
//                         <li>{post.date}</li>
//                         <li>{post.time}</li>
//                         <li>{post.author}</li>
//                     </ul>
//                 </div>
//             ))}
//         </div>
//     );
// };


const Index = () => {
    const [state, setState] = useState(0);
    const [errorMsg, setErrorMsg] = useState("");
    const { banner_image_function, page_info_function } = useContext(context);

    // Pagination state
    const [currentPage, setCurrentPage] = useState(1);
    const postsPerPage = 6; // Number of posts per page

    useEffect(() => {
        banner_image_function("/img/banner2.png");
        page_info_function(
            "Welcome to<br>my personal blog",
            "Newsletter",
            "blog",
            false
        );
    }, []);

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = blogPosts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const subscribe = async (e) => {
        e.preventDefault();
        setState(1);
        setErrorMsg("");
        console.log(e.target[0].value);
        try {
            const res = await fetch("../api/newsletter", {
                method: "POST",
                body: e.target[0].value,
            });

            const data = await res.json();
            if (data.error !== null) {
                throw data.error;
            }
            setState(2);
        } catch (e) {
            setErrorMsg(e);
            setState(3);
        }
    };

    return (
        <Layout noSidebar>

            {/* categories */}
            <div className="row">
                {categoriesJson.map((category) => (
                    <div className="col-lg-6" key={category.id}>
                        {/* categories card */}
                        <div
                            className="trm-blog-categories trm-scroll-animation trm-active-el"
                            data-scroll
                            data-scroll-offset={40}
                        >
                            <h6>
                                {category.name} <span className="trm-number">{category.count}</span>
                            </h6>
                            <div className="trm-divider trm-mb-20 trm-mt-20" />
                            <Link legacyBehavior href={`/blogs/category/${category.id}`}>
                                <a className="trm-label">
                                    Read publications <i className="fas fa-arrow-right" />
                                </a>
                            </Link>
                        </div>
                        {/* categories card end */}
                    </div>
                ))}
            </div>
            {/* categories end */}

            {/* newest publications */}
            <div className="row">
                <div className="col-lg-12">
                    {/* title */}
                    <h5 className="trm-mb-40 trm-title-with-divider">
                        Newest Publications <span data-number={1} />
                    </h5>
                </div>
                {blogPosts.map((post) => (
                    <div className="col-lg-6" key={post.id}>
                        {/* blog card */}
                        <div
                            className="trm-blog-card trm-scroll-animation trm-active-el"
                            data-scroll
                            data-scroll-offset={40}
                        >
                            <Link legacyBehavior href="/publication">
                                <a className="trm-cover-frame trm-anima-link">
                                    <img src={post.image} alt="cover" />
                                </a>
                            </Link>
                            <div className="trm-card-descr">
                                <div className="trm-label trm-category trm-mb-20">
                                    <a href="#.">{post.category}</a>
                                </div>
                                <h5 className="trm-mb-20">
                                    <Link legacyBehavior href="/publication">
                                        <a className="trm-anima-link">{post.title}</a>
                                    </Link>
                                </h5>
                                <div className="trm-divider trm-mb-20 trm-mt-20" />
                                <ul className="trm-card-data trm-label">
                                    <li>{post.date}</li>
                                    <li>{post.time}</li>
                                    <li>{post.author}</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* newest publications end */}

            {/* Pagination */}
            {/* <div className="trm-divider trm-mb-40" />
            <ul className="trm-pagination">
                {Array.from({ length: Math.ceil(blogPosts.length / postsPerPage) }, (_, index) => (
                    <li key={index + 1}>
                        <a
                            href="#"
                            onClick={(e) => {
                                e.preventDefault(); // Prevent the default anchor behavior
                                paginate(index + 1);
                            }}
                            className={currentPage === index + 1 ? 'active' : ''}
                        >
                            {index + 1}
                        </a>
                    </li>
                ))}
            </ul> */}
            {/* Pagination End */}

            {/* Older Publications */}
            <div className="row">
                <div className="col-lg-12">
                    {/* title */}
                    <h5 className="trm-mb-40 trm-title-with-divider">
                        Older publications <span data-number={3} />
                    </h5>
                </div>
                <div className="col-lg-4">
                    <div
                        className="trm-older-publications-card trm-scroll-animation"
                        data-scroll
                        data-scroll-offset={40}
                    >
                        {blogPosts.slice(0, 3).map((post) => (
                            <div className="trm-older-publication trm-mb-20" key={post.id}>
                                <Link legacyBehavior href="/publication">
                                    <a className="trm-op-top trm-anima-link">
                                        <span className="trm-op-cover">
                                            <img src={post.image} alt="cover" />
                                        </span>
                                        <h6 className="trm-op-title">{post.title}</h6>
                                    </a>
                                </Link>
                                <div className="trm-divider trm-mb-15 trm-mt-20" />
                                <ul className="trm-card-data trm-label">
                                    <li>{post.date}</li>
                                    <li>{post.time}</li>
                                    <li>{post.author}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div
                        className="trm-older-publications-card trm-scroll-animation"
                        data-scroll
                        data-scroll-offset={40}
                    >
                        {blogPosts.slice(3, 6).map((post) => (
                            <div className="trm-older-publication trm-mb-20" key={post.id}>
                                <Link legacyBehavior href="/publication">
                                    <a className="trm-op-top trm-anima-link">
                                        <span className="trm-op-cover">
                                            <img src={post.image} alt="cover" />
                                        </span>
                                        <h6 className="trm-op-title">{post.title}</h6>
                                    </a>
                                </Link>
                                <div className="trm-divider trm-mb-15 trm-mt-20" />
                                <ul className="trm-card-data trm-label">
                                    <li>{post.date}</li>
                                    <li>{post.time}</li>
                                    <li>{post.author}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="col-lg-4">
                    <div
                        className="trm-older-publications-card trm-scroll-animation"
                        data-scroll
                        data-scroll-offset={40}
                    >
                        {blogPosts.slice(6, 9).map((post) => (
                            <div className="trm-older-publication trm-mb-20" key={post.id}>
                                <Link legacyBehavior href="/publication">
                                    <a className="trm-op-top trm-anima-link">
                                        <span className="trm-op-cover">
                                            <img src={post.image} alt="cover" />
                                        </span>
                                        <h6 className="trm-op-title">{post.title}</h6>
                                    </a>
                                </Link>
                                <div className="trm-divider trm-mb-15 trm-mt-20" />
                                <ul className="trm-card-data trm-label">
                                    <li>{post.date}</li>
                                    <li>{post.time}</li>
                                    <li>{post.author}</li>
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            {/* Older Publications End */}

            <div className="trm-divider trm-mb-40" />
            {/* subscribe */}
            <div
                className="trm-subscribe-card trm-scroll-animation"
                data-scroll
                data-scroll-offset={40}
            >
                <div className="row">
                    <div className="col-lg-6 align-self-center">
                        <h5>Subscribe to my wonderful newsletter</h5>
                    </div>
                    <div className="col-lg-6">
                        <form onSubmit={subscribe}>
                            <input type="email" placeholder="Email" />
                            <button className="trm-btn" type="submit">
                                Send
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            {/* subscribe end */}
        </Layout>
    );
};

export default Index;