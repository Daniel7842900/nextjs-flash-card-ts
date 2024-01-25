"use client";
import React from "react";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loading = () => {
  return (
    <>
      <AiOutlineLoading3Quarters className="animate-spin w-8 h-8" />
      <div>
        <span className="text-xl">Loading...</span>
      </div>
    </>
  );
};

export default Loading;
