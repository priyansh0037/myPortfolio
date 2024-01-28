import React from 'react'
import {motion} from "framer-motion"
import Button from './Button'
import Card from './Card'
import webapp from "../Assets/webapp.png"
import html from "../Assets/html.png"
import backend from "../Assets/backend.png"

const Services = () => {
const transition = {duration : 2 ,type : "spring"}

  return (
    <div id='Services' className=' px-1 flex lg:flex-row flex-col  h-[170vh] lg:h-[90vh] mb-[13rem] mt-[15rem] md:mt-[2rem] lg:mt-[8rem]   lg:gap-0 '>
        {/* left */}
        <div className='flex flex-col relative gap-3 '>
<span className='text-red-500 dark:text-red-400 text-[2.5rem] font-bold'>Services</span>
<span className=' w-[22rem] lg:w-[36rem] text-base text-gray-800 dark:text-white'>I'm a full-stack developer with expertise in both front-end and back-end technologies. I design and build web applications, ensuring a seamless user experience and robust server-side functionality. My skills include JavaScript, React, Node.js, and databases like MongoDB </span>

<div className='mt-[2rem] lg:-[1rem]'>

<Button buttonName="Download Cv"/>
</div>

<div className='bg-violet-500 absolute w-[22rem] h-[14rem] rounded-full blur-[212px] z-[-9] top-[-18%] left-[56%] hidden lg:block'></div>

        </div>

        {/* right side */}
        {/* cards */}
        <div className=' static md:relative scale-[85%] md:scale-95 lg:scale-100 flex flex-col  gap-[5rem]  lg:gap-0 items-center md:left-[16rem] '>

<motion.div 
initial={{left: "25rem" }}
whileInView={{left:"14rem"}}
transition={transition}

  className='card md:absolute static'
style={{left:"14rem"}} >
  <Card image={webapp} text1="HTML, CSS, JavaScript" text2="Fundamental web technologies for creating and styling web content."/>
</motion.div>

   {/* second card */}

   
<motion.div

initial={{left: "-25rem" }}
whileInView={{left:"-18rem"}}
transition={transition}

className='card md:absolute static'

style={{top:"20rem",left:"-18rem"}}>
  <Card image={html} text1="Front-End Development" text2=" Designing and developing user interfaces, ensuring responsive and user-friendly web designs."/>
</motion.div>

{/* 3rd card */}


<motion.div 
initial={{left: "25rem" }}
whileInView={{left:"14rem"}}
transition={transition}

className='card md:absolute static'

style={{top:"28rem",left:"14rem", }}>
  <Card image={backend} text1="Back-End Development" text2="Building server-side logic, setting up databases, and creating APIs for data exchange."/>
</motion.div>

<div className='bg-blue-500 absolute w-[22rem] h-[14rem] rounded-full blur-[212px] z-[-9] top-[20rem] left-[-48rem] '></div>
        </div>
    </div>
  )
  }

export default Services