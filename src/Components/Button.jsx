import React from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <button 
      id={id} 
      className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-3xl bg-[#1d1d1d] px-5 text-black ${containerClass}`}
    >
      {leftIcon}
      <span className="relative flex flex-col h-[26px] overflow-hidden font-primary">
        <span className="font-light text-xl text-teal-500 transform group-hover:-translate-y-full transition-transform duration-300">
          {title}
        </span>
        <span className="font-light text-xl text-teal-500 absolute transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          {title}
        </span>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button
