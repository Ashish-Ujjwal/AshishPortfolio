"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import { useContext, useEffect } from "react";

const Index = () => {
	const { banner_image_function, page_info_function } = useContext(context);
	useEffect(() => {
		banner_image_function("/img/banner2.png");
		page_info_function("My Skills<br>and History", "resume", "resume");
	}, []);
	return (
		<Layout>
			{/* skills */}
			<div className="row">
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Communication</h6>
								<span className="trm-label trm-label-light">80%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p80" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Teamwork</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Problem-solving</h6>
								<span className="trm-label trm-label-light">80%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p80" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Adaptability</h6>
								<span className="trm-label trm-label-light">60%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p60" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* skills end */}
			{/* skills */}
			<div className="row">
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">HTML</h6>
								<span className="trm-label trm-label-light">100%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p100" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">CSS</h6>
								<span className="trm-label trm-label-light">100%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p100" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">SCSS</h6>
								<span className="trm-label trm-label-light">80%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p80" />
							</div>
						</div>
					</div>
				</div>
				<div className="col-lg-6">
					<div
						className="trm-skill-card trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">React.js</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div className="trm-mb-40">
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">Next js</h6>
								<span className="trm-label trm-label-light">70%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
						<div>
							<div className="trm-skill-header">
								<h6 className="trm-mb-15">JavaScript</h6>
								<span className="trm-label trm-label-light">75%</span>
							</div>
							<div className="trm-progressbar-frame">
								<div className="trm-progressbar p70" />
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* skills end */}
			{/* knowledge */}
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Knowledge <span data-number={2} />
					</h5>
				</div>
				<div className="col-lg-12">
					<div className="trm-card">
						<div className="row">
							<div className="col-lg-4">
								<ul className="trm-list">
									<li>Nodejs</li>
									<li>Express</li>
									<li>API&apos;s</li>
								</ul>
							</div>
							<div className="col-lg-4">
								<ul className="trm-list">
									<li>Gulp</li>
									<li>Sass</li>
									<li>Bootstrap</li>
								</ul>
							</div>
							<div className="col-lg-4">
								<ul className="trm-list">
									<li>Bootstrap</li>
									<li>React js</li>
									<li>Next js</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
			</div>
			{/* history */}
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Employment History <span data-number={3} />
					</h5>
				</div>
				<div className="col-lg-6">
					{/* timeline */}
					<div className="trm-timeline">
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">
											Project Manager - Bridge4Engineers
										</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>Dec. 2024 – Present</i>
										</div>
									</div>
								</div>
								<div className="trm-mb-20">
									- Engineered the backend of a template-selling platform digital-assets marketplace using Node.js.<br />
									- Integrated a secure payment gateway to enable smooth and reliable transactions.<br />
									- Worked closely with frontend teams to deliver SEO-optimized and responsive Websites.
								</div>
								{/* <a
								data-fancybox
								href="files/diploma.jpg"
								className="trm-label trm-label-color"
							>
								Diploma <i className="fas fa-arrow-right" />
							</a> */}
							</div>
						</div>
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">
											Software Engineer Intern - Edunet Foundation (In Collaboration with AICTE)
										</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>Dec. 2023 – Jan. 2024</i>
										</div>
									</div>
								</div>
								<div className="trm-mb-20">
									- Worked in a team to develop an Image Captioning Web App where I was responsible for implementing the
									frontend using React, building the backend with Express, and managing the database with MongoDB.<br />
									- Built RESTful APIs for user registration, authentication, and data retrieval, enabling efficient management.<br />
									- Enhanced API performance with indexing and data caching, achieving a 25% reduction in response time.
								</div>
								<a
									// data-fancybox
									target="_blank"
									href="https://drive.google.com/file/d/18hmoLI-OSOWR2tCEi-cutPy35T5JgXWd/view?usp=sharing"
									className="trm-label trm-label-color"
									rel="noopener noreferrer"
								>
									Certificate <i className="fas fa-arrow-right" />
								</a>
							</div>
						</div>
					</div>
					{/* timeline end */}
				</div>
				<div className="col-lg-6">
					<div className="trm-timeline">
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">ICPC Regionalist - 2023</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>Team AIMT-Hustler Qualified for Asia West Amritapuri Regional Contest</i>
										</div>
									</div>
								</div>
								<div>
									Team AIMT-Hustler – Asia West Amritapuri
									Qualified for ICPC Asia West Regional, Amritapuri site.
								</div>
							</div>
						</div>
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">TechBuzz - Online Coding Contest</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>3rd Rank Among 200+ Participants</i>
										</div>
									</div>
								</div>
								<div>
									Secured top rank in a College-level competitive programming contest.
								</div>
							</div>
						</div>
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">Open Source Contributor</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>Hacktoberfest’23, GSSoC’24, SSoC’24</i>
										</div>
									</div>
								</div>
								<div>
									Contributed to open source projects in multiple global programs including Hacktoberfest and GSSoC.
								</div>
							</div>
						</div>
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">Postman API Student Expert</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>API Development & Testing</i>
										</div>
									</div>
								</div>
								<div>
									Certified in API fundamentals, automation, and testing workflows using Postman.
								</div>
							</div>
						</div>
						<div
							className="trm-timeline-item trm-scroll-animation trm-active-el"
							data-scroll
							data-scroll-offset={40}
						>
							<div className="trm-timeline-mark-light" />
							<div className="trm-timeline-mark" />
							<div className="trm-a trm-timeline-content">
								<div className="trm-card-header">
									<div className="trm-left-side">
										<h6 className="trm-mb-15">Top Mentor - GSSoC’24</h6>
										<div className="trm-text-sm trm-accent-color trm-mb-15">
											<i>GirlScript Summer of Code</i>
										</div>
									</div>
								</div>
								<div>
									Delivered high-impact mentorship that inspired innovation and growth across multiple open-source teams.
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</Layout>
	);
};
export default Index;
