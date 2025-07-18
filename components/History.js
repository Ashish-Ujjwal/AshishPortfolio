const employmentHistory = [
  {
    role: 'Project Manager',
    company: 'Bridge4Engineers',
    duration: 'Dec. 2024 – Present',
    details: [
      'Engineered the backend of a template-selling platform digital-assets marketplace using Node.js.',
      'Integrated a secure payment gateway to enable smooth and reliable transactions.',
      'Worked closely with frontend teams to deliver SEO-optimized and responsive Websites.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Edunet Foundation (In Collaboration with AICTE)',
    duration: 'Dec. 2023 – Jan. 2024',
    details: [
      'Worked in a team to develop an Image Captioning Web App where I was responsible for implementing the frontend using React, building the backend with Express, and managing the database with MongoDB.',
      'Built RESTful APIs for user registration, authentication, and data retrieval, enabling efficient management.',
      'Enhanced API performance with indexing and data caching, achieving a 25% reduction in response time.',
    ],
    certificate: 'https://drive.google.com/file/d/18hmoLI-OSOWR2tCEi-cutPy35T5JgXWd/view?usp=sharing',
  },
];

const achievements = [
  {
    title: 'ICPC Regionalist - 2023',
    subtitle: 'Team AIMT-Hustler Qualified for Asia West Amritapuri Regional Contest',
    description: 'Qualified for ICPC Asia West Regional, Amritapuri site.',
  },
  {
    title: 'TechBuzz - Online Coding Contest',
    subtitle: '3rd Rank Among 200+ Participants',
    description: 'Secured top rank in a College-level competitive programming contest.',
  },
  {
    title: 'Open Source Contributor',
    subtitle: 'Hacktoberfest’23, GSSoC’24, SSoC’24',
    description: 'Contributed to open source projects in multiple global programs including Hacktoberfest and GSSoC.',
  },
  {
    title: 'Postman API Student Expert',
    subtitle: 'API Development & Testing',
    description: 'Certified in API fundamentals, automation, and testing workflows using Postman.',
  },
  {
    title: 'Top Mentor - GSSoC’24',
    subtitle: 'GirlScript Summer of Code',
    description: 'Delivered high-impact mentorship that inspired innovation and growth across multiple open-source teams.',
  },
];


const History = () => {
  return (
    <div className="row">
      <div className="col-lg-12">
        <h5 className="trm-mb-40 trm-title-with-divider">
          Employment History <span data-number={5} />
        </h5>
      </div>

      <div className="col-lg-6">
        <div className="trm-timeline">
          {employmentHistory.map((job, index) => (
            <div
              key={index}
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
                      {job.role} - {job.company}
                    </h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>{job.duration}</i>
                    </div>
                  </div>
                </div>
                <div className="trm-mb-20">
                  {job.details.map((point, i) => (
                    <div key={i}>- {point}</div>
                  ))}
                </div>
                {job.certificate && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href={job.certificate}
                    className="trm-label trm-label-color"
                  >
                    Certificate <i className="fas fa-arrow-right" />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-lg-6">
        <div className="trm-timeline">
          {achievements.map((ach, index) => (
            <div
              key={index}
              className="trm-timeline-item trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <div className="trm-timeline-mark-light" />
              <div className="trm-timeline-mark" />
              <div className="trm-a trm-timeline-content">
                <div className="trm-card-header">
                  <div className="trm-left-side">
                    <h6 className="trm-mb-15">{ach.title}</h6>
                    <div className="trm-text-sm trm-accent-color trm-mb-15">
                      <i>{ach.subtitle}</i>
                    </div>
                  </div>
                </div>
                <div>{ach.description}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default History;




// const History = () => {
// 	return (
// 		<div className="row">
// 			<div className="col-lg-12">
// 				{/* title */}
// 				<h5 className="trm-mb-40 trm-title-with-divider">
// 					Employment History <span data-number={7} />
// 				</h5>
// 			</div>
// 			<div className="col-lg-6">
// 				{/* timeline */}
// 				<div className="trm-timeline">
// 					<div
// 						className="trm-timeline-item trm-scroll-animation trm-active-el"
// 						data-scroll
// 						data-scroll-offset={40}
// 					>
// 						<div className="trm-timeline-mark-light" />
// 						<div className="trm-timeline-mark" />
// 						<div className="trm-a trm-timeline-content">
// 							<div className="trm-card-header">
// 								<div className="trm-left-side">
// 									<h6 className="trm-mb-15">
// 										Project Manager - Bridge4Engineers
// 									</h6>
// 									<div className="trm-text-sm trm-accent-color trm-mb-15">
// 										<i>Dec. 2024 – Present</i>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="trm-mb-20">
// 								- Engineered the backend of a template-selling platform digital-assets marketplace using Node.js.<br />
// 								- Integrated a secure payment gateway to enable smooth and reliable transactions.<br />
// 								- Worked closely with frontend teams to deliver SEO-optimized and responsive Websites.
// 							</div>
// 							{/* <a
// 								data-fancybox
// 								href="files/diploma.jpg"
// 								className="trm-label trm-label-color"
// 							>
// 								Diploma <i className="fas fa-arrow-right" />
// 							</a> */}
// 						</div>
// 					</div>
// 					<div
// 						className="trm-timeline-item trm-scroll-animation trm-active-el"
// 						data-scroll
// 						data-scroll-offset={40}
// 					>
// 						<div className="trm-timeline-mark-light" />
// 						<div className="trm-timeline-mark" />
// 						<div className="trm-a trm-timeline-content">
// 							<div className="trm-card-header">
// 								<div className="trm-left-side">
// 									<h6 className="trm-mb-15">
// 										Software Engineer Intern - Edunet Foundation (In Collaboration with AICTE)
// 									</h6>
// 									<div className="trm-text-sm trm-accent-color trm-mb-15">
// 										<i>Dec. 2023 – Jan. 2024</i>
// 									</div>
// 								</div>
// 							</div>
// 							<div className="trm-mb-20">
// 								- Worked in a team to develop an Image Captioning Web App where I was responsible for implementing the
//         							frontend using React, building the backend with Express, and managing the database with MongoDB.<br />
// 								- Built RESTful APIs for user registration, authentication, and data retrieval, enabling efficient management.<br />
// 								- Enhanced API performance with indexing and data caching, achieving a 25% reduction in response time.
// 							</div>
// 							<a
// 								// data-fancybox
// 								target="_blank"
// 								href="https://drive.google.com/file/d/18hmoLI-OSOWR2tCEi-cutPy35T5JgXWd/view?usp=sharing"
// 								className="trm-label trm-label-color"
// 								rel="noopener noreferrer"
// 							>
// 								Certificate <i className="fas fa-arrow-right" />
// 							</a>
// 						</div>
// 					</div>
// 				</div>
// 				{/* timeline end */}
// 			</div>
// 			<div className="col-lg-6">
// 				<div className="trm-timeline">
// 					<div
// 						className="trm-timeline-item trm-scroll-animation trm-active-el"
// 						data-scroll
// 						data-scroll-offset={40}
// 					>
// 						<div className="trm-timeline-mark-light" />
// 						<div className="trm-timeline-mark" />
// 						<div className="trm-a trm-timeline-content">
// 							<div className="trm-card-header">
// 								<div className="trm-left-side">
// 									<h6 className="trm-mb-15">ICPC Regionalist - 2023</h6>
// 									<div className="trm-text-sm trm-accent-color trm-mb-15">
// 										<i>Team AIMT-Hustler Qualified for Asia West Amritapuri Regional Contest</i>
// 									</div>
// 								</div>
// 							</div>
// 							<div>
// 								Team AIMT-Hustler – Asia West Amritapuri
// 								Qualified for ICPC Asia West Regional, Amritapuri site.
// 							</div>
// 						</div>
// 					</div>
// 					<div
// 						className="trm-timeline-item trm-scroll-animation trm-active-el"
// 						data-scroll
// 						data-scroll-offset={40}
// 					>
// 						<div className="trm-timeline-mark-light" />
// 						<div className="trm-timeline-mark" />
// 						<div className="trm-a trm-timeline-content">
// 							<div className="trm-card-header">
// 								<div className="trm-left-side">
// 									<h6 className="trm-mb-15">TechBuzz - Online Coding Contest</h6>
// 									<div className="trm-text-sm trm-accent-color trm-mb-15">
// 										<i>3rd Rank Among 200+ Participants</i>
// 									</div>
// 								</div>
// 							</div>
// 							<div>
// 								Secured top rank in a College-level competitive programming contest.
// 							</div>
// 						</div>
// 					</div>
// 					<div
// 						className="trm-timeline-item trm-scroll-animation trm-active-el"
// 						data-scroll
// 						data-scroll-offset={40}
// 					>
// 						<div className="trm-timeline-mark-light" />
// 						<div className="trm-timeline-mark" />
// 						<div className="trm-a trm-timeline-content">
// 							<div className="trm-card-header">
// 								<div className="trm-left-side">
// 									<h6 className="trm-mb-15">Open Source Contributor</h6>
// 									<div className="trm-text-sm trm-accent-color trm-mb-15">
// 										<i>Hacktoberfest’23, GSSoC’24, SSoC’24</i>
// 									</div>
// 								</div>
// 							</div>
// 							<div>
// 								Contributed to open source projects in multiple global programs including Hacktoberfest and GSSoC.
// 							</div>
// 						</div>
// 					</div>
// 					<div
// 						className="trm-timeline-item trm-scroll-animation trm-active-el"
// 						data-scroll
// 						data-scroll-offset={40}
// 					>
// 						<div className="trm-timeline-mark-light" />
// 						<div className="trm-timeline-mark" />
// 						<div className="trm-a trm-timeline-content">
// 							<div className="trm-card-header">
// 								<div className="trm-left-side">
// 									<h6 className="trm-mb-15">Postman API Student Expert</h6>
// 									<div className="trm-text-sm trm-accent-color trm-mb-15">
// 										<i>API Development & Testing</i>
// 									</div>
// 								</div>
// 							</div>
// 							<div>
// 								Certified in API fundamentals, automation, and testing workflows using Postman.
// 							</div>
// 						</div>
// 					</div>
// 					<div
// 						className="trm-timeline-item trm-scroll-animation trm-active-el"
// 						data-scroll
// 						data-scroll-offset={40}
// 					>
// 						<div className="trm-timeline-mark-light" />
// 						<div className="trm-timeline-mark" />
// 						<div className="trm-a trm-timeline-content">
// 							<div className="trm-card-header">
// 								<div className="trm-left-side">
// 									<h6 className="trm-mb-15">Top Mentor - GSSoC’24</h6>
// 									<div className="trm-text-sm trm-accent-color trm-mb-15">
// 										<i>GirlScript Summer of Code</i>
// 									</div>
// 								</div>
// 							</div>
// 							<div>
// 								Delivered high-impact mentorship that inspired innovation and growth across multiple open-source teams.
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };
// export default History;
