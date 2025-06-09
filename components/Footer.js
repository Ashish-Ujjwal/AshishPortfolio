const Footer = () => {
	return (
		<footer
			className="trm-scroll-animation"
			data-scroll=""
			data-scroll-offset={50}
		>
			<div className="trm-label">
				© {new Date().getFullYear()} All Rights Reserved.
			</div>
			<div className="trm-label">
				Developed by:{" "}
				<a href="https://www.linkedin.com/in/ashish-ujjwal-a9bb03228/" target="_blank">
					Ashish Ujjwal
				</a>
			</div>
		</footer>
	);
};
export default Footer;
