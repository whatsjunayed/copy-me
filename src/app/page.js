"use client";

import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";

const page = () => {
  const [text, setText] = useState();
  const [select, useSelect] = useState('none');

  const notify = () =>
    toast("copied", {
      duration: 1000,
      position: "top-center",
    });

  const buttonHandle = () => {
    navigator.clipboard.writeText(text);
    notify();
  };
  return (
    <div className="flex gap-8 flex-col items-center justify-center h-screen w-full bg-black text-white relative">
      <div className="text-3xl absolute top-[10%]">Copy Something?</div>
      <div className="absolute bottom-[5%] w-auto  grid grid-cols-2 text-center gap-10">
        <span
          className={select === "none" && "bg-orange-500 opacity-100"}
          onClick={() => useSelect("none")}
        >
          Default
        </span>
        <span
          className={select === "uppercase" && "bg-orange-500 opacity-100"}
          onClick={() => useSelect("uppercase")}
        >
          UPPERCASE
        </span>
        <span
          className={select === "capitalize" && "bg-orange-500 opacity-100"}
          onClick={() => useSelect("capitalize")}
        >
          Capitalize
        </span>
        <span
          className={select === "lowercase" && "bg-orange-500 opacity-100"}
          onClick={() => useSelect("lowercase")}
        >
          lowercase
        </span>
      </div>
      <div className="w-[80%] lg:w-[35%]">
        <input
          type="text"
          className={`border-b-2 outline-none bg-transparent border-b-white w-full px-3 h-12 rounded-xl ${select}`}
          placeholder="Type here...."
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>
      <button
        className="px-5 py-2 text-sm lg:text-md font-semibold lg:px-5 rounded-full capitalize bg-blue-700 border duration-300 border-blue-700 text-white hover:bg-transparent"
        onClick={buttonHandle}
      >
        Copy
      </button>
      <Toaster
        toastOptions={{
          style: {
            background: "#24a413",
            color: "#ffffff",
          },
        }}
      />
    </div>
  );
};

export default page;
