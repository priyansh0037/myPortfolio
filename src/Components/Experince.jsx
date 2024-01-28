import React from "react";

const Experince = () => {
  return (
    
    <div id="Experience" className="md:h-[35rem] h-[60rem] mt-[25rem] md:mt-0 md:mb-[8rem] flex md:flex-row  flex-col gap-[5rem] items-center justify-center md:gap-[10rem] relative ">
      

      <div className="flex flex-col items-center text-center">
        <div className="w-[7rem] h-[7rem] bg-white text-center rounded-full relative flex items-center justify-center font-bold mb-[2rem]  text-[2rem] border-red-400  border-[8px] shadow-lg ">
          1+
        </div>
        <span className="font-semibold text-xl dark:text-white">Years</span>
        <span className="font-bold text-xl text-red-400">Experince</span>
      </div>

      {/* blur div */}
      <div className='bg-violet-500 absolute w-[22rem] h-[14rem] rounded-full blur-[212px] z-[-9] top-[-18%] left-[56%] '></div>

      {/* blur div finsi */}
      <div className="flex flex-col items-center text-center">
        <div className="w-[7rem] h-[7rem] bg-white text-center rounded-full relative flex items-center justify-center font-bold mb-[2rem]  text-[2rem] border-red-400  border-[8px] shadow-lg ">
          7+
        </div>
        <span className="font-semibold text-xl dark:text-white">Complete</span>
        <span className="font-bold text-xl text-red-500">Projects</span>
      </div>

      <div className="flex flex-col items-center text-center">
        <div className="w-[7rem] h-[7rem] bg-white text-center rounded-full relative flex items-center justify-center font-bold mb-[2rem]  text-[2rem] border-red-400  border-[8px] shadow-lg ">
          0
        </div>
        <span className="font-semibold text-xl dark:text-white">companies</span>
        <span className="font-bold text-xl text-red-500">work</span>
      </div>
    </div>
  );
};

export default Experince;
