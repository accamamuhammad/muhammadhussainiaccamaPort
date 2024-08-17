import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
/** Github */
import DarkGithub from "../../public/assets/icons/GithubDark.svg";
import LightGithub from "../../public/assets/icons/GithubLight.svg";
/** Twitter */
import DarkTwitter from "../../public/assets/icons/TwitterDark.svg";
import LightTwitter from "../../public/assets/icons/TwitterLight.svg";
/** Codepen */
import DarkCodepen from "../../public/assets/icons/CodepenDark.svg";
import LightCodepen from "../../public/assets/icons/CodepenLight.svg";
/** Linkdin */
import DarkLinkdin from "../../public/assets/icons/LinkdenDark.svg";
import LightLinkdin from "../../public/assets/icons/LinkdenLight.svg";
/** Email */
import DarkEmail from "../../public/assets/icons/EnveloperDark.svg";
import LightEmail from "../../public/assets/icons/EnveloperLight.svg";

const AboutMe = () => {
  const [currentTheme, setCurrentTheme] = useState();

  useEffect(() => {
    if (document.documentElement.classList.value === "light-mode") {
      setCurrentTheme(true);
    } else {
      setCurrentTheme(false);
    }
  }, []);

  return (
    <div id="aboutMe">
      <h1 className="font-medium text-2xl text-primaryText">Hey there!</h1>
      <p className="mt-4 text-xs sm:text-sm leading-[1.3rem] sm:leading-[1.55rem] text-primaryText">
        I am <span className="text-secondaryText">Accama Muhammad</span>, a
        front-end web developer from Abuja, Nigeria, I transform design into
        code, using HTML, CSS, Tailwind, , and frameworks like React and NextJS
        to create aesthetically pleasing and incredibly user-friendly &
        easy-to-use websites. I am a dedicated tech enthusiast who enjoys
        working with others and bringing imaginative concepts to life. My
        superpower is patience, and I am all about making sure your online
        vision is seen and understood.
      </p>
      <div className="mt-2.5 gap-4 flex flex-row items-center justify-start">
        <p className="text-primaryText text-xs sm:text-sm leading-[1.55rem]">
          Find me on
        </p>
        <div className="gap-5 flex flex-row items-center justify-center">
          <Link href="https://github/accamamuhamammad" target="blank">
            <Image
              width={14}
              height={14}
              alt="Github"
              src={currentTheme ? DarkGithub : LightGithub}
            />
          </Link>
          <Link href="https://codepen.io/your-work" target="blank">
            <Image
              width={14}
              height={14}
              alt="Codepen"
              src={currentTheme ? DarkCodepen : LightCodepen}
            />
          </Link>
          {/**
          <Link href="" target="blank">
            <Image
              width={14}
              height={14}
              alt="Linkdin"
              src={currentTheme ? DarkLinkdin : LightLinkdin}
            />
          </Link>
          <Link href="" target="blank">
            <Image
              width={14}
              height={14}
              alt="Email"
              src={currentTheme ? DarkEmail : LightEmail}
            />
          </Link>
                    */}
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
