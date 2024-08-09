"use client";
import { createContext, useState } from "react";
import NavBar from "./components/NavBar";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Posts from "./components/Posts";
import TechStack from "./components/TechStack";

export const LinksContext = createContext();

export default function Home() {
  const [links, setLinks] = useState({
    Github: "https://github.com/accamamuhammad",
    CodePen: "https://github.com/accamamuhammad",
    Blog: "https://github.com/accamamuhammad",
    Dribble: "https://github.com/accamamuhammad",
    Twitter: "https://github.com/accamamuhammad",
    Instagram: "https://github.com/accamamuhammad",
  });

  return (
    <main className="w-screen h-fit bg-primaryBg flex items-center justify-center">
      <div
        className={`${"font-mono w-screen h-fit sm:w-[760px] mx-7 gap-12 sm:gap-16 flex items-center justify-start flex-col"}`}
      >
        <LinksContext.Provider value={links}>
          <NavBar />
          <AboutMe />
          <Projects />
          <Posts />
          <TechStack />
        </LinksContext.Provider>
      </div>
    </main>
  );
}
