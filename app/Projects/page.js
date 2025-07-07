"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import { useContext, useEffect } from "react";

const convertDropboxLink = (url) => {
  if (!url.includes("dropbox.com")) return url;
  return url.replace("www.dropbox.com", "dl.dropboxusercontent.com").replace("?dl=0", "");
};

const portfolioItems = [
	{
		id: 1,
		title: "Movie Recommendation",
		img: "/img/AshPortfolio/MovieDB.png",
		// img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRefU8VLFzy_RpztsvhVH8eM3FcbGdHuo5Gpg&s",
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

const Index = () => {
	const { banner_image_function, page_info_function } = useContext(context);
	useEffect(() => {
		banner_image_function("/img/banner2.png");
		page_info_function("Recent work<br>performed", "portfolio", "portfolio");
	}, []);
	return (
		<Layout>
			{portfolioItems.map((item) => (
				// <a
				// 	key={item.id}
				// 	data-fancybox="portfolio"
				// 	href={item.img}
				// 	className="trm-portfolio-item trm-scroll-animation"
				// 	data-scroll
				// 	data-scroll-offset={40}
				// 	data-cat="card"
				// >
				// 	<div className="trm-cover-frame">
				// 		<img className="trm-cover" src={item.img} alt="item" />
				// 	</div>
				// 	<div className="trm-item-description">
				// 		<h6>{item.title}</h6>
				// 		<div className="trm-zoom-icon">
				// 			<i className="fas fa-search-plus" />
				// 		</div>
				// 	</div>
				// </a>

				<div key={item.id}>
					{/* portfolio item */}
					<a
						data-fancybox="portfolio"
						// href={item.img}
						href={convertDropboxLink(item.img)}
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
							<div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
								{/* Live Link */}
								<div
									className="trm-zoom-icon"
									title="Live Preview"
									onClick={(e) => {
										e.stopPropagation();
										window.open(item.liveLink, "_blank", "noopener,noreferrer");
									}}
								>
									<i className="fas fa-external-link-alt" />
								</div>

								{/* GitHub Link */}
								<div
									className="trm-zoom-icon"
									title="GitHub Repository"
									onClick={(e) => {
										e.stopPropagation();
										window.open(item.githubLink, "_blank", "noopener,noreferrer");
									}}
								>
									<i className="fab fa-github" />
								</div>
							</div>
						</div>
					</a>
					{/* portfolio item end */}
				</div>
			))}
		</Layout>
	);
};
export default Index;
