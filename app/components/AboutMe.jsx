import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
// Github
import DarkGithub from "../../public/assets/icons/GithubDark.svg";
import LightGithub from "../../public/assets/icons/GithubLight.svg";
// Email
import DarkEmail from "../../public/assets/icons/EnveloperDark.svg";
import LightEmail from "../../public/assets/icons/EnveloperLight.svg";
// Dribble
import DribbleIcon from "../../public/assets/icons/dribbble-logo.png";
// Blog
import BlogIcon from "../../public/assets/icons/pencil.png";
//
/** Twitter */
// import DarkTwitter from "../../public/assets/icons/TwitterDark.svg";
// import LightTwitter from "../../public/assets/icons/TwitterLight.svg";
/** Codepen */
// import DarkCodepen from "../../public/assets/icons/CodepenDark.svg";
// import LightCodepen from "../../public/assets/icons/CodepenLight.svg";

const AboutMe = (props) => {
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
      <h1 className="text-2xl text-primaryText font-semibold">Hey there!</h1>
      <p className="mt-4 text-xs text-justify sm:text-sm leading-[1.35rem] sm:leading-[1.6rem] text-primaryText">
        {props.data.intro}
        <span className="text-secondaryText">{props.data.name}</span>
        {props.data.aboutMe}
      </p>
      <div className="mt-3 gap-4 flex flex-row items-center justify-start">
        <p className="text-secondaryText font-medium text-xs sm:text-sm leading-[1.55rem]">
          Find me on
        </p>
        <div className="gap-5 flex flex-row items-center justify-center">
          <Link href="mailto:protusweb@gmail.com">
            <Image
              width={14}
              height={14}
              alt="Email Icon"
              src={currentTheme ? DarkEmail : LightEmail}
            />
          </Link>
          <Link href={props.data.links.Github} target="blank">
            <Image
              width={14}
              height={14}
              alt="Github Icon"
              src={currentTheme ? DarkGithub : LightGithub}
            />
          </Link>
          <Link href={props.data.links.Dribble} target="blank">
            <Image
              width={14}
              height={14}
              alt="dribble Icon"
              src={DribbleIcon}
            />
          </Link>
          <Link href={props.data.links.Blog} target="blank">
            <Image width={14} height={14} alt="Blog Icon" src={BlogIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
