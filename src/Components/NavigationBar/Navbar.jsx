import React from "react";
import logo2 from "../../Assets/logo2.png";
import Button from "../Button";
import Toogle from "../Toogle";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <div id="Navbar" className="px-3 md:px-0 h-[12vh] flex flex-row justify-between  items-center ">
      {/* left */}
      <div className="flex justify-center items-center  gap-2 ">
        <img src={logo2} alt="" width={50} height={50} className="hidden lg:block" />
        <span className="font-semibold text-3xl dark:text-white">Priyansh</span>

        <div className="mt-2 ml-3">
          <Toogle />
        </div>
      </div>

      {/* right */}
      <div className="font-semibold">
        <ul className="md:flex space-x-16 cursor-pointer hidden dark:text-white">
          <Link spy={true} to='Navbar' smooth={true} activeClass="activeClass" >
            <li className="hover:text-red-500">Home</li>
          </Link>

          <Link spy={true} to='Services' smooth={true} >

            <li className="hover:text-red-500">Services</li>
          </Link>

          <Link spy={true} to='Experience' smooth={true} >
            
            <li className="hover:text-red-500">Experince</li>
            </Link>
  
            <Link spy={true} to='Portfolio' smooth={true} >
            
            <li className="hover:text-red-500">Portfolio</li>
            </Link>
  
        </ul>
      </div >

      <div className="md:block hidden">
      <a href="https://www.instagram.com/priyansh0037">
      <Button buttonName="Hire Me" />
      </a>

      </div>
    </div>
  );
};

export default Navbar;
