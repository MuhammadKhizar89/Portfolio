import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setNav(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className='text-gray-500 flex justify-between items-center h-24 w-full px-4'>
      <h1 className='text-3xl font-bold primary-color ml-4'>M.Khizar</h1>
      <ul className='hidden md:flex'>
        <li className='p-5'><a href="#Home">Home</a></li>
        <li className='p-5'><a href="#AboutMe">AboutMe</a></li>
        <li className='p-5'><a href="#Projects">Projects</a></li>
        <li className='p-5'><a href="#Experience">Experience</a></li>
        <li className='p-5'><a href="#Contact">Contact</a></li>
      </ul>

      <div onClick={handleNav} className='block md:hidden'>
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div
        ref={dropdownRef}
        className={nav ? 'z-10 text-gray-300 fixed h-full left-0 top-0 w-[60%] border-r border-r-gray-900 bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}
      >
        <h1 className='text-3xl m-4 font-bold primary-color ml-4'>M.Khizar</h1>
        <ul className='p-4' onClick={handleNav}>
          <li className='p-2'><a href="#Home">Home</a></li>
          <li className='p-2'><a href="#AboutMe">AboutMe</a></li>
          <li className='p-2'><a href="#Projects">Projects</a></li>
          <li className='p-2'><a href="#Experience">Experience</a></li>
          <li className='p-2'><a href="#Contact">Contact</a></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
