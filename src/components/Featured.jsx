import { motion, useAnimation } from "framer-motion";
import React, { useState } from "react";

function Featured() {
  const cards = [useAnimation(), useAnimation()];
  const handlehover = (index) => {
    cards[index].start({ y: "0" });
  };
  const handlehoverend = (index) => {
    cards[index].start({ y: "100%" });
  };
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-10 border-b-[1px] border-zinc-700 pb-20">
        <h1 className="text-8xl font-['Neue_Montreal'] tracking-tight">
          Featured Projects
        </h1>
      </div>
      <div className="px-20">
        <div className="cards w-full flex gap-20 mt-10">
          <motion.div
            onHoverStart={() => handlehover(0)}
            onHoverEnd={() => handlehoverend(0)}
            className=" cardcontainer relative w-1/2  h-[70vh]"
          >
            <div className="card w-full rounded-xl h-full bg-green-600 overflow-hidden ">
              <h1 className="absolute -translate-x-[30vw] translate(-50%,-50%) overflow-hidden flex left-full text-[#CDEA68] -translate-x-1/2 top-1/2 -translate-y-1/2  z-[99] leading-none font-['Test_Founders_Grotesk_X-Condensed'] text-[15rem] tracking-normal">
                {"FYDE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[0]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full h-full bg-cover bg-center zoomm"
                src="https://ochi.design/wp-content/uploads/2023/10/Fyde_Illustration_Crypto_2-663x551.png"
                alt=""
              />
            </div>
          </motion.div>
          <motion.div
            onHoverStart={() => handlehover(1)}
            onHoverEnd={() => handlehoverend(1)}
            className="cardcontainer relative w-1/2  h-[70vh] overflow-hidden"
          >
            <div className="card w-full rounded-xl h-full bg-green-600 overflow-hidden ">
              <h1 className="absolute flex overflow-hidden right-full text-[#CDEA68] translate-x-[30vw] translate(-50%,-50%) top-1/2 -translate-y-1/2  z-[99] leading-none font-['Test_Founders_Grotesk_X-Condensed'] text-[15rem] tracking-normal">
                {"VISE".split("").map((item, index) => (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={cards[1]}
                    transition={{
                      ease: [0.22, 1, 0.36, 1],
                      delay: index * 0.05,
                    }}
                    className="inline-block"
                    key={index}
                  >
                    {item}
                  </motion.span>
                ))}
              </h1>
              <img
                className="w-full zoomm h-full bg-fill"
                src="https://ochi.design/wp-content/uploads/2022/09/Vise_front2-663x551.jpg"
                alt=""
              />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
