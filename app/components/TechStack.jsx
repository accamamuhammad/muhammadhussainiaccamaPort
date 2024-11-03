import React from "react";

const TechStack = (props) => {
  const listStylingDone = "text-xs sm:text-sm text-secondaryText";
  const listStylingLearning = "text-xs sm:text-sm text-TertiaryBg";

  return (
    <div className="w-full mb-3">
      <h1 className="text-xl mb-4 text-primaryText">Tech</h1>
      <ul className="gap-3 flex flex-col">
        {props.data.map((item, index) => {
          return (
            <li
              key={index}
              className={
                item.state === "complete"
                  ? listStylingDone
                  : listStylingLearning
              }
            >
              <span
                className={`${item.state === "complete" ? "text-primaryText text-sm" : "text-TertiaryBg text-sm"} `}
              >
                {index + 1}.{" "}
              </span>
              {item.name}
            </li>
          );
        })}
      </ul>
      <p className="mt-10 text-xs text-primaryText text-center">
        Copyright © 2024 Accama Muhammad
      </p>
    </div>
  );
};

export default TechStack;
