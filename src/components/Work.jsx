import React from 'react';
import forex from'../assets/ForexEagleTraders.png'
import MK from'../assets/MKTraders.png'
import TMS from'../assets/TMS.png'
import Bakenest from'../assets/BakeNest.png'
import { FaReact, FaNodeJs,FaJava } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiExpress,SiMongodb,SiSpringboot,SiThymeleaf } from 'react-icons/si';

const Work = () => {
    const glowingEffect =
    "absolute transition-all duration-1000 opacity-70 -inset-px bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg group-hover:opacity-100 group-hover:-inset-1 group-hover:duration-200 animate-tilt";

  return (
    <div className="py-6 ">
      <div className="mx-auto px-4 md:px-8">
        <div className="mb-4 flex items-center justify-between gap-8">
          <div className="flex flex-col gap-4">
            <h2 className="text-2xl lg:text-3xl text-white">
              My <span className="primary-color">Projects</span>
            </h2>
            <p className="text-gray-500">
              These are my latest projects that I have worked on.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        <div className="relative group">
            {/* Glowing effect */}
            <div className={glowingEffect}></div>

            {/* Project details */}
            <div className=" rounded overflow-hidden shadow-xl relative bg-[#20242d] p-3">
              {/* Project image */}
              <img className="w-full" src={forex} alt="Forex Eagle Academy" />

              {/* Project title and icons */}
              <div className="px-6 py-4">
                <div className="text-2xl lg:text-3xl text-white mb-2">Forex Eagle Academy</div>
                <p className="text-gray-700 text-base flex">
                  <FaReact className='text-[#00d8ff] h-10 w-10 m-2' />
                  <SiTailwindcss className="text-blue-700 h-10 w-10 m-2" />
                  <FaNodeJs className="text-[#5efa50] h-10 w-10 m-2" />
                  <SiMysql className="text-[#4ddeff] h-10 w-10 m-2" />
                  <SiExpress className="text-[#404D59] h-10 w-10 m-2" />
                </p>
              </div>

              {/* Project links */}
              <div className="px-6 pt-4 pb-2 flex justify-between items-center">
                <a href="https://forexeagletraders.vercel.app/" target="_blank" rel="noopener noreferrer" className="bg-[#b023a2] hover:bg-[#f711e0] text-white font-bold py-2 px-4 rounded">
                  Live Demo
                </a>
                <a href="https://github.com/MuhammadKhizar89/ForexEagleTraders" target="_blank" rel="noopener noreferrer" className="bg-[#b023a2] hover:bg-[#f711e0] text-white font-bold py-2 px-4 rounded">
                  Code
                </a>
              </div>
            </div>
          </div>
          <div className="relative group">
            {/* Glowing effect */}
            <div className={glowingEffect}></div>

            {/* Project details */}
            <div className=" rounded overflow-hidden shadow-xl relative bg-[#20242d] p-3">  <img className="w-full" src={MK} alt="Course" />
            <div className="px-6 py-4">
              <div className="text-2xl lg:text-3xl text-white mb-2">MK Traders</div>
              <p className="text-gray-700 text-base flex ">
               <FaReact className='text-[#00d8ff] h-10 w-10 m-2' />
                <SiTailwindcss className="text-blue-500 h-10 w-10 m-2" />
                <FaNodeJs className="text-[#5efa50] h-10 w-10 m-2" />
                <SiMongodb className="text-[#47ff5f] h-10 w-10 m-2" />
                <SiExpress className="text-[#404D59] h-10 w-10 m-2" />
              </p>
            </div>
            <div className="px-6 pt-4 pb-2  flex justify-between items-center">
              <a href="https://mk-traders.vercel.app/" target="_blank" className="bg-[#b023a2]  hover:bg-[#f711e0] text-white font-bold py-2 px-4 rounded">
                Live Demo
              </a>
              <span ><a href="https://github.com/MuhammadKhizar89/MK-Traders" target="_blank" className="bg-[#b023a2]  hover:bg-[#f711e0] text-white font-bold py-2 px-4 rounded">
                Code
              </a></span>
            </div>
          </div>
          </div>
          <div className="relative group">
            {/* Glowing effect */}
            <div className={glowingEffect}></div>

            {/* Project details */}
            <div className=" rounded overflow-hidden shadow-xl relative bg-[#20242d] p-3">  <img className="w-full" src={TMS} alt="Course" />
            <div className="px-6 py-4">
              <div className="text-2xl lg:text-3xl text-white mb-2">Tournament Sheduling System</div>
              <p className="text-gray-700 text-base flex ">
              <FaJava className='text-[#b07219] h-10 w-10 m-2'/>
                <SiTailwindcss className="text-[#38B2AC] h-10 w-10 m-2" />
                <SiSpringboot className="text-[#6DB33F] h-10 w-10 m-2" />
                <SiMysql className="text-[#00758F] h-10 w-10 m-2" />
                <SiThymeleaf className="text-[#005F0F] h-10 w-10 m-2" />
              </p>
            </div>
            <div className="px-6 pt-4 pb-2  flex justify-between items-center">
              <a href="https://tms-frontend.vercel.app" target="_blank" className="bg-[#b023a2]  hover:bg-[#f711e0] text-white font-bold py-2 px-4 rounded">
                Demo Video
              </a>
              <span ><a href="https://github.com/MuhammadKhizar89/TournamentShedulingSystem" target="_blank" className="bg-[#b023a2]  hover:bg-[#f711e0] text-white font-bold py-2 px-4 rounded">
                Code
              </a></span>
            </div>
          </div>
          </div>
          <div className="relative group">
            {/* Glowing effect */}
            <div className={glowingEffect}></div>

            {/* Project details */}
            <div className=" rounded overflow-hidden shadow-xl relative bg-[#20242d] p-3">
                  <img className="w-full" src={Bakenest} alt="Course" />
            <div className="px-6 py-4">
              <div className="text-2xl lg:text-3xl text-white mb-2">BakeNest </div>
            <p className='text-white text-xs '>Contributed in Admin Panel</p>
              <p className="text-gray-700 text-base flex ">
                
               <FaReact className='text-[#00d8ff] h-10 w-10 m-2' />
                <SiTailwindcss className="text-blue-700 h-10 w-10 m-2" />
                <FaNodeJs className="text-[#5efa50] h-10 w-10 m-2" />
                <SiMysql className="text-[#00758F] h-10 w-10 m-2" />
                <SiExpress className="text-[#404D59] h-10 w-10 m-2" />
                
              </p>
            </div>
            <div className="px-6 pt-4 pb-2  flex justify-between items-center">
              <a href="" target="_blank" className="bg-[#b023a2]  hover:bg-[#f711e0] text-white font-bold py-2 px-4 rounded">
                Live Demo
              </a>
              <span ><a href="https://github.com/MuhammadUmar7831/e-Commerce-Website" target="_blank" className="bg-[#b023a2]  hover:bg-[#f711e0] text-white font-bold py-2 px-4 rounded">
                Code
              </a></span>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};
export default Work;
