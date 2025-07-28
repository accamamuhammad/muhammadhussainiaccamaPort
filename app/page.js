"use client";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Posts from "./components/Posts";
import TechStack from "./components/TechStack";

export default function Home() {
  // About Me
  const description = {
    intro: "Hi 👋, my name is ",
    name: "Accama Muhammad ",
    aboutMe:
      "I’m Accama, a web developer and entrepreneur passionate about creating modern, user-friendly websites that help businesses grow. Beyond web development, I’m exploring cybersecurity, blockchain, and AI, while continuously learning and innovating. 🚀 My goal is to leverage technology to simplify lives and drive growth.",
    links: {
      Github: "https://github.com/accamamuhammad",
      Codepen: "https://github.com/accamamuhammad",
      Blog: "https://github.com/accamamuhammad",
      Dribble: "https://github.com/accamamuhammad",
      Twitter: "https://github.com/accamamuhammad",
      Instagram: "https://github.com/accamamuhammad",
    },
  };

  // My Projects
  const projects = [
    {
      link: "https://pinnacle-international-fitness.netlify.app/",
      title: "Pinnacle Fitness",
      description:
        "Created a website to help people start their fitness journey 🏋🏽‍♀️.",
      state: "complete",
    },
    {
      link: "https://charity-ngo-site-d9s2.vercel.app/",
      title: "Charity NGO",
      description:
        "Empowering charities to reach communities, for ever lasting change. 🤝",
      state: "complete",
    },
    {
      link: "https://github.com/accamamuhammad",
      title: "Rock Paper Scissors",
      description: "Just a fun game of Rock Paper Scissors 😃.",
      state: "complete",
    },
    {
      link: "https://dua-tracker.vercel.app/",
      title: "Dua Tracker",
      description: "Stay Connected to Your Duas, Strengthen Your Faith. 📿",
      state: "complete",
    },
    {
      link: "https://github.com/accamamuhammad",
      title: "Tic Tac Toe",
      description: "Just a fun game of Tic Tac Toe 😃.",
      state: "complete",
    },

    {
      link: "https://github.com/accamamuhammad",
      title: "Wallet Manager",
      description:
        "A place to store all your crypto wallets addresses, safely. 🔐",
      state: "pending",
    },
  ];

  // Work Experience
  const experience = [
    {
      workPlace: "Kennie Technologies",
      date: "February 2025 - May 2025",
      position: "Intern",
    },
    {
      workPlace: "Protus Tech",
      date: "June 2025 - Present",
      position: "Founder",
    },
  ];

  // My blog posts
  const posts = [
    {
      date: "30 07 2024",
      title: "7 Reasons Why TailwindCSS Outshines Traditional CSS",
      link: "https://accamamuhammad.hashnode.dev/7-reasons-why-tailwindcss-outshines-traditional-css",
    },
    {
      date: "17 08 2024",
      title: "5 Projects That Will Get You Hired as a Developer",
      link: "https://accamamuhammad.hashnode.dev/5-projects-that-will-get-you-hired-as-a-developer?",
    },
  ];

  // My Tech Stack
  const techStack = [
    { name: "HTML", state: "complete" },
    { name: "CSS", state: "complete" },
    { name: "React", state: "complete" },
    { name: "NextJS", state: "complete" },
    { name: "Tailwind", state: "complete" },
    { name: "JavaScript", state: "complete" },
    { name: "Typescript", state: "complete" },
    { name: "firebase", state: "complete" },
    { name: "Git, Github", state: "complete" },
    { name: "MySQL", state: "progress" },
  ];

  return (
    <main className="w-screen h-fit bg-primaryBg flex items-center justify-center">
      <div
        className={`${"font-mono w-screen h-fit sm:w-[760px] mx-7 gap-12 sm:gap-16 flex items-center justify-start flex-col"}`}
      >
        <NavBar />
        <AboutMe data={description} />
        <Projects data={projects} />
        <WorkExperience data={experience} />
        <Posts data={posts} />
        <TechStack data={techStack} />
      </div>
    </main>
  );
}
