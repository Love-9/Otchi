import { motion } from "framer-motion";
import React from "react";

function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speeed=".2"
      className="w-full relative pt-20 pb-10 py-15 rounded-t-3xl bg-[#004d43] text-white"
    >
      <div className="movingText border-t-[.8px] border-b-[.8px] border-zinc-300  flex  overflow-hidden whitespace-nowrap ">
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] leading-none font-['Test_Founders_Grotesk_X-Condensed'] pr-40 -mb-[7vw] -mt-5 "
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[22vw] leading-none font-['Test_Founders_Grotesk_X-Condensed'] pr-40 -mb-[0vw] -mt-5"
        >
          WE ARE OCHI
        </motion.h1>
        <motion.h1
          initial={{ x: "0" }}
          animate={{ x: "-100%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 10 }}
          className="text-[20vw] leading-none font-['Test_Founders_Grotesk_X-Condensed'] pr-40 -mb-[0vw] -mt-5"
        >
          WE ARE OCHI
        </motion.h1>
      </div>
    </div>
  );
}

export default Marquee;
