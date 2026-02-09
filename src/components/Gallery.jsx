import React, { useContext, useEffect, useState } from "react";
import { DarkOffImages, DarkOnImages, LightOffImages, LightOnImages } from "../constants";
import Card from "./Card";
import { LampContext } from "../context";

function Gallery() {
  const {lightOn, darkMode} = useContext(LampContext)

  const [selectedImages, setSelectedImages] =useState(LightOffImages)
  useEffect(() => {
    // * light false, darkmode false
    if(!lightOn && !darkMode){
      setSelectedImages(LightOffImages)
    }else if(!lightOn && darkMode){
      setSelectedImages(DarkOffImages)
    }else if(lightOn && darkMode){ // lamp is on and darkmode is dark
      setSelectedImages(DarkOnImages)
    }else if(lightOn && !darkMode){ // lamp is on and darkmode is light
      setSelectedImages(LightOnImages)
    } 
  }, [lightOn, darkMode])
  

  return (
    <div className="grid grid-cols-2 gap-2">
      {Array.from({ length: 4 }).map((_, index) => (
        <Card
          key={index}
          src={selectedImages.couch}
          title="Lamp"
          price={120000}
        />
      ))}
    </div>
  );
}

export default Gallery;
