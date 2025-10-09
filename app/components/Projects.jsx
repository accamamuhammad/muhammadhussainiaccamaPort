import Link from "next/link";

const Projects = (props) => {
  const projectsStyling =
    "cursor-pointer underline hover:decoration-secondaryText hover:decoration-2 underline-offset-4";

  const projectsStylingPending =
    "text-gray-400 cursor-pointer underline hover:decoration-secondaryText hover:decoration-2 underline-offset-4";

  return (
    <div className="w-full" id="projects">
      <h1 className="text-xl mb-4 text-primaryText font-semibold">Projects</h1>
      <ul className="gap-5 text-xs sm:text-sm flex flex-col items-start justify-start">
        {/* Projects List */}
        {props.data.map((item, index) => {
          return (
            <li
              key={index}
              className={` ${
                item.state === "pending"
                  ? "text-gray-400 leading-6"
                  : "text-primaryText leading-6"
              }`}
            >
              <Link
                href={item.link}
                target="_blank"
                className={
                  item.state === "pending"
                    ? projectsStylingPending
                    : projectsStyling
                }
              >
                {item.title}
              </Link>{" "}
              {item.description}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Projects;
