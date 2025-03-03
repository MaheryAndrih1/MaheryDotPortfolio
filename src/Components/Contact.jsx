import React from 'react'
import Button from './Button'

const Contact = () => {
  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-between">
      <div className="text-[128px] md:text-[86px] font-black tracking-[-0.2em] flex justify-center items-center">
                <span style={{ color: "#00C1A1" }}>C</span>
                <span style={{ color: "#007070" }}>O</span>
                <span style={{ color: "#B3ECE3" }}>N</span>
                <span style={{ color: "#00C1A1" }}>T</span>
                <span style={{ color: "#007070" }}>A</span>
                <span style={{ color: "#00C1A1" }}>C</span>
                <span style={{ color: "#00C1A1" }}>T</span>
      </div>
      <Button 
        title={<>
          <span className="text-white">Call me on </span>
          <span>Whatsapp</span>
        </>}
        containerClass="bg-[#1d1d1d] py-3 "
        onClick={() => window.open('https://wa.me/+261386084355', '_blank')}
      />

      <div className="flex items-center justify-center gap-8 mt-8">
        <a href="https://linkedin.com/in/maheriniaina-andrianaivo/" target="_blank" rel="noreferrer">
          <h1 className='text-xl text-white relative after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300'>LI</h1>
        </a>
        <a href="https://youtube.com/@mahery-dev/" target="_blank" rel="noreferrer">
          <h1 className='text-xl text-white relative after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300'>YT</h1>
        </a>
        <a href="https://facebook.com/mahery.andrih.1" target="_blank" rel="noreferrer">
          <h1 className='text-xl text-white relative after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300'>FB</h1>
        </a>
        <a href="https://x.com/MaheryAndrih" target="_blank" rel="noreferrer">
          <h1 className='text-xl text-white relative after:absolute after:w-full after:h-[2px] after:bg-white after:left-0 after:-bottom-1 after:scale-x-0 after:origin-left hover:after:scale-x-100 after:transition-transform after:duration-300'>X</h1>
        </a>
      </div>

      <div>
        <form action="" className="flex flex-col items-center">
          <input 
            type="text" 
            placeholder='Name' 
            className='text-white mt-5 w-xl text-lg bg-transparent border-b border-white outline-none px-2 pb-1 placeholder:absolute placeholder:bottom-1'
          />
          <input 
            type="text" 
            placeholder='Email' 
            className='text-white mt-5 w-xl text-lg bg-transparent border-b border-white outline-none px-2 pb-1 placeholder:absolute placeholder:bottom-1'
          />
          <textarea 
            placeholder='Message' 
            className='text-white mt-12 w-xl min-h-[100px] text-lg bg-transparent border-b border-white outline-none px-2 pb-1 resize-none placeholder:absolute placeholder:bottom-1'
          />
          <Button 
        title={
          <span className="text-white">Submit</span>
        }
        containerClass="bg-[#1d1d1d] py-3 mt-5"
        onClick=""
      />
        </form>
        
      </div>
      <footer className='w-full h-fit bg-neutral-950 mt-10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center justify-center py-2'>
            <p className='text-center text-white/30 text-xs mt-1'>
            &copy; 2025 Mahery | Developer Fullstack. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact
