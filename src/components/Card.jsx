import React from 'react'

function Card({src, title, price}) {
  return (
    <div className='w-[20vw] h-[60vh]'>
        <img src={src} alt="" className='w-full h-[80%]' />
        <h4>{title}</h4>
        <p>From ${price} </p>
    </div>
  )
}

export default Card