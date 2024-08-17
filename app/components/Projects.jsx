import Link from "next/link";

const Projects = () => {
  const proectsStyling =
    "cursor-pointer underline hover:decoration-secondaryText hover:decoration-2 underline-offset-4";

  return (
    <div className="w-full" id="projects">
      <h1 className="text-xl mb-4 text-primaryText">Projects</h1>
      <ul className="gap-5 text-xs sm:text-sm flex flex-col items-start justify-start">
        {/* Projects List */}
        <li className="text-primaryText leading-5">
          <Link
            href="https://pinnacle-international-fitness.netlify.app/"
            target="_blank"
            className={proectsStyling}
          >
            Pinnacle Fitness
          </Link>{" "}
          Created a we bsite to help people start their fitness journey 🏋🏽‍♀️.
        </li>
        <li className="text-primaryText leading-5">
          <Link
            href="https://countrysearchreactapp.netlify.app/"
            target="_blank"
            className={proectsStyling}
          >
            Country Search (API)
          </Link>{" "}
          Instantly explore countries with our fun, fast API-powered app! 🌎.
        </li>
        <li className="text-primaryText leading-5">
          <Link
            href="https://tictactoegame-749yyljqz-acccama-muhammads-projects.vercel.app/"
            target="_blank"
            className={proectsStyling}
          >
            Rock Paper Scissors
          </Link>{" "}
          Just a fun game of Tic Tac Toe 😃.
        </li>
        <li className="text-primaryText leading-5">
          <Link href="" className={proectsStyling}>
            Student Productivity App (saas)
          </Link>{" "}
          launching soon 🤫.
        </li>
      </ul>
    </div>
  );
};

export default Projects;
