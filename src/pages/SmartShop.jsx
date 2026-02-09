import React, { useContext } from "react";
import Header from "../components/Header";
import ToggleSwitchersSection from "../components/ToggleSwitchersSection";
import Gallery from "../components/Gallery";
import { LampContext } from "../context";

function SmartShop() {
  const { darkMode } = useContext(LampContext);
  return (
    <div
      className={` ${darkMode ? "text-white bg-black" : "text-black bg-white"}`}
    >
      <div className="w-[50vw]  m-5 flex flex-col gap-y-8 mx-auto">
        <Header />
        <ToggleSwitchersSection />
        <Gallery />
      </div>
    </div>
  );
}

export default SmartShop;
