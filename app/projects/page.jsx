"use client";
import { React } from "react";
import Image from "next/image";
import NavBar from "../components/NavBar";
import rightArrow from "../../public/assets/icons/right-arrow.png";
// Rock paper scissors project
import rpsMain from "../../public/projectImages/rock-paper-scissors-mockup/rps-main.png";

const page = () => {
  //? List of all your projects
  const projects = [
    {
      title: "Tic Tac Toe",
      subTitle: "Just a fun game of Tic Tac Toe 😃",
      link: "",
      tags: ["Game", "Tailwind"],
      // bg: rpsMain,
    },
  ];

  return (
    <main className="w-screen h-screen bg-primaryBg flex items-start justify-center">
      <div
        className={`${"font-mono w-screen h-fit sm:w-[760px] px-3 mx-7 gap-12 sm:gap-16 flex items-start justify-start flex-col"}`}
      >
        <NavBar />
        {/* Header */}
        <section className="space-y-2 w-full h-fit rounded-[30px] flex flex-col items-start justify-end p-5">
          <div className="w-full flex flex-row items-center justify-between">
            <h1 className="font-medium text-[28px] mx-2.5 text-primaryText">
              My Projects
            </h1>
            <Image width={75} height={75} alt="right" src={rightArrow} />
          </div>
          <div className="w-full pb-3 h-fit overflow-x-auto no-scrollbar overflow-y-hidden gap-8 flex flex-row items-center justify-start">
            {projects.map((item, index) => {
              return (
                <section
                  key={index}
                  className="w-[280px] h-[400px] border  p-5 rounded-[30px] aspect-video  flex flex-col items-start justify-between"
                >
                  <div>
                    <h2 className="">{item.title}</h2>
                    <p>{item.subTitle}</p>
                  </div>
                  <div className="w-full flex flex-row justify-between items-end">
                    <div className="flex flex-row gap-3">
                      {item.tags.map((item, index) => {
                        return (
                          <p key={index} className="flex flex-row items-center">
                            {item}
                          </p>
                        );
                      })}
                    </div>
                    {/* <Image
                      width={60}
                      height={60}
                      alt="right"
                      src={rightArrow}
                      className="cursor-pointer"
                    /> */}
                    <p>Link</p>
                    {/* add link icon */}
                  </div>
                </section>
              );
            })}
          </div>
        </section>
      </div>
    </main>
  );
};

export default page;
