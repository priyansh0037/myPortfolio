// IMPORTANT -> tailwind config me jana apko darkMode: "class"
// ye likhna ha 


import "./App.css";
import "./index.css";
import Navbar from "./Components/NavigationBar/Navbar";
import Intro from "./Components/Intro";
import Services from "./Components/Services";
import Experince from "./Components/Experince";
import Works from "./Components/Works";
import Portfolio from "./Components/Portfolio";
import GetInTouch from "./Components/GetInTouch";
import Footer from "./Components/Footer";
import { ThemeProvider } from "./theme";
import { useEffect, useState } from "react";

const App = () => {

   const [themeMode,setThemeMode] = useState('light')
   // by def ye light hoga 

   const darkTheme = () =>{
      setThemeMode("dark")
   }

   const lightTheme = () => {
      setThemeMode("light")
   }
   // yaha humeny themes set kr di using light and drk functions 
   // is se kch frk ni pdega ,and hm chate ha ki ye run sirf kisis event pr ho to hm use effct use krnge
   

// local storge 

useEffect(() => {
   // When the component mounts, retrieve the theme mode from local storage
   const savedTheme = localStorage.getItem("themeMode");
   
   if (savedTheme) {
     setThemeMode(savedTheme);
   }
 }, []);


   useEffect(()=>{

      localStorage.setItem("themeMode", themeMode);
      
      document.querySelector('html').classList.remove("dark" ,"light")
      
      document.querySelector("html").classList.add(themeMode)

},[themeMode])

// agr theme me koi bhi chnge ata ha tb componnt ko rerender kr dena 
return(
   
   
   // yaha hm sbhi value likhnge
<ThemeProvider value={{themeMode,darkTheme,lightTheme}}>

   <div className="overflow-hidden ">
      <div className="  px-[1rem] py-[1rem]  md:px-10  ">


      <Navbar/>
      <Intro/>
      <Services/>
      <Experince/>
      <Works/>
      <Portfolio/>
      <GetInTouch/>


      </div>

      <div className="px-0">
      <Footer/>
      </div>
   </div>
</ThemeProvider>

  )
};
export default App;
