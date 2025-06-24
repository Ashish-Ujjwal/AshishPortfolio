"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import Link from "next/link";
import { useContext, useEffect } from "react";
const Index = () => {
	const { banner_image_function, page_info_function } = useContext(context);
	useEffect(() => {
		page_info_function(
			"Have a question?    <br>Get in Touch    ",
			"contact",
			"contact"
		);
	}, []);
	return (
		<Layout>
			{/* contact */}
			<div className="row">
				<div className="col-lg-6">
					{/* contact card */}
					<div
						className="trm-service-icon-box trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-service-content">
							<div className="trm-icon">
								<img
									src="img/icons/icon-5.svg"
									alt="icon"
									className="trm-black-icon"
								/>
								<img
									src="img/icons/icon-5w.svg"
									alt="icon"
									className="trm-white-icon"
								/>
							</div>
							<h6 className="trm-mb-20">Call</h6>
							<div className="trm-mb-15">
								<span className="trm-label">Work:</span>{" "}
								<span className="trm-text-sm">9973071759</span>
							</div>
							<div className="trm-mb-15">
								<span className="trm-label">X:</span>{" "}
								<span className="trm-text-sm">https://x.com/ASHISHUJJW6676</span>
							</div>
						</div>
					</div>
					{/* contact card end */}
				</div>
				<div className="col-lg-6">
					{/* contact card */}
					<div
						className="trm-service-icon-box trm-scroll-animation trm-active-el"
						data-scroll
						data-scroll-offset={40}
					>
						<div className="trm-service-content">
							<div className="trm-icon">
								<img
									src="img/icons/icon-6.svg"
									alt="icon"
									className="trm-black-icon"
								/>
								<img
									src="img/icons/icon-6w.svg"
									alt="icon"
									className="trm-white-icon"
								/>
							</div>
							<h6 className="trm-mb-20">Write</h6>
							<div className="trm-mb-15">
								<span className="trm-label">Email:</span>{" "}
								<span className="trm-text-sm">
									ashishujjwal422@gmail.com
								</span>
							</div>
							<div>
								<span className="trm-label">GitHub:</span>{" "}
								<span className="trm-text-sm">https://github.com/AshishUjjwal</span>
							</div>
						</div>
					</div>
					{/* contact card end */}
				</div>
			</div>
			{/* contact end */}
			<div className="map">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3443.850047957325!2d85.00789407514853!3d24.757110277996922!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f32b257659d827%3A0xe640203c936eab0f!2sKendui%20Surya%20Mandir!5e1!3m2!1sen!2sin!4v1750742336960!5m2!1sen!2sin"
					style={{ border: 0, width: "100%", height: "100%" }}
					allowFullScreen=""
					loading="lazy"
				/>
			</div>
			{/* contact form */}
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Get in touch <span data-number={2} />
					</h5>
				</div>
				<div className="col-lg-12">
					<div className="trm-contact-card">
						<form
							id="form2"
							action="https://formspree.io/f/xpzobwob"
							method="POST"
						>
							<input name="name" type="text" placeholder="Name" />
							<input name="email" type="email" placeholder="Email" />
							<textarea
								name="text"
								rows={6}
								placeholder="Message"
								defaultValue={""}
							/>
							<div className="trm-form-bottom">
								<button type="submit" className="trm-btn">
									Send <i className="fas fa-arrow-right" />
								</button>
								<div className="trm-text-sm">
									* I promise the confidentiality of your personal information
								</div>
							</div>
						</form>
						<div className="trm-success-banner">
							<img src="img/success.png" alt="success" className="trm-mb-15" />
							<h4 className="trm-mb-15">Success</h4>
							<div className="trm-text trm-mb-20">
								Your message has been sent successfully
							</div>
							<Link legacyBehavior href="/">
								<a className="trm-btn">
									<i className="fas fa-arrow-left" /> Back home
								</a>
							</Link>
						</div>
					</div>
				</div>
			</div>
			{/* contact form end */}
		</Layout>
	);
};
export default Index;
