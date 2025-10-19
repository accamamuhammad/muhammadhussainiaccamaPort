import React from "react";

const Education = (props) => {
  return (
    <main className="w-full mb-3">
      <h1 className="text-xl mb-4 text-primaryText font-semibold">Education</h1>
      <div className="w-full gap-5 flex flex-col justify-between items-center">
        {props.data.map((item, index) => {
          return (
            <div
              key={index}
              className="w-full gap-1 flex flex-col lg:flex-row justify-between"
            >
              <div className="flex flex-col">
                <p className="w-full font-medium text-primaryText">
                  {item.place}
                </p>
                <p className="text-gray-400 text-sm">{item.date}</p>
              </div>
              <p className="w-[75%] lg:w-[380px] text-wrap leading-7 text-green-500 font-medium text-[0.85rem]">
                {item.title}
              </p>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Education;
