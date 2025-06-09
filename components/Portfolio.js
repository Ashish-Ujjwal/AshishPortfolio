"use client";

const portfolioItems = [
	{
		id: 1,
		title: "Movie Recommendation",
		img: "/img/AshPortfolio/MovieDB.png",
		liveLink: "https://recommendation-engine-movie-web.vercel.app",
		githubLink: "https://github.com/AshishUjjwal/Recommendation_Engine_Movie_Web"
	},
	{
		id: 2, img: "/img/AshPortfolio/Chatapp.png",
		title: "Chat App",
		liveLink: "https://github.com/Ashish-Ujjwal/Social-Trends",
		githubLink: "https://github.com/Ashish-Ujjwal/Social-Trends"
	},
	{
		id: 3, img: "/img/AshPortfolio/FaceRecogn.png",
		title: "FaceRecognition",
		liveLink: "https://your-live-site.com",
		githubLink: "https://github.com/yourusername/repo"
	},
	{
		id: 4, img: "/img/AshPortfolio/HealthPlus.png",
		title: "Health Plus",
		liveLink: "https://ashishujjwal.github.io/Health-Plus/",
		githubLink: "https://github.com/AshishUjjwal/Health-Plus"
	},
	{
		id: 5, img: "/img/AshPortfolio/ExpenseTracker.jpg",
		title: "Expense Tracker",
		liveLink: "https://github.com/AshishUjjwal/Expense_Tracker",
		githubLink: "https://github.com/AshishUjjwal/Expense_Tracker"
	},
	{
		id: 6, img: "/img/AshPortfolio/SocialMedia.jpg",
		title: "Social Trends",
		liveLink: "https://github.com/Ashish-Ujjwal/Social-Trends",
		githubLink: "https://github.com/Ashish-Ujjwal/Social-Trends"
	},
	{
		id: 7, img: "/img/AshPortfolio/MLSAAIMT.png",
		title: "Microsoft LSA AIMT",
		liveLink: "https://microsoft-lsa-aimt.vercel.app",
		githubLink: "https://github.com/AshishUjjwal/Microsoft-LSA-AIMT"
	},
	{
		id: 8, img: "/img/AshPortfolio/DigitalAssects.png",
		title: "Digital MarketPlace",
		liveLink: "https://digital-assects-market-place.vercel.app",
		githubLink: "https://github.com/Ashish-Ujjwal/Digital-Assects-MarketPlace"
	},
];

const Portfolio = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				{/* title */}
				<h5 className="trm-mb-40 trm-title-with-divider">
					Portfolio <span data-number={4} />
				</h5>
			</div>

			{portfolioItems.map((item) => (
				// <div className="col-lg-6" key={item.id}>
				// 	{/* portfolio item */}
				// 	<a
				// 		data-fancybox="portfolio"
				// 		href={item.img}
				// 		className="trm-portfolio-item trm-scroll-animation"
				// 		data-scroll
				// 		data-scroll-offset={40}
				// 		data-cat="icon"
				// 	>
				// 		<div className="trm-cover-frame">
				// 			<img className="trm-cover" src={item.img} alt="item" />
				// 		</div>
				// 		<div className="trm-item-description">
				// 			<h6>{item.title}</h6>
				// 			{/* Live Link */}
				// 			<div
				// 				href="https://your-live-site-link.com"
				// 				target="_blank"
				// 				rel="noopener noreferrer"
				// 				className="trm-zoom-icon"
				// 				title="Live Preview"
				// 			>
				// 				<i className="fas fa-external-link-alt" />
				// 			</div>
				// 			<div className="trm-zoom-icon">
				// 				<i className="fas fa-search-plus" />
				// 			</div>
				// 		</div>
				// 	</a>
				// 	{/* portfolio item end */}
				// </div>
				<div className="col-lg-6" key={item.id}>
					{/* portfolio item */}
					<a
						data-fancybox="portfolio"
						href={item.img}
						className="trm-portfolio-item trm-scroll-animation"
						data-scroll
						data-scroll-offset={40}
						data-cat="icon"
					>
						<div className="trm-cover-frame">
							<img className="trm-cover" src={item.img} alt="item" />
						</div>
						<div className="trm-item-description">
							<h6>{item.title}</h6>

							{/* Live Link as div with onClick */}
							<div className="trm-icon-actions" style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
								<div
									className="trm-zoom-icon"
									title="Live Preview"
									onClick={(e) => {
										e.stopPropagation(); // prevent triggering fancybox image open
										window.open(item.liveLink, "_blank", "noopener,noreferrer");
									}}
									style={{ cursor: "pointer" }}
								>
									<i className="fas fa-external-link-alt" />
								</div>

								{/* Zoom Icon (image open) */}
								<div
									className="trm-zoom-icon"
									title="Live Preview"
									onClick={(e) => {
										e.stopPropagation(); // prevent triggering fancybox image open
										window.open(item.githubLink, "_blank", "noopener,noreferrer");
									}}
									style={{ cursor: "pointer" }}
								>
									<i className="fab fa-github" />
								</div>
							</div>
						</div>
					</a>
					{/* portfolio item end */}
				</div>



			))}
		</div>
	);
};
export default Portfolio;
