import React, { useContext } from "react";
import { LampContext } from "../context";
import { motion } from "motion/react";

function ToggleSwitch({isON}) {
  const {darkMode} = useContext(LampContext)
  return (
    <div className={`w-15  border rounded-full py-1 px-2 flex items-center ${isON ? 'justify-end' : 'justify-start'}`}>
      <motion.div layout transition={{ duration: 0.5 }}  className={`w-5 h-5 rounded-full bg-black ${darkMode && 'bg-white'}`} ></motion.div>
    </div>
  );
}

export default ToggleSwitch;
