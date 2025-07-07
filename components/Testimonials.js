import { sliderProps } from "@/utility/sliderProps";
import { Swiper, SwiperSlide } from "swiper/react";

const testimonialsData = [
	{
		// image: "/img/testimonials/3.jpg",
		// image: "https://100k-faces.glitch.me/random-image",
		image: "https://randomuser.me/api/portraits/men/6.jpg",
		name: "Abhishek Prajapati",
		role: "Tech Support",
		message:
			"Ashish is an outstanding web developer with strong expertise in JavaScript, React, Express, MongoDB, and SQL. He has a remarkable ability to craft scalable web applications using the MERN stack. Beyond his technical skills, Ashish excels as a competitive coder, solving problems quickly and effectively. His excellent communication and team coordination skills ensure that he thrives in collaborative environments. He’s a dedicated professional who consistently delivers high-quality results.",
	},
	{
		// image: "/img/testimonials/2.jpg",
		image: "https://randomuser.me/api/portraits/men/6.jpg",
		name: "Jitesh Kumar",
		role: "Tech Lead",
		message:
			"I had the privilege of working with Ashish Ujjwal on a full-stack project where he led the backend development. From day one, Ashish impressed everyone with his deep understanding of backend architecture, API design, and database management. He writes clean, scalable code and is always proactive in implementing best practices for security and performance. What stood out most was Ashish's ability to collaborate — whether it was helping teammates debug an issue, reviewing PRs with thoughtful suggestions, or clearly explaining technical concepts. His calm demeanor, dedication, and mentorship mindset made a huge impact on the entire team.",
	},
];


/**
 * Renders the Testimonials component.
 *
 * @return {JSX.Element} The Testimonials component
 */
const Testimonials = () => {
	return (
		<div className="row">
			<div className="col-lg-12">
				{/* title */}
				<h5 className="trm-mb-40 trm-title-with-divider">
					Testimonials <span data-number={7} />
				</h5>

				{/* testimonials slider */}
				<Swiper
					{...sliderProps.testimonials}
					className="swiper-container trm-testimonials-slider trm-scroll-animation"
					data-scroll=""
					data-scroll-offset={40}
				>
					{testimonialsData.map((t, idx) => (
						<SwiperSlide key={idx} className="swiper-slide">
							<div
								className="trm-testimonial-card"
								data-swiper-parallax=""
								data-swiper-parallax-scale=".8"
								data-swiper-parallax-opacity={0}
								data-swiper-parallax-duration={800}
							>
								<div className="trm-testimonial-author">
									<img src={t.image} alt={t.name} />
									<h6 className="trm-mb-15">{t.name}</h6>
									<div className="trm-text-sm trm-accent-color">
										<i>{t.role}</i>
									</div>
								</div>
								<div className="trm-testimonial-text">
									<p>{t.message}</p>
								</div>
							</div>
						</SwiperSlide>
					))}

					<div className="trm-slider-navigation">
						<div className="trm-testimonials-slider-prev trm-btn trm-btn-circle">
							<i className="fas fa-arrow-left" />
						</div>
						<div className="trm-testimonials-slider-next trm-btn trm-btn-circle">
							<i className="fas fa-arrow-right" />
						</div>
					</div>
				</Swiper>

				{/* testimonials slider end */}
			</div>
		</div>
	);
};
export default Testimonials;
