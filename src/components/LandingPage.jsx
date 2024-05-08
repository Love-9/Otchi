// import React from 'react'
// import { FaArrowUp } from "react-icons/fa";
// function LandingPage() {
//   return (
//     <div className='w-full h-screen bg zinc-900 pt-2'>
//       <div className='textstructure t-32 px-20'>
//         <div className='masker font-["Times New Roman"]'>
//             <h1 className='uppercase text-7xl leading-none tracking-tighter font-bold'>We Create</h1>
//         </div>
//         <div className='masker font-["Times New Roman"]'>
//             <h1 className='uppercase text-7xl leading-none tracking-tighter font-bold'>Eye Opening</h1>
//         </div>
//         <div className='masker font-["Times New Roman"]'>
//             <h1 className='uppercase text-7xl leading-none tracking-tighter font-bold'>Presentations</h1>
//         </div>
//         <div className='border-t-2 border-zinc-700 mt-32 flex justify-between items-center gap py-5 px-20'>
//     <div className="flex space-x-8">
//         {["For public and private companies", "From the first pitch to IPO "].map((item, index) => (
//             <p key={index} className='text-md font-light tracking-tight leading-none'>{item}</p>
//         ))}
//     </div>
//     <div className='start flex space-x-2'>
//         <div className='px-4 py-2 border-[2px] rounded-full border-zinc-500 font-light text-sm capitalize'>START THE PROJECT</div>
//         <div className='w-10 h-10 flex items-center justify-center rounded-full border-zinc-500'>
//             <span className='rotate-[45deg]'>
//                 <FaArrowUp/>
//             </span>
//         </div>
//     </div>
// </div>

//         </div>
//       </div>

//   )
// }

// export default LandingPage

import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function LandingPage() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.20"
      className="w-full h-screen bg-black pt-1" 
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
                  relative -top-[-0vw] bg-cover bg-center bg-[url('https://ochi.design/wp-content/uploads/2022/04/content-image01.jpg')] rounded-md"
                  ></motion.div>
                )}
                <h1 className=" flex items-center uppercase text-[7vw] h-full  leading-[6vw]  font-bold tracking-tighter">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-32 flex justify-between items-center py-5 px-[4.5vw]">
        {[
          "For public and private companies",
          "From the First pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-normal tracking-tight leading-none">
            {item}
          </p>
        ))}
        <div className="start flex  items-center gap-4">
          <div className="group hover:bg-black   px-[0.5vw] py-[0.3vw] border-[1.5px] border-white font-light  rounded-full">
            <h1 className="group-hover:text-white "> START THE PROJECT</h1>
          </div>
          <div className=" group hover:bg-black w-[2.4vw] h-[2.4vw] flex items-center justify-center  border-[1.5px]  border-black rounded-full">
            <span className=" group-hover:text-white rotate-[45deg]  ">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
