"use client";
import { context } from "@/context/context";
import Layout from "@/layout/Layout";
import Link from "next/link";
import { useContext, useEffect } from "react";

const blogData = {
  title: "Being Productive?",
  category: "Career / Tips",
  type: "article",
  image: "/img/blog/b6.jpg",
  date: "17 DEC",
  time: "16:32",
  author: "Ashish U.",
  content: [
    {
      type: "paragraph",
      text: "Some people hold themselves accountable by logging work on productivity apps, while others turn to blogs and books inspirational productivity quotes. Regardless of how you motivate yourself to get things done in the workplace, now and then we all find ourselves searching for productivity tips to keep us moving forward. And if you don’t think this applies to you, consider this: research suggests that in an eight-hour workday, the average worker is only productive for two hours and 53 minutes. That leaves a lot of room for improvement.",
    },
    {
      type: "paragraph",
      text: "Before you do anything else, take a few moments at the start of each day to organize & declutter your workspace. A clutter-free environment helps you think more clearly & produce better results, said Kristoph Matthews, head of engineering at NewtonX & founder of on-demand storage company Boxbee. By ",
      link: {
        url: "https://www.businessnewsdaily.com/7456-workspace-design-productivity.html",
        text: "cleaning up & organizing your space",
      },
      text_end:
        ", you can greatly increase your productivity & limit the time you spend searching for items.",
    },
    {
      type: "paragraph",
      text: "Color can have a major effect on your mood & productivity throughout the day, said Jenny Gauld, interior designer for office furniture & accessory retailer Turnstone. Blue can impart a calming feeling & help you focus, while red may be great for work requiring accuracy & attention to detail. Plants can also help people focus: A study by the ",
      link: {
        url: "https://journals.ashs.org/horttech/view/journals/horttech/30/1/article-p55.xml",
        text: "American Society for Horticultural Science",
      },
      text_end:
        " found that workers who were exposed to plants in their workspace reported feeling less stressed & more productive.",
    },
    {
      type: "image_row",
      images: ["img/blog/b5.jpg", "img/blog/b4.jpg"],
    },
    {
      type: "paragraph",
      text: "In addition to adding some color & plants to your workspace, decorating your desk or cubicle with a few personal knickknacks can help you feel more relaxed, which can boost your productivity. Gauld suggested adding meaningful career memorabilia, such as diplomas, awards, & other decorative items that help you feel appreciated & will motivate you.",
    },
    {
      type: "paragraph",
      text: "Everyone has at least one task on the to-do list that keeps getting pushed back because the thought of doing it seems awful. That task is actually the one you should complete first, according to Matthews. Instead of waiting until the last minute to finish it, get it off your plate as soon as possible. Your other tasks will seem less daunting by comparison, & you'll stop stressing about that one task all day, making you more productive overall.",
    },
    {
      type: "paragraph",
      text: "People vary in terms of when they are most productive. For example, are you a morning person or a night owl? It’s important to identify which hours of the day you feel most alert & attentive, & then dedicate those hours to your most important tasks. This is especially useful if you work remotely & can determine your schedule.",
    },
    {
      type: "paragraph",
      text: "If you can't create a schedule around your most productive work time, consider organizing your priorities in your current schedule based on which hours of your workday you feel most alert. Your productivity peaks are often in 90 - 120-minute intervals.",
    },
    {
      type: "blockquote",
      text: "Understand how your brain works & when you are most productive. For me, I've gotten rid of lunch meetings to keep my productive time going as long as I can.",
    },
    {
      type: "paragraph",
      text: "Whether it's taking a walk, going to your favorite coffee shop, reading a magazine or visiting with a colleague, taking short breaks that are unrelated to your work can make a huge difference in your performance. Your productivity diminishes the longer you go without a break. Kobel explained that this is why it’s recommended that people don’t work more than eight to 10 hours per day. At a certain point, she said, your body & mind simply cannot produce anymore.",
    },
    {
      type: "paragraph",
      text: "Exercise isn't just good for your body; it can also positively impact your work performance. Physical exercise has been shown to affect mental health & focus, said Sam McIntire, founder of Deskbright, an online learning platform dedicated to helping entrepreneurs & employees. A great way to feel sharper & more productive? Try going for a run in the morning or starting your day with a workout, McIntire suggested. It doesn't hurt to sneak in some exercise on your breaks either.",
    },
    {
      type: "paragraph",
      text: "It's not always easy to keep track of everything you need to do, so start each morning by writing down your goals for the day. When your focus is broken or you find yourself procrastinating, McIntire said, you can use the list to keep you on track, said McIntire. He suggested writing your list down on a Post-it or something that's visible from your desk, then returning to it when you need a reminder of what you should be working on.",
    },
    {
      type: "paragraph",
      text: "Doing more than one thing at a time may seem like the best way to get all of your tasks done, but it can hurt your productivity more than it helps. Multitasking simply doesn’t work, & when you do it, you end up wasting time, Kobel said.",
    },
    {
      type: "paragraph",
      text: "It can be hard to improve your productivity. These ",
      span: {
        text: "easy tips",
      },
      text_end: " can help you be more productive without a herculean effort.",
    },
    {
      type: "list_row",
      lists: [
        [
          "Create a workspace that is clean, comfortable, decorative & free from distractions.",
          "Find a routine that works for you and keeps you focused.",
          "Incorporate some time management techniques that can help you monitor how long you're spending on certain tasks.",
        ],
        [
          "When you take work breaks, use some of them to get outside & enjoy nature.",
          "It can be helpful to take short breaks, move around, switch locations, put on some music, meditate & eat lunch with your co-workers.",
          "Create daily goals and to-do lists to prioritize and delegate your tasks efficiently.",
        ],
      ],
    },
  ],
  similarPublications: [
    {
      image: "img/blog/b2.jpg",
      category: "Lifestyle",
      title: "Create your own beauty blog with",
      date: "17 JULY",
      time: "14:32",
      author: "Ashish U.",
    },
    {
      image: "img/blog/b7.jpg",
      category: "Lifestyle",
      title: "Create your own beauty blog with",
      date: "17 JULY",
      time: "14:32",
      author: "Ashish U.",
    },
  ],
};

