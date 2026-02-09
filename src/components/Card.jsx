import React from "react";
import { motion } from "motion/react";

function Card({ src, title, price }) {
  return (
    <div className="w-[20vw] h-[60vh] bg-green-60">
      <div className="h-[80%] overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.1, transition: {duration: 0.6} }}
          src={src}
          alt=""
          className="w-full  h-full "
        />
      </div>
      <h4>{title}</h4>
      <p>From ${price} </p>
    </div>
  );
}

export default Card;
