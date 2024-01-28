import React from 'react'

const Button2 = ({buttonName}) => {
  return (
    // <button className='button rounded-md text-white text-base pt-[11px]
    // hover:cursor-pointer pr-[26px] pb-[11px] pl-[26px] font-semibold bg-gradient-to-r from-red-400 to-red-500 hover:from-pink-400 hover:to-red-500 w-fit'>{buttonName}</button>

    <button className='button rounded-md text-red-500 text-base pt-[11px]
    hover:cursor-pointer pr-[26px] pb-[11px] pl-[26px] font-semibold 
    bg-white shadow-md shadow-slate-600 opacity-80  hover:bg-red-600 hover:text-white w-fit dark:shadow-black'>{buttonName}</button>
    
  )
}

export default Button2