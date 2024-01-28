import { AiFillLinkedin } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";

const GetInTouch = () => {
  return (
    <div
      className="flex flex-col lg:flex-row px-[3rem] 
h-[140vh]  
    lg:h-[80vh] mt[4rem]"
    >
      {/* left */}
      <div className="flex flex-col    ">
        <div className="flex flex-col ">
          <span className="text-blackPrimary text-[3rem] font-bold dark:text-white">
            Get in touch
          </span>
          <span className="text-red-500 text-[2.5rem] font-semibold dark:text-red-400">
            Contact Me
          </span>

          <div className="bg-violet-700 absolute w-[22rem] h-[14rem] rounded-full blur-[212px] z-[-9] top-[-18%] left-[56%] hidden lg:block "></div>
          <div className="bg-blue-600-700 absolute w-[22rem] h-[14rem] rounded-full blur-[212px] z-[-9] top-[-40%] left-[66%] hidden lg:block"></div>
        </div>
      </div>
      {/* right side */}
      <div className="flex flex-col  relative text-[110px] text-blackPrimary lg:left-[30rem]">
        {/* get in touchj */}

        <div className="absolute top-16 hover:text-gray-700">
          <a href="https://www.linkedin.com/in/priyanshu-upadhyay-7b8a3224a/">
            <AiFillLinkedin />
          </a>
        </div>

        <div className="absolute top-40 left-40 hover:text-gray-700">
          <a href="https://www.instagram.com/priyansh0037">
            <AiFillInstagram />
          </a>
        </div>
      </div>
    </div>
  );
};

export default GetInTouch;
