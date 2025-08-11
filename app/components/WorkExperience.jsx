import React from "react";

const WorkExperience = (props) => {
  return (
    <main className="w-full mb-3">
      <h1 className="text-xl mb-4 text-primaryText font-semibold">
        Work Experience
      </h1>
      <div className="w-full gap-5 flex flex-col justify-between items-center">
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full gap-1 flex flex-col lg:flex-row justify-between"
            >
              <p className="w-full font-medium text-primaryText">
                {item.workPlace}
              </p>
              <div className="w-full flex flex-row justify-between">
                <p className="text-gray-400 text-sm">{item.date}</p>
                <p className="text-green-500 font-medium text-[0.8rem]">
                  {item.position}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default WorkExperience;
