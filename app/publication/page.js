"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import Link from "next/link";
import { useContext, useEffect } from "react";

const Index = () => {
	const { banner_image_function, page_info_function } = useContext(context);
	useEffect(() => {
		banner_image_function("/img/blog/b6.jpg");
		page_info_function("Being Productive?", "Career / Tips", "article");
	}, []);

	return (
		<Layout>
			<div className="row">
				<div className="col-lg-4">
					<div className="trm-card trm-label trm-label-light text-center">
						<i className="far fa-calendar-alt trm-icon" />
						<br />
						17 DEC
					</div>
				</div>
				<div className="col-lg-4">
					<div className="trm-card trm-label trm-label-light text-center">
						<i className="far fa-clock trm-icon" />
						<br />
						16:32
					</div>
				</div>
				<div className="col-lg-4">
					<div className="trm-card trm-label trm-label-light text-center">
						<i className="far fa-user trm-icon" />
						<br />
						Ashish U.
					</div>
				</div>
			</div>
			<div className="trm-card trm-publication">
				<p className="trm-text-lg trm-contrast trm-mb-40">
					Some people hold themselves accountable by logging work on
					productivity apps, while others turn to blogs and books inspirational
					productivity quotes. Regardless of how you motivate yourself to get
					things done in the workplace, now and then we all find ourselves
					searching for productivity tips to keep us moving forward. And if you
					don’t think this applies to you, consider this: research suggests that
					in an eight-hour workday, the average worker is only productive for
					two hours and 53 minutes. That leaves a lot of room for improvement.
				</p>
				<p className="trm-mb-40">
					Before you do anything else, take a few moments at the start of each
					day to organize & declutter your workspace. A clutter-free environment
					helps you think more clearly & produce better results, said Kristoph
					Matthews, head of engineering at NewtonX & founder of on-demand
					storage company Boxbee. By{" "}
					<a
						href="https://www.businessnewsdaily.com/7456-workspace-design-productivity.html"
						className="link-effect"
					>
						cleaning up & organizing your space
					</a>
					, you can greatly increase your productivity & limit the time you
					spend searching for items.
				</p>
				<p className="trm-mb-40">
					Color can have a major effect on your mood & productivity throughout
					the day, said Jenny Gauld, interior designer for office furniture &
					accessory retailer Turnstone. Blue can impart a calming feeling & help
					you focus, while red may be great for work requiring accuracy &
					attention to detail. Plants can also help people focus: A study by the{" "}
					<a
						href="https://journals.ashs.org/horttech/view/journals/horttech/30/1/article-p55.xml"
						className="link-effect"
					>
						American Society for Horticultural Science
					</a>{" "}
					found that workers who were exposed to plants in their workspace
					reported feeling less stressed & more productive.
				</p>
				<div className="row">
					<div className="col-lg-6">
						<a href="img/blog/b5.jpg" data-fancybox="gallery">
							<img
								src="img/blog/b5.jpg"
								alt="img"
								className="trm-just-img trm-mb-40"
							/>
						</a>
					</div>
					<div className="col-lg-6">
						<a href="img/blog/b4.jpg" data-fancybox="gallery">
							<img
								src="img/blog/b4.jpg"
								alt="img"
								className="trm-just-img trm-mb-40"
							/>
						</a>
					</div>
				</div>
				<p className="trm-mb-40">
					In addition to adding some color & plants to your workspace,
					decorating your desk or cubicle with a few personal knickknacks can
					help you feel more relaxed, which can boost your productivity. Gauld
					suggested adding meaningful career memorabilia, such as diplomas,
					awards, & other decorative items that help you feel appreciated & will
					motivate you.
				</p>
				<p className="trm-mb-40">
					Everyone has at least one task on the to-do list that keeps getting
					pushed back because the thought of doing it seems awful. That task is
					actually the one you should complete first, according to Matthews.
					Instead of waiting until the last minute to finish it, get it off your
					plate as soon as possible. Your other tasks will seem less daunting by
					comparison, & you&apos;ll stop stressing about that one task all day,
					making you more productive overall.
				</p>
				<p className="trm-mb-40">
					People vary in terms of when they are most productive. For example,
					are you a morning person or a night owl? It’s important to identify
					which hours of the day you feel most alert & attentive, & then
					dedicate those hours to your most important tasks. This is especially
					useful if you work remotely & can determine your schedule.
				</p>
				<p className="trm-mb-40">
					If you can&apos;t create a schedule around your most productive work
					time, consider organizing your priorities in your current schedule
					based on which hours of your workday you feel most alert. Your
					productivity peaks are often in 90 - 120-minute intervals.
				</p>
				<blockquote className="trm-color-quote trm-mb-40">
					Understand how your brain works & when you are most productive. For
					me, I've gotten rid of lunch meetings to keep my productive time going
					as long as I can.
				</blockquote>
				<p className="trm-mb-40">
					Whether it&apos;s taking a walk, going to your favorite coffee shop,
					reading a magazine or visiting with a colleague, taking short breaks
					that are unrelated to your work can make a huge difference in your
					performance. Your productivity diminishes the longer you go without a
					break. Kobel explained that this is why it’s recommended that people
					don’t work more than eight to 10 hours per day. At a certain point,
					she said, your body & mind simply cannot produce anymore.
				</p>
				<p className="trm-mb-40">
					Exercise isn&apos;t just good for your body; it can also positively
					impact your work performance. Physical exercise has been shown to
					affect mental health & focus, said Sam McIntire, founder of
					Deskbright, an online learning platform dedicated to helping
					entrepreneurs & employees. A great way to feel sharper & more
					productive? Try going for a run in the morning or starting your day
					with a workout, McIntire suggested. It doesn&apos;t hurt to sneak in
					some exercise on your breaks either.
				</p>
				<p className="trm-mb-40">
					It&apos;s not always easy to keep track of everything you need to do,
					so start each morning by writing down your goals for the day. When
					your focus is broken or you find yourself procrastinating, McIntire
					said, you can use the list to keep you on track, said McIntire. He
					suggested writing your list down on a Post-it or something that&apos;s
					visible from your desk, then returning to it when you need a reminder
					of what you should be working on.
				</p>
				<p className="trm-mb-40">
					Doing more than one thing at a time may seem like the best way to get
					all of your tasks done, but it can hurt your productivity more than it
					helps. Multitasking simply doesn’t work, & when you do it, you end up
					wasting time, Kobel said.
				</p>
				<p className="trm-mb-40">
					It can be hard to improve your productivity. These{" "}
					<span className="span">easy tips</span> can help you be more
					productive without a herculean effort.
				</p>
				<div className="row">
					<div className="col-lg-6">
						<ul className="trm-list trm-mb-40">
							<li>
								Create a workspace that is clean, comfortable, decorative & free
								from distractions.
							</li>
							<li>Find a routine that works for you and keeps you focused.</li>

							<li>
								Incorporate some time management techniques that can help you
								monitor how long you&apos;re spending on certain tasks.
							</li>
						</ul>
					</div>
					<div className="col-lg-6">
						<ul className="trm-list trm-mb-40">
							<li>
								When you take work breaks, use some of them to get outside &
								enjoy nature.
							</li>
							<li>
								It can be helpful to take short breaks, move around, switch
								locations, put on some music, meditate & eat lunch with your
								co-workers.
							</li>
							<li>
								Create daily goals and to-do lists to prioritize and delegate
								your tasks efficiently.
							</li>
						</ul>
					</div>
				</div>

				<span className="trm-text-sm"></span>
			</div>
			{/* blog */}
			<div className="row">
				<div className="col-lg-12">
					{/* title */}
					<h5 className="trm-mb-40 trm-title-with-divider">
						Similar Publications <span data-number={2} />
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
								<img src="img/blog/b2.jpg" alt="cover" />
							</a>
						</Link>
						<div className="trm-card-descr">
							<div className="trm-label trm-category trm-mb-20">
								<a href="#.">Lifestyle</a>
							</div>
							<h5 className="trm-mb-20">
								<Link legacyBehavior href="/publication">
									<a className="trm-anima-link">
										Create your own beauty blog with
									</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 JULY</li>
								<li>14:32</li>
								<li>Ashish U.</li>
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
										Create your own beauty blog with
									</a>
								</Link>
							</h5>
							<div className="trm-divider trm-mb-20 trm-mt-20" />
							<ul className="trm-card-data trm-label">
								<li>17 JULY</li>
								<li>14:32</li>
								<li>Ashish U.</li>
							</ul>
						</div>
					</div>
					{/* blog card end */}
				</div>
			</div>
			{/* blog end */}
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
						<form>
							<input type="email" placeholder="Email" />
							<button className="trm-btn" type="submit">
								<i className="fas fa-paper-plane" />
							</button>
						</form>
					</div>
				</div>
			</div>
			{/* subscribe end */}
		</Layout>
	);
};
export default Index;
