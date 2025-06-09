"use client";
import Counter from "@/components/Counter";
import History from "@/components/History";
import Portfolio from "@/components/Portfolio";
import Price from "@/components/Price";
import Publications from "@/components/Publications";
import Services from "@/components/Services";
import Skills from "@/components/Skills";
import Story from "@/components/Story";
import Testimonials from "@/components/Testimonials";
import VideoResume from "@/components/VideoResume";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import { useContext, useEffect } from "react";

const Index = () => {
	const { banner_image_function, banner_type_function } = useContext(context);
	useEffect(() => {
		banner_image_function("/img/banner2.png");
		banner_type_function("image");
	}, []);
	return (
		<Layout>
			{/* stats */}
			<Counter />
			{/* stats end */}

			{/* text */}
			<Story />
			{/* text end */}

			{/* VideoResume */}
			{/* <VideoResume /> */}
			{/* VideoResume end*/}

			{/* services */}
			<Services />
			{/* services end */}

			<Portfolio />
			<div
				data-scroll
				data-scroll-repeat
				data-scroll-offset={500}
				id="resume-triger"
			/>
			<History />

			{/* price plans */}
			<Price />
			{/* price plans end */}

			{/* testimonials */}
			<Testimonials />
			<Publications />
		</Layout>
	);
};
export default Index;
