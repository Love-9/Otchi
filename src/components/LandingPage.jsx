import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.3"
      className="w-full h-screen bg-zinc-900 pt-1"
    >
      <div className="textHead mt-40 px-[4.5vw] ">
        {["we Create", "Eye-Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex items-end overflow-hidden ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className=" mr-[0.5vw] w-[8vw] h-[5.2vw]
                  relative -top-[.2vw] bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] rounded-md"
                  ></motion.div>
                )}
                <h1 className=" flex items-center uppercase text-[8.8vw] h-full  leading-[6.7vw] font-bold font-['Test_Founders_Grotesk_X-Condensed'] tracking-normal">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className=" border-t-[1px] border-zinc-800 mt-48 flex justify-between items-center py-5 px-[4.5vw]">
        {[
          "For public and private companies",
          "From the First pitch to IPO",
        ].map((item, index) => (
          <p className=" text-xl font-normal tracking-tight leading-none font-['Neue_Montreal']">
            {item}
          </p>
        ))}
        <div className="start flex  items-center gap-4">
          <div className="group hover:bg-white hover:cursor-pointer  transition-all duration-500 px-[0.5vw] py-[0.3vw] border-[1.5px] border-zinc-400 font-light  rounded-full">
            <h1 className="group-hover:text-black font-['Neue_Montreal']">
              {" "}
              START THE PROJECT
            </h1>
          </div>
          <div className=" group hover:bg-white hover:cursor-pointer hover:scale-110 transition-all duration-500 w-[2.3vw] h-[2.3vw] flex items-center justify-center  border-[1.5px]  border-zinc-400 rounded-full">
            <span className=" group-hover:text-black rotate-[45deg] text-lg">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
