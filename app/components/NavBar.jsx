import Link from "next/link";
import Image from "next/image";
import { useState, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Logo from "../../public/assets/icons/Logo.png";
import MoonIcon from "../../public/assets/icons/moon-dark.png";
import SunlightIcon from "../../public/assets/icons/sun-icon.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { LinksContext } from "../page";

const NavBar = () => {
  const [toggleTheme, setToggleTheme] = useState(true);
  const [toggleNav, setToggleNav] = useState(false);
  const AllLinks = useContext(LinksContext);

  const handleToggleTheme = () => {
    setToggleTheme(!toggleTheme);
    document.documentElement.classList.toggle("dark-mode");
  };

  const handleToggleNav = () => {
    setToggleNav(!toggleNav);
  };

  const primaryNavStyling =
    "sm:px-3 text-[0.85rem] text-secondaryText hover:text-primaryText sm:border-secondaryText";

  return (
    <nav className="w-full h-fit mt-10 flex items-center justify-between">
      <div className="gap-2.5 flex items-center justify-center flex-row">
        <Image width={45} height={45} alt="Logo" src={Logo} />
        <div className="w-full gap-[2px] flex items-start justify-center flex-col">
          <h1 className="font-bold text-xl  text-primaryText">
            Accama Muhammad
          </h1>
          <ul
            className={`${
              toggleNav ? "block sm:flex" : "hidden sm:flex"
            } ${"sm:gap-0 w-[93%] mr-[2%] sm:p-0 p-5 items-end gap-8 flex-col absolute right-0 top-[125px] shadow-2xl rounded-lg sm:static opacity-[98] bg-navBg sm:bg-primaryBg flex sm:items-start sm:justify-center sm:flex-row"}`}
          >
            <li
              className={`${"sm:pl-3 pl-0 py-[2px] sm:border-r sm:border-dashed"} ${primaryNavStyling}`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`${"py-[2px] sm:border-r sm:border-dashed"} ${primaryNavStyling}`}
            >
              <Link href="#aboutMe">Projects</Link>
            </li>
            <li
              className={`${"py-[2px] sm:border-r sm:border-dashed"} ${primaryNavStyling}`}
            >
              <Link href="#projects">Blog</Link>
            </li>
            <li className={`${"py-[2px]"} ${primaryNavStyling}`}>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="gap-3 flex items-center justify-center">
        <Image
          width={35}
          height={35}
          alt="toggle mode"
          onClick={handleToggleTheme}
          className="cursor-pointer hover:border-secondaryBg hover:border-[1.5px] rounded-md p-[4px]"
          src={toggleTheme ? SunlightIcon : MoonIcon}
        />
        <FontAwesomeIcon
          icon={toggleNav ? faXmark : faBars}
          size="xl"
          onClick={handleToggleNav}
          style={toggleTheme ? { color: "#22272a" } : { color: "#a1a1aa" }}
          className="cursor-pointer sm:hidden block"
        />
      </div>
    </nav>
  );
};

export default NavBar;
