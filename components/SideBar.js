import { typing } from "@/utility/typing";
import { useEffect } from "react";

const SideBar = () => {
	useEffect(() => {
		typing();
	}, []);

	return (
		<div className="col-lg-4">
			{/* main card */}
			<div className="trm-main-card-frame trm-sidebar">
				<div
					className="trm-main-card"
					data-scroll=""
					data-scroll-repeat=""
					data-scroll-sticky=""
					data-scroll-target="#content"
					data-scroll-offset={60}
				>
					{/* card header */}
					<div className="trm-mc-header">
						<div className="trm-avatar-frame trm-mb-20">
							<img className="trm-avatar" src="/img/AshishUjjwal.png" alt="Avatar" />
							<div className="trm-dot" />
						</div>
						<h5 className="trm-name trm-mb-10">Ashish Ujjwal </h5>
						<div className="trm-label">
							<span className="trm-typed-text">
								{/* Words for rotation: js/main.js line 34 */}
							</span>
						</div>
					</div>
					{/* card header end */}
					<div className="trm-divider trm-mb-40 trm-mt-20" />
					{/* sidebar social */}
					<div className="trm-social">

						<a href="https://www.linkedin.com/in/ashish-ujjwal-a9bb03228/" target="_blank" rel="noopener noreferrer">
							<img
								src="https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png"
								alt="LinkedIn"
								width="20"
								height="20"
								style={{ verticalAlign: 'middle' }}
							/>
						</a>

						<a href="https://github.com/AshishUjjwal" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
							<img
								src="https://img.icons8.com/?size=100&id=SzgQDfObXUbA&format=png&color=000000"
								alt="GitHub"
								width="20"
								height="20"
								style={{ verticalAlign: 'middle' }}
							/>
						</a>
						
						<a href="https://x.com/ASHISHUJJW6676" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
							<img
								src="https://img.icons8.com/?size=100&id=bG29Ckcdp6YP&format=png&color=000000"
								alt="Twitter"
								width="20"
								height="20"
								style={{ verticalAlign: 'middle' }}
							/>
						</a>

						
						<a href="https://www.geeksforgeeks.org/user/ashishfrommohania/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
							<img
								src="https://img.icons8.com/?size=100&id=AbQBhN9v62Ob&format=png&color=000000"
								alt="GeeksforGeeks"
								width="20"
								height="20"
								style={{ verticalAlign: 'middle' }}
							/>
						</a>

						<a href="https://leetcode.com/u/Ashish_Ujjwal/" target="_blank" rel="noopener noreferrer" style={{ marginRight: '10px' }}>
							<img
								src="https://img.icons8.com/?size=100&id=wDGo581Ea5Nf&format=png&color=000000"
								alt="LeetCode"
								width="20"
								height="20"
								style={{ verticalAlign: 'middle' }}
							/>
						</a>


						{/* <a
							href="https://www.linkedin.com/in/ashish-ujjwal-a9bb03228/"
							target="_blank"
						>
							<i className="fab fa-linkedin-in" />
						</a> */}
						{/* <a href="https://github.com/AshishUjjwal" target="_blank">
							<i className="fab fa-github" />
						</a> */}
						{/* <a href="https://medium.com/@ashishfrommohania" target="_blank">
							<i className="fab fa-medium" />
						</a> */}
						{/* <a href="https://dribbble.com/" target="_blank">
							<i className="fab fa-dribbble" />
						</a> */}
						{/* <a href="https://x.com/ASHISHUJJW6676" target="_blank">
							<i className="fab fa-twitter" />
						</a>
						<a href="https://leetcode.com/u/Ashish_Ujjwal/" target="_blank">
							<i className="fas fa-globe"></i>
						</a>
						<a href="https://www.geeksforgeeks.org/user/ashishfrommohania/" target="_blank">
							<i className="fas fa-globe"></i>
						</a> */}
					</div>

					{/* sidebar social end */}
					<div className="trm-divider trm-mb-20 trm-mt-20" />
					{/* info */}
					<ul className="trm-table trm-mb-20">
						{/* country */}
						<li>
							<div className="trm-label">Residence:</div>
							<div className="trm-label trm-label-light">India</div>
						</li>
						{/* city */}
						<li>
							<div className="trm-label">City:</div>
							<div className="trm-label trm-label-light">Gaya, Bihar</div>
						</li>
						{/* age */}
						<li>
							<div className="trm-label">Age:</div>
							<div className="trm-label trm-label-light">21</div>
						</li>
					</ul>
					{/* info end */}
					<div className="trm-divider trm-mb-20 trm-mt-20" />
					{/* action button */}
					<div className="text-center">
						<a data-fancybox="" href="#trm-order" className="trm-btn">
							Contact me <i className="far fa-envelope" />
						</a>
					</div>
					{/* action button end */}
				</div>
			</div>
			{/* main card end */}
		</div>
	);
};
export default SideBar;
