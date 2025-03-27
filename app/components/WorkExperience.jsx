import React from "react";

const WorkExperience = (props) => {
  return (
    <main className="w-full mb-3">
      <h1 className="text-xl mb-4 text-primaryText">Work Experience</h1>
      <div className="w-full flex justify-between items-center">
        {props.data.map((item, index) => {
          return (
            <>
              <p className="text-sm text-primaryText">{item.workPlace}</p>
              <p className="text-gray-400 text-sm">{item.date}</p>
              <p className="text-green-500 text-sm">{item.position}</p>
            </>
          );
        })}
      </div>
    </main>
  );
};

export default WorkExperience;
