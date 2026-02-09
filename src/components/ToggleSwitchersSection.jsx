import React, { useContext } from "react";
import { BsLightbulb } from "react-icons/bs";
import { HiOutlineLightBulb } from "react-icons/hi";
import { CiDark } from "react-icons/ci";
import { CiLight } from "react-icons/ci";
import ToggleSwitch from "./ToggleSwitch";
import { LampContext } from "../context";

function ToggleSwitchersSection() {
  const {lightOn, setLightOn, darkMode, setDarkMode} = useContext(LampContext)

  const lightSwitcher = () => {
    setLightOn(!lightOn)
    console.log('light clicked');
    
  }


  const themeSwitcher = () => {
    setDarkMode(!darkMode)
    console.log('theme clicked');
    
  }


  return (
    <div className="flex justify-between items-center border-b-2 pb-4">
      {/* Lamp Toggle */}
      <button className="flex items-center gap-x-1" onClick={lightSwitcher}>
        <BsLightbulb />
        <ToggleSwitch isON={lightOn}/>
        <HiOutlineLightBulb />
      </button>

      {/* theme Toggle */}
      <button className="flex items-center gap-x-1" onClick={themeSwitcher}>
        <CiDark />
        <ToggleSwitch isON={darkMode}/>
        <CiLight />
      </button>
    </div>
  );
}

export default ToggleSwitchersSection;
