import React from 'react'
import aboutIMG from '../assets/About.jpg'
const About = () => {
  return (
    <div className='flex w-full '>
    <div className='py-10 text-white bg-[#232325]   h-auto'>
        <div className='flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-5 '>
    <div>
         <div className='' >
            <img src={aboutIMG} alt="aboutimage"
            className='object-cover mx-auto rounded-xl h-[300px] filter grayscale brightness-50'
            />
         </div>
    </div>
<div>
    <div className='p-2'>
<div className='text-gray-300 my-3'>
<h3 className='text-4xl font-semibold mb-5' >About <span className='primary-color' >Me</span></h3>
<p className='text-justify  w-11/12 '>
I am an undergraduate student of Software Engineering. I am interested in Web Development and AI.
</p>
</div>
    </div>
<div className='flex mt-10 items-center gap-7'>
    <div className='bg-[#333333]/40 p-5  rounded-lg '>
        <h3 className='ms:text-4xl text-2xl font-semibold text-white '>6
<span className='primary-text'>+</span>
        </h3>
<p><span className='md:text-base text-xs'>Projects</span> </p>
    </div>

    <div className='bg-[#333333]/40 p-5 rounded-lg '>
        <h3 className='ms:text-4xl text-2xl font-semibold text-white '>7
<span className='primary-text'>+</span>
        </h3>
<p><span className='md:text-base text-xs'>Months Experience</span> </p>
    </div>

    <div className='bg-[#333333]/40 p-5 rounded-lg '>
        <h3 className='ms:text-4xl text-2xl font-semibold text-white '>2
<span className='primary-text'>+</span>
        </h3>
<p><span className='md:text-base text-xs'>Happy Clients</span> </p>
    </div>

</div>
</div>


        </div>

        
        </div>
        </div>
  )
}

export default About