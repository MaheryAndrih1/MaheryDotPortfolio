import React, { useState } from 'react';
import Button from '../UI/Button';

const Contact = () => {
  const [formData, setState] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch('https://formspree.io/f/xnnjervl', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        alert('Message sent successfully!');
        setState({ name: '', email: '', message: '' });
      } else {
        throw new Error('Failed to send message');
      }
    } catch (error) {
      alert('Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div id="contact" className="min-h-screen flex flex-col items-center justify-between">
      <div className="text-[128px] md:text-[86px] font-black tracking-[-0.2em] flex justify-center items-center">
        <span style={{ color: "var(--color-primary)" }}>C</span>
        <span style={{ color: "var(--color-secondary)" }}>O</span>
        <span style={{ color: "var(--color-gray)" }}>N</span>
        <span style={{ color: "var(--color-teal)" }}>T</span>
        <span style={{ color: "var(--color-gray)" }}>A</span>
        <span style={{ color: "var(--color-primary)" }}>C</span>
        <span style={{ color: "var(--color-secondary)" }}>T</span>
      </div>

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

      <div className="w-full px-4 md:px-0">
        <form onSubmit={handleSubmit} className="flex flex-col items-center max-w-md mx-auto w-full">
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder='Name' 
            required
            className='text-white mt-5 w-full md:w-xl text-lg bg-transparent border-b border-white outline-none px-2 flex items-end h-8'
          />
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder='Email' 
            required
            className='text-white mt-5 w-full md:w-xl text-lg bg-transparent border-b border-white outline-none px-2 flex items-end h-8'
          />
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder='Message' 
            required
            className='text-white mt-12 w-full md:w-xl min-h-[100px] text-lg bg-transparent border-b border-white outline-none px-2 resize-none flex items-end pt-[70px]'
          />
          <Button 
            title={
              <span className="text-white">
                {isSubmitting ? 'Sending...' : 'Submit'}
              </span>
            }
            containerClass="bg-[#1d1d1d] py-3 mt-5"
            type="submit"
            disabled={isSubmitting}
          />
        </form>
      </div>
      <footer className='w-full h-fit bg-neutral-950 mt-10'>
        <div className='container mx-auto px-4'>
          <div className='flex flex-col items-center justify-center py-2'>
            <p className='text-center text-white/30 text-xs mt-1'>
            &copy; 2025 Mahery | Fullstack Developer. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Contact
