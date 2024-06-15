import React, { useState, useRef, useEffect } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Link } from 'react-scroll';

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
        <li className='p-5'><Link to="Home" smooth={true} duration={500}>Home</Link></li>
        <li className='p-5'><Link to="AboutMe" smooth={true} duration={500}>AboutMe</Link></li>
        <li className='p-5'><Link to="Projects" smooth={true} duration={500}>Projects</Link></li>
        <li className='p-5'><Link to="Experience" smooth={true} duration={500}>Experience</Link></li>
        <li className='p-5'><Link to="Contact" smooth={true} duration={500}>Contact</Link></li>
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
          <li className='p-2'><Link to="Home" smooth={true} duration={500} onClick={handleNav}>Home</Link></li>
          <li className='p-2'><Link to="AboutMe" smooth={true} duration={500} onClick={handleNav}>AboutMe</Link></li>
          <li className='p-2'><Link to="Projects" smooth={true} duration={500} onClick={handleNav}>Projects</Link></li>
          <li className='p-2'><Link to="Experience" smooth={true} duration={500} onClick={handleNav}>Experience</Link></li>
          <li className='p-2'><Link to="Contact" smooth={true} duration={500} onClick={handleNav}>Contact</Link></li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
