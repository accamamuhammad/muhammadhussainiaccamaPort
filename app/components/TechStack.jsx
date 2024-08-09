import React from "react";

const TechStack = () => {
  const listStylingDone = "text-xs sm:text-sm text-secondaryText";
  const listStylingLearning = "text-xs sm:text-sm text-TertiaryBg";

  return (
    <div className="w-full mb-3">
      <h1 className="text-xl mb-4 text-primaryText">Tech</h1>
      <ul className="gap-3 flex flex-col">
        <li className={listStylingDone}>
          <span className="text-primaryText">1. </span>HTML
        </li>
        <li className={listStylingDone}>
          <span className="text-primaryText">2. </span>CSS
        </li>
        <li className={listStylingDone}>
          <span className="text-primaryText">3. </span>Tailwind
        </li>
        <li className={listStylingDone}>
          <span className="text-primaryText">4. </span>JavaScript
        </li>
        <li className={listStylingDone}>
          <span className="text-primaryText">5. </span>React
        </li>
        <li className={listStylingDone}>
          <span className="text-primaryText">6. </span>NextJS
        </li>
        <li className={listStylingDone}>
          <span className="text-primaryText">7. </span>Firebase
        </li>
        <li className={listStylingLearning}>
          <span className="text-primaryText">8. </span>
          Prisma
        </li>
        <li className={listStylingLearning}>
          <span className="text-primaryText">9. </span>MongoDB
        </li>
      </ul>
      <p className="mt-10 text-xs text-primaryText">
        Copyright © 2024 Accama Muhammad
      </p>
    </div>
  );
};

export default TechStack;
