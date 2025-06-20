"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import Link from "next/link";
import { useContext, useEffect, useState } from "react";

const Index = ({ posts }) => {
	const [state, setState] = useState(0);
	const [errorMsg, setErrorMsg] = useState("");
	const { banner_image_function, page_info_function } = useContext(context);
	useEffect(() => {
		banner_image_function("/img/banner2.png");
		page_info_function(
			"Welcome to<br>my personal blog",
			"Newsletter",
			"blog",
			false
		);
	}, []);

	const subscribe = async (e) => {
		e.preventDefault();
		setState(1);
		seterrorMsg("");
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
			seterrorMsg(e);
			setState(3);
		}
	};

	return (
		<Layout>
			{/* categories */}
			<div className="row">
				<div className="col-lg-6">
					{/* categories card */}
					<div
						className="trm-blog-categories trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<h6>
							Code <span className="trm-number">12</span>
						</h6>
						<div className="trm-divider trm-mb-20 trm-mt-20" />
						<a href="#." className="trm-label">
							Read publications <i className="fas fa-arrow-right" />
						</a>
					</div>
					{/* categories card end */}
				</div>
				<div className="col-lg-6">
					{/* categories card */}
					<div
						className="trm-blog-categories trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<h6>
							Guide <span className="trm-number">22</span>
						</h6>
						<div className="trm-divider trm-mb-20 trm-mt-20" />
						<a href="#." className="trm-label">
							Read publications <i className="fas fa-arrow-right" />
						</a>
					</div>
					{/* categories card end */}
				</div>
				<div className="col-lg-6">
					{/* categories card */}
					<div
						className="trm-blog-categories trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<h6>
							Blog <span className="trm-number">43</span>
						</h6>
						<div className="trm-divider trm-mb-20 trm-mt-20" />
						<a href="#." className="trm-label">
							Read publications <i className="fas fa-arrow-right" />
						</a>
					</div>
					{/* categories card end */}
				</div>
				<div className="col-lg-6">
					{/* categories card */}
					<div
						className="trm-blog-categories trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<h6>
							Tech <span className="trm-number">64</span>
						</h6>
						<div className="trm-divider trm-mb-20 trm-mt-20" />
						<a href="#." className="trm-label">
							Read publications <i className="fas fa-arrow-right" />
						</a>
					</div>
					{/* categories card end */}
				</div>
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
				<div className="col-lg-6">
					{/* blog card */}
					<div
						className="trm-blog-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<Link legacyBehavior href="/publication">
							<a className="trm-cover-frame trm-anima-link">
								<img src="img/blog/b1.png" alt="cover" />
							</a>
						</Link>
						<div className="trm-card-descr">
							<div className="trm-label trm-category trm-mb-20">
								<a href="#.">Career</a>
							</div>
							<h5 className="trm-mb-20">
								<Link legacyBehavior href="/publication">
									<a className="trm-anima-link">Hire Me?</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 DEC</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
					{/* blog card end */}
				</div>
				<div className="col-lg-6">
					{/* blog card */}
					<div
						className="trm-blog-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<Link legacyBehavior href="/publication">
							<a className="trm-cover-frame trm-anima-link">
								<img src="img/blog/b2.jpg" alt="cover" />
							</a>
						</Link>
						<div className="trm-card-descr">
							<div className="trm-label trm-category trm-mb-20">
								<a href="#.">Code</a>
							</div>
							<h5 className="trm-mb-20">
								<Link legacyBehavior href="/publication">
									<a className="trm-anima-link">Frontend Development</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>13 SEPT</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
					{/* blog card end */}
				</div>
			</div>
			{/* newest publications end */}
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Popular publications <span data-number={2} />
					</h5>
				</div>
				<div className="col-lg-6">
					{/* blog card */}
					<div
						className="trm-blog-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<Link legacyBehavior href="/publication">
							<a className="trm-cover-frame trm-anima-link">
								<img src="img/blog/b3.png" alt="cover" />
							</a>
						</Link>
						<div className="trm-card-descr">
							<div className="trm-label trm-category trm-mb-20">
								<a href="#.">Frameworks</a>
							</div>
							<h5 className="trm-mb-20">
								<Link legacyBehavior href="/publication">
									<a className="trm-anima-link">What I Love About Gatsby.js</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 AUG</li>
								<li>09:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
					{/* blog card end */}
				</div>
				<div className="col-lg-6">
					{/* blog card */}
					<div
						className="trm-blog-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<Link legacyBehavior href="/publication">
							<a className="trm-cover-frame trm-anima-link">
								<img src="img/blog/b4.jpg" alt="cover" />
							</a>
						</Link>
						<div className="trm-card-descr">
							<div className="trm-label trm-category trm-mb-20">
								<a href="#.">Guide</a>
							</div>
							<h5 className="trm-mb-20">
								<Link legacyBehavior href="/publication">
									<a className="trm-anima-link">HTML/CSS Tips & Hacks</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 JULY</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
					{/* blog card end */}
				</div>
				<div className="col-lg-6">
					{/* blog card */}
					<div
						className="trm-blog-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<Link legacyBehavior href="/publication">
							<a className="trm-cover-frame trm-anima-link">
								<img src="img/blog/b5.jpg" alt="cover" />
							</a>
						</Link>
						<div className="trm-card-descr">
							<div className="trm-label trm-category trm-mb-20">
								<a href="#.">Blog</a>
							</div>
							<h5 className="trm-mb-20">
								<Link legacyBehavior href="/publication">
									<a className="trm-anima-link">
										What&apos;s jQuery & Javascript All About?
									</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 FEB</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
					{/* blog card end */}
				</div>
				<div className="col-lg-6">
					{/* blog card */}
					<div
						className="trm-blog-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<Link legacyBehavior href="/publication">
							<a className="trm-cover-frame trm-anima-link">
								<img src="img/blog/b6.jpg" alt="cover" />
							</a>
						</Link>
						<div className="trm-card-descr">
							<div className="trm-label trm-category trm-mb-20">
								<a href="#.">Tools</a>
							</div>
							<h5 className="trm-mb-20">
								<Link legacyBehavior href="/publication">
									<a className="trm-anima-link">
										Better time management at home
									</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 JULY</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
					{/* blog card end */}
				</div>
				<div className="col-lg-6">
					{/* blog card */}
					<div
						className="trm-blog-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<Link legacyBehavior href="/publication">
							<a className="trm-cover-frame trm-anima-link">
								<img src="img/blog/b7.jpg" alt="cover" />
							</a>
						</Link>
						<div className="trm-card-descr">
							<div className="trm-label trm-category trm-mb-20">
								<a href="#.">Lifestyle</a>
							</div>
							<h5 className="trm-mb-20">
								<Link legacyBehavior href="/publication">
									<a className="trm-anima-link">
										Async Programming in Javascript
									</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 JULY</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
					{/* blog card end */}
				</div>
				<div className="col-lg-6">
					{/* blog card */}
					<div
						className="trm-blog-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<Link legacyBehavior href="/publication">
							<a className="trm-cover-frame trm-anima-link">
								<img src="img/blog/b8.jpg" alt="cover" />
							</a>
						</Link>
						<div className="trm-card-descr">
							<div className="trm-label trm-category trm-mb-20">
								<a href="#.">Guide</a>
							</div>
							<h5 className="trm-mb-20">
								<Link legacyBehavior href="/publication">
									<a className="trm-anima-link">Productivity</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 DEC</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
					{/* blog card end */}
				</div>
			</div>
			<div className="trm-divider trm-mb-40" />
			<ul className="trm-pagination">
				<li>
					<span>1</span>
				</li>
				<li>
					<a href="#.">2</a>
				</li>
				<li>
					<a href="#.">3</a>
				</li>
				<li>
					<a href="#.">4</a>
				</li>
				<li>
					<a href="#.">5</a>
				</li>
			</ul>
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Older publications <span data-number={3} />
					</h5>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-older-publications-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-older-publication trm-mb-20">
							<Link legacyBehavior href="/publication">
								<a className="trm-op-top trm-anima-link">
									<span className="trm-op-cover">
										<img src="img/blog/b4.jpg" alt="cover" />
									</span>
									<h6 className="trm-op-title">
										Make a resume for yourself today
									</h6>
								</a>
							</Link>
							<div className="trm-divider trm-mb-15 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 JULY</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
						<div className="trm-older-publication">
							<Link legacyBehavior href="/publication">
								<a className="trm-op-top trm-anima-link">
									<span className="trm-op-cover">
										<img src="img/blog/b5.jpg" alt="cover" />
									</span>
									<h6 className="trm-op-title">jQuery & JavaScript Tips</h6>
								</a>
							</Link>
							<div className="trm-divider trm-mb-15 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 JULY</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
						<div className="trm-older-publication">
							<Link legacyBehavior href="/publication">
								<a className="trm-op-top trm-anima-link">
									<span className="trm-op-cover">
										<img src="img/blog/b6.jpg" alt="cover" />
									</span>
									<h6 className="trm-op-title">
										Declutter your desk & keep it that way!
									</h6>
								</a>
							</Link>
							<div className="trm-divider trm-mb-15 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 JULY</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-older-publications-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-older-publication trm-mb-20">
							<Link legacyBehavior href="/publication">
								<a className="trm-op-top trm-anima-link">
									<span className="trm-op-cover">
										<img src="img/blog/b9.jpg" alt="cover" />
									</span>
									<h6 className="trm-op-title">
										The Power of Prioritization...
									</h6>
								</a>
							</Link>
							<div className="trm-divider trm-mb-15 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 JULY</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
						<div className="trm-older-publication">
							<Link legacyBehavior href="/publication">
								<a className="trm-op-top trm-anima-link">
									<span className="trm-op-cover">
										<img src="img/blog/b7.jpg" alt="cover" />
									</span>
									<h6 className="trm-op-title">
										The Power of Prioritization..
									</h6>
								</a>
							</Link>
							<div className="trm-divider trm-mb-15 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 MAY</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
						<div className="trm-older-publication">
							<Link legacyBehavior href="/publication">
								<a className="trm-op-top trm-anima-link">
									<span className="trm-op-cover">
										<img src="img/blog/b5.jpg" alt="cover" />
									</span>
									<h6 className="trm-op-title">
										Async Programming in JavaScript
									</h6>
								</a>
							</Link>
							<div className="trm-divider trm-mb-15 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 MAY</li>
								<li>14:32</li>
								<li>Ashish Ujjwal</li>
							</ul>
						</div>
					</div>
				</div>
			</div>
			<div className="trm-divider trm-mb-40" />
			{/* subscribe */}
			<div
				className="trm-subscribe-card trm-scroll-animation trm-active-el"
				data-scroll
				data-scroll-offset={40}
			>
				<div className="row">
					<div className="col-lg-4 align-self-center">
						<h5>Subscribe to my newsletter</h5>
					</div>
					<div className="col-lg-8">
						{state == 2 ? (
							<p className="font-medium mt-4 text-xl text-green-800">
								Thank you, you have successfully subscribed to my newsletter!
							</p>
						) : (
							<form onSubmit={subscribe}>
								<input
									type="email"
									placeholder="Email"
									aria-label="email"
									required
								/>
								<button className="trm-btn" type="submit">
									<i className="fas fa-paper-plane" />
								</button>
								{state === 3 ? (
									<p className="text-red-500 mt-3">{errorMsg}</p>
								) : (
									""
								)}
							</form>
						)}
					</div>
				</div>
			</div>
			{/* subscribe end */}
		</Layout>
	);
};

export const getStaticPaths = async () => {
	const paths = getAllPublished("posts").map(({ slug }) => ({
		params: { slug },
	}));

	return {
		paths,
		fallback: false,
	};
};

export default Index;
