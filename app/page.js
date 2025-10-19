"use client";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Posts from "./components/Posts";
import TechStack from "./components/TechStack";

export default function Home() {
  // About Me
  const description = {
    intro: "Hi 👋, my name is ",
    name: "Accama Muhammad ",
    aboutMe:
      "Hey there 👋, I’m Muhammad, part code wrangler, part idea launcher. I bring ideas to life on the web, building sites that feel alive, tell stories, and actually get things done. When I’m not buried in React components or chasing down a stubborn bug, I’m exploring the worlds of blockchain and AI always tinkering, experimenting, and seeing what’s possible. I’m here to build cool stuff, learn endlessly, and push my creativity further. 🚀",

    links: {
      Github: "https://github.com/accamamuhammad",
      Blog: "https://accamamuhammad.hashnode.dev/",
      Dribble: "https://dribbble.com/accamamuhammad17",
      // Twitter: "https://github.com/accamamuhammad",
      // Instagram: "https://github.com/accamamuhammad",
      // Codepen: "https://github.com/accamamuhammad",
    },
  };

  // My Projects
  const projects = [
    {
      link: "https://locky-link.vercel.app/",
      title: "Locky-link",
      description:
        "Locky-Link is a minimalistic web application that allows users to send messages securely through unique, password-protected links. 🔐",
      state: "complete",
    },
    {
      link: "https://upreach-template-website.vercel.app/",
      title: "Business Consultant",
      description:
        "A professionally built website designed for business coaches & consultants, that converts leads into clients 💼",
      state: "complete",
    },
    {
      link: "https://charity-ngo-site-d9s2.vercel.app/",
      title: "Charity NGO",
      description:
        "A landing page for a nonprofit organization created to enable the organization to reach communities for long-lasting change. 🤝",
      state: "complete",
    },
    {
      link: "https://pinnacle-international-fitness.netlify.app/",
      title: "Pinnacle Fitness",
      description:
        "A website to help people start their fitness journey, and tae  🏋🏽‍♀️. It offers guidance, motivation, and tools to build lasting healthy habits.",
      state: "complete",
    },
    {
      link: "https://rock-paper-scissors-game-iota-nine.vercel.app/",
      title: "Rock Paper Scissors",
      description:
        "Just a harmless game of Rock, Paper, Scissors ✌️… or is it? Challenge yourself and see if you can outsmart the computer’s next move.",
      state: "complete",
    },
    {
      link: "https://dua-tracker.vercel.app/",
      title: "Dua Tracker",
      description:
        "Stay Connected to Your Duas, Strengthen Your Connection with Allah. 📿 Track, organize, and reflect on your daily prayers effortlessly.",
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
      workPlace: "Protus Web",
      date: "August 2025 - Present",
      position: "Founder & CTO",
    },
  ];

  // Education
  const education = [
    {
      place: "Harvard University",
      date: "October 2025",
      title: "HarvardX: CS50's Web Programming with Python and JavaScript",
    },
    {
      place: "Bro Code",
      date: "May 2025",
      title: "React Fundamentals: Mastering Hooks and Dynamic Rendering",
    },
    {
      place: "FreeCodeCamp",
      date: "September 2024",
      title: "Front-End Web Development: HTML, CSS, JavaScript & TailwindCSS",
    },
  ];

  // My blog posts
  const posts = [
    {
      date: "04 09 2025",
      title: "7 Tailwind CSS Features You're Not Using But Should",
      link: "https://accamamuhammad.hashnode.dev/7-tailwind-css-features-youre-not-using-but-should",
    },
    {
      date: "30 07 2024",
      title: "7 Reasons Why TailwindCSS Outshines Traditional CSS",
      link: "https://accamamuhammad.hashnode.dev/7-reasons-why-tailwindcss-outshines-traditional-css",
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
    { name: "Firebase", state: "complete" },
    { name: "Git, Github", state: "complete" },
    { name: "Vercel", state: "complete" },
    { name: "NodeJS", state: "complete" },
    { name: "ExpressJS", state: "progress" },
    { name: "MySQL", state: "progress" },
    { name: "MongoDB", state: "progress" },
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
        <Education data={education} />
        <Posts data={posts} />
        <TechStack data={techStack} />
      </div>
    </main>
  );
}
