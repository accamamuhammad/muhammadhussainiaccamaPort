"use client";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Posts from "./components/Posts";
import TechStack from "./components/TechStack";

export default function Home() {
  // About Me
  const description = {
    intro: "Hi 👋, my name is ",
    name: "Accama Muhammad ",
    aboutMe:
      "i am a web developer based in Abuja, Nigeria, i am proficient in HTML, CSS, TailwindCSS, firebase and frameworks like React and NextJS, i use these to create aesthetically pleasing and incredibly user-friendly & easy-to-use websites. My superpower is patience, and I am all about making sure your online vision is seen and understood.",
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
      link: "https://charity-ngo-site-d9s2.vercel.app/",
      title: "Charity NGO",
      description:
        "Empowering charities to reach communities, for ever lasting change. 🤝",
      state: "complete",
    },
    {
      link: "https://pinnacle-international-fitness.netlify.app/",
      title: "Pinnacle Fitness",
      description:
        "Created a website to help people start their fitness journey 🏋🏽‍♀️.",
      state: "complete",
    },
    {
      link: "https://countrysearchreactapp.netlify.app/",
      title: "Country Search (API)",
      description:
        "Instantly explore countries with our fun, fast API-powered app! 🌎.",
      state: "complete",
    },
    {
      link: "https://tictactoegame-749yyljqz-acccama-muhammads-projects.vercel.app/",
      title: "Rock Paper Scissors",
      description: "Just a fun game of Tic Tac Toe 😃.",
      state: "complete",
    },
    {
      link: "https://github.com/accamamuhammad",
      title: "Money Allocator",
      description: "earn more by saving like a pro. 💸",
      state: "pending",
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
    { name: "firebase", state: "complete" },
    { name: "Tailwind", state: "complete" },
    { name: "JavaScript", state: "complete" },
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
        <Posts data={posts} />
        <TechStack data={techStack} />
      </div>
    </main>
  );
}
