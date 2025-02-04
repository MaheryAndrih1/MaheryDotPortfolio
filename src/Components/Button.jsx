import React from 'react'

const Button = ({ title, id, rightIcon, leftIcon, containerClass}) => {
  return (
    <button id={id} className={`group relative z-10 w-fit cursor-pointer overflow-hidden rounded-3xl bg-[#1d1d1d] px-5 text-black ${containerClass}`}>
      {leftIcon}
      <span className="font-primary font-light relative incline-flex overflow-hidden text-xl text-teal-500">
        <div>
        {title}
        </div>
      </span>
      {rightIcon}
    </button>
  )
}

export default Button