const Index = () => {
  const { banner_image_function, page_info_function } = useContext(context);

  useEffect(() => {
    banner_image_function(blogData.image);
    page_info_function(blogData.title, blogData.category, blogData.type);
  }, []);

  return (
    <Layout>
      <div className="row">
        <div className="col-lg-4">
          <div className="trm-card trm-label trm-label-light text-center">
            <i className="far fa-calendar-alt trm-icon" />
            <br />
            {blogData.date}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="trm-card trm-label trm-label-light text-center">
            <i className="far fa-clock trm-icon" />
            <br />
            {blogData.time}
          </div>
        </div>
        <div className="col-lg-4">
          <div className="trm-card trm-label trm-label-light text-center">
            <i className="far fa-user trm-icon" />
            <br />
            {blogData.author}
          </div>
        </div>
      </div>

	  {/* Blog Content */}
      <div className="trm-card trm-publication">
        {blogData.content.map((item, index) => {
          switch (item.type) {
            case "paragraph":
              return (
                <p className="trm-mb-40" key={index}>
                  {item.text}
                  {item.link && (
                    <a href={item.link.url} className="link-effect">
                      {item.link.text}
                    </a>
                  )}
                  {item.text_end}
                </p>
              );
            case "image_row":
              return (
                <div className="row" key={index}>
                  {item.images.map((img, imgIndex) => (
                    <div className="col-lg-6" key={imgIndex}>
                      <a href={img} data-fancybox="gallery">
                        <img src={img} alt="img" className="trm-just-img trm-mb-40" />
                      </a>
                    </div>
                  ))}
                </div>
              );
            case "blockquote":
              return (
                <blockquote className="trm-color-quote trm-mb-40" key={index}>
                  {item.text}
                </blockquote>
              );
            case "list_row":
              return (
                <div className="row" key={index}>
                  {item.lists.map((list, listIndex) => (
                    <div className="col-lg-6" key={listIndex}>
                      <ul className="trm-list trm-mb-40">
                        {list.map((text, textIndex) => (
                          <li key={textIndex}>{text}</li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              );
            default:
              return null;
          }
        })}
        <span className="trm-text-sm"></span>
      </div>
	  {/* Blog Content End */}
	  
      {/* Similar Publications */}
      <div className="row">
        <div className="col-lg-12">
          {/* title */}
          <h5 className="trm-mb-40 trm-title-with-divider">
            Similar Publications <span data-number={2} />
          </h5>
        </div>
        {blogData.similarPublications.map((pub, pubIndex) => (
          <div className="col-lg-6" key={pubIndex}>
            {/* Similar Publications card */}
            <div
              className="trm-blog-card trm-scroll-animation trm-active-el"
              data-scroll
              data-scroll-offset={40}
            >
              <Link legacyBehavior href="/publication">
                <a className="trm-cover-frame trm-anima-link">
                  <img src={pub.image} alt="cover" />
                </a>
              </Link>
              <div className="trm-card-descr">
                <div className="trm-label trm-category trm-mb-20">
                  <a href="#.">{pub.category}</a>
                </div>
                <h5 className="trm-mb-20">
                  <Link legacyBehavior href="/publication">
                    <a className="trm-anima-link">{pub.title}</a>
                  </Link>
                </h5>
                <div className="trm-divider trm-mb-20 trm-mt-20" />
                <ul className="trm-card-data trm-label">
                  <li>{pub.date}</li>
                  <li>{pub.time}</li>
                  <li>{pub.author}</li>
                </ul>
              </div>
            </div>
            {/* Similar Publications card end */}
          </div>
        ))}
      </div>
      {/* Similar Publications End */}


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