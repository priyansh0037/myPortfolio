import React from 'react'
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"
import web from "../Assets/web3.png"
import FloatingDiv from './FloatingDiv'
import Crown from "../Assets/crown.png"
import thumbup from "../Assets/thumbup.png"
import {motion} from "framer-motion"

const Intro = () => {
const transition = {duration: 2, type: "spring"}


  return (
    <div className='h-[75vh] lg:mt-[6rem]  flex flex-col md:flex-row '>
        {/* left */}

        <div className='flex flex-col relative flex-1 gap-7 scale-[90%] md:scale-100      '>
<div className=' flex flex-col gap-2'>
    <span className='text-blackPrimary font-bold text-[3rem] dark:text-white'>Hey! I Am</span>
    <span className='text-red-400 font-bold text-[3rem]'>Priyansh</span>

    <span className=' text-[18px] text-gray-800 dark:text-white'>I build things for the web</span>


    <span className=" text-[18px] text-gray-800 dark:text-white">

    "I'm a coding wizard, crafting extraordinary digital journeys. Currently, my spellbook is filled with the enchanting art of developing 
    <span className='text-red-500 text-xl font-semibold dark:text-red-400'> Web Apps</span>

    </span>


</div>
    {/* <Button buttonName="Hire Me" /> */}

<div className='flex flex-row md:mt-[3rem] mt-[2rem] gap-8 hover:text-blue-950 text-[5rem] hover:cursor-pointer text-blackPrimary dark:text-white'>
    <a href="https://github.com/priyansh0037">
    <AiFillGithub/>
    </a>

    <a href="https://www.linkedin.com/in/priyanshu-upadhyay-7b8a3224a/">
    <AiFillLinkedin/>
    </a>

    <a href="https://www.instagram.com/priyansh0037">
    <AiFillInstagram/>
    </a>

</div>
        </div>

        {/*right  */}
<div className='flex  flex-1 relative mt-[3rem] lg:mt-0 '>

<div className='relative   -top-[1rem] overflow-hidden scale-110 '>
<img src={web} alt="" className='w-full  object-cover overflow-hidden'/>
</div>

<motion.div
initial={{top: "-2.7rem", left : "25rem" }}
whileInView={{left : "30rem"}}
transition={transition}

className='absolute -top-[2.7rem] left-[30rem] hidden lg:block  '>

  <FloatingDiv image ={Crown} />
</motion.div>

<motion.div 
initial={{top: "28rem", left : "-8rem"}}
whileInView={{left : "-2rem"}}
transition={transition}


className='absolute top-[28rem] -left-[3rem] hidden md:block '>
  <FloatingDiv image ={thumbup} />
</motion.div>

{/* blur divs */}

<div className='bg-violet-500 absolute w-[22rem] h-[14rem] rounded-full blur-[212px] z-[-9] top-[-18%] left-[56%] hidden '></div>

<div className='bg-sky-500 absolute w-[21rem] h-[11rem] rounded-full blur-[212px] z-[-9] top-[17rem] left-[-9rem] hidden  '></div>

</div>

    </div>
  )
}

export default Intro