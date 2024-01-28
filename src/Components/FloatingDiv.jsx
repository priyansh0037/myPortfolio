import React from 'react'


const FloatingDiv = ({image,txt1 ,txt2}) => {
  return (
    <div className='flex flex-col items-center justify-center bg-white shadow-md rounded-full  text-center h-[7.1rem] w-[7.1rem]'>
        <img src={image} alt="" className='-scale-50 rotate-180' />

    </div>
  )
}

export default FloatingDiv