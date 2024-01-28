import React from 'react'
import Bg from "../Assets/bgred.png"
import {AiFillInstagram} from "react-icons/ai"
import {AiFillGithub} from "react-icons/ai"
import {AiFillLinkedin} from "react-icons/ai"


const Footer = () => {
  return (
    <div className='  flex items-center  relative  mt-[-27rem] w-full'>
<img src={Bg} alt="" style={{width:"100%"}} />

<div className="absolute flex flex-col gap-[2rem] w-full text-white font-semibold  mt-[22rem] items-center justify-center">
    <span className='text-lg'>priyanshcodes7@gmail.com</span>
    <div className='text-[3rem] flex gap-[1rem]'>

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
    </div>
  )
}

export default Footer