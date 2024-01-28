import React from 'react'
import useTheme from '../theme';

function ThemeBtn() {
    // ye and theme contect ek dsre se aware ni ha to hmko ek context bana hoga jis se communicate kr paye

    //theme button gro=b krega kuch value context se and usi ke base pr value chnge krga ye button

    const {themeMode,lightTheme,darkTheme} = useTheme()

const onChangeButton = (e) =>{
 const darkModeStatus = e.currentTarget.checked

 if(darkModeStatus){
    darkTheme()
 }else{
    lightTheme()
 }
}

    
    return (
        <label className="relative inline-flex items-center justify-center cursor-pointer">
            <input
                type="checkbox"
                className="sr-only peer"
                onChange={onChangeButton}
                checked = {themeMode === 'dark'}
            />
            <div className="flex items-center justify-center w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        </label>
    );

    }   
export default ThemeBtn