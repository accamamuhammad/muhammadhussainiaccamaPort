import React from "react";

const page = () => {
  return (
    <div className="w-screen h-screen pb-5 pt-16 flex flex-col items-center justify-between">
      <h1 className="text-xl text-blue-950">Contact Me 📞</h1>
      <div className="w-full sm:w-[380px] space-y-10">
        <div className="w-full">
          <h2 className="text-[0.8rem] ml-1">Enter your Full Name</h2>
          <input
            type="text"
            placeholder="John nolan"
            className="w-full pl-1 border-x-none border-b-[.8px] border-grey-500 mt-1.5 py-1.5 text-xs"
          />
        </div>
        <div className="w-full">
          <h2 className="text-[0.8rem] ml-1">Enter your Email Address</h2>
          <input
            type="email"
            placeholder="Johnnolan@example.com"
            className="w-full pl-1 border-x-none border-b-[.8px] border-grey-500 mt-1.5 py-1.5 text-xs"
          />
        </div>
        <div className="w-full">
          <h2 className="text-[0.8rem] ml-1">Enter your Message</h2>
          <textarea
            placeholder="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem facilis minima possimus quia ipsum aliquid. Voluptatum consequatur reiciendis nobis consequuntur."
            className="w-full pl-1 leading-[22px] resize-none h-32 border-x-none border-b-[.8px] border-grey-500 mt-1.5 py-1.5 text-xs"
          />
        </div>
        <button className="w-full bg-gray-50 hover:bg-gray-100 font-bold shadow text-slate-800 text-sm py-2 rounded-sm">
          Send
        </button>
      </div>
      <p className="mt-10 text-xs text-primaryText text-center">
        Copyright © 2024 Accama Muhammad
      </p>
    </div>
  );
};

export default page;
