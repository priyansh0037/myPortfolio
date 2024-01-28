import React from 'react'
import Button from './Button'
import Insta from "../Assets/instagram.avif"
import Netflix from "../Assets/netflix.png"
import Youtube from "../Assets/youtube.webp"
import Facebook from "../Assets/Facebook.png"
import Amazone from "../Assets/emazone.png"
import {motion} from "framer-motion"

const Works = () => {
  const transition = {duration: 3.5, type: "spring"}

  return (
    <div className='lg:pl-[2rem] lg:pr-[2rem] px-4 lg:px-0 flex lg:flex-row flex-col lg:h-[80vh] mt-[4rem] h-[190vh] sm:h-[170vh] '>

     {/* left */}
     <div className='flex flex-col relative gap-2   '>
<span className='text-blackPrimary text-[2.5rem] font-bold dark:text-white'>Top Projects </span>
<span className='text-red-500 text-[2.5rem] font-bold dark:text-red-400'>That I Made...</span>

<span className=' md:w-[36rem] w-[20rem] text-base text-gray-800 dark:text-white'>
<span className='font-semibold text-red-500 dark:text-red-400'> A Full Stack Blog App: </span> This App empowers users to create, edit, and publish content with a user-friendly interface. Offering image uploads, and responsive design, it enhances engagement. Built with React.js, Node.js, and MongoDB, the app ensures a seamless experience. <br />
<br />

<span  className='font-semibold text-red-500 dark:text-red-400'> Youtube Clone: </span> A video-sharing platform resembling YouTube, allowing users to upload, view, and interact with video content, including comments and subscriptions.

<br />
<br />

<span className='font-semibold text-red-500 dark:text-red-400'> Instagram Clone: </span> A web application closely resembling Instagram, allowing users to create accounts, post images and videos, follow other users, engage with content through likes and comments, and explore a social feed, mirroring the popular photo-sharing and networking service.
     </span>

<div className='mt-[1rem]'>

<a href="https://www.instagram.com/priyansh0037">
<Button buttonName="Hire Me"/>

</a>
</div>

<div className='bg-violet-500 absolute w-[22rem] h-[14rem] rounded-full blur-[212px] z-[-9] top-[-10%] left-[56%] '></div>

        </div>

{/* right side */}

<div className=" lg:left-[8rem] scale-[65%] md:scale-90 lg:scale-100 left-[-8rem] md:left-[3rem] mt-[5rem] 
lg:mt-0 relative ">

  <motion.div 
  initial={{rotate: 45}}
whileInView={{rotate: 0}}
viewport={{margin: '-40px'}}
transition={transition}

  className="w-mainCircle dark:shadow ">

    <div className="w-secCircle w-[150px] h-[150px]">
      <img src={Netflix} alt="" />
    </div>
    

    <div className="w-secCircle w-[150px] h-[150px]">
      <img src={Youtube} alt="" />
    </div>
    
    
    <div className="w-secCircle w-[150px] h-[150px] ">
      <img src={Amazone} alt="" />
    </div>
    
    <div className="w-secCircle w-[150px] h-[150px]">
      <img src={Insta} alt=""  />
    </div>

    
    <div className="w-secCircle w-[140px] h-[140px]">
      <img src={Facebook} alt="" />
    </div>
    

  </motion.div>
</div>

    </div>
  )
}

export default Works