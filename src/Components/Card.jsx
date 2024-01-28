import React from "react";
import Button2 from "./Button2";

const Card = ({ image, text1, text2 }) => {
  return (

    <div className="grid grid-cols-1 w-[24rem]  justify-center items-center h-[24rem] bg-gray-800
     rounded-md  shadow-lg border ">

      <div className="flex justify-center items-center h-[11rem] ">
      <img src={image} alt="" width={220} height={220} className="rounded-xl object-cover rounded-b-none"/>
      </div>

      <div className=" space-y-2 px-4 py-4 h-full w-full flex  justify-center  flex-col  bg-white rounded-b-md dark:bg-[#1b1a1a] dark:text-white ">
        <h2 className="font-semibold">{text1}</h2>
        <p className="text-sm">{text2}</p>

        <div className="p-2 ">
        <Button2 buttonName="Learn More"/>
        </div>
        
      </div>
      
    </div>
  );
};

export default Card;
