import React from "react";

export default function About() {
  return (
    <div className=" mt-[-1rem] w-full p-20 bg-[#CDEA68]  text-black">
      <h1 className="font-['Neue_Montreal'] text-[3.6vw] leading-[4.5vw] tracking-tight font-normal">
        Ochi is a strategic partner for fast-grow­ing tech businesses that need
        to <span className=" underline">raise funds</span>,{" "}
        <span className=" underline"> sell prod­ucts</span>,&nbsp;
        <span className=" underline">ex­plain com­plex ideas</span>, and{" "}
        <span className=" underline">hire great peo­ple</span>.
      </h1>
      <div className="w-full border-t-[1px] mt-20 pt-10 border-[#a1b562] mt-32 flex gap-5">
        <div className="w-1/2 ">
          <h1 className="text-7xl font-['Neue_Montreal']">Our approach :</h1>
          <button className="font-['Neue_Montreal'] px-10 py-6 bg-zinc-900 rounded-full text-white mt-10 flex gap-10 items-center uppercase">
            Read More
            <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-[42vw] h-[60vh]  overflow-hidden border-none rounded-3xl">
          <img className=" w-full h-full bg-cover bg-center bg-[url('https://images.unsplash.com/photo-1593900154763-1db4833d1784?q=80&w=2010&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]" />
        </div>
      </div>
    </div>
  );
}
