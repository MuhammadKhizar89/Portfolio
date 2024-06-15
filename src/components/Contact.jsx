import React from 'react'
import { SiGmail, SiLinkedin, SiInstagram } from 'react-icons/si';

const Contact = () => {
  return (
    <div className='flex ml-4 justify-center my-20' id='Contact'>
      <div className=''>
        <div>
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='p-6 mr-2 bg-gray-800 rounded-xl flex flex-col justify-center'>
              <h1 className='text-4xl sm:text-5xl text-white'>Contact <span>Me</span></h1>
              <p className='text-normal text-lg font-medium text-gray-400 mt-2'>
                Let's connect on LinkedIn <br /> or send me an Email
              </p>
            </div>
            <div className='flex flex-col items-center mt-2 text-gray-400'>
             
              <button>
                <a href="mailto:muhammadkhizar8919@gmail.com" target="_blank" rel="noopener noreferrer">
                  <div className='flex m-2'>
                    <SiGmail className='text-3xl rounded-lg mx-2 text-red-500 bg-white' />
                    <div className='mt-1'>muhammadkhizar8919@gmail.com</div>
                  </div>
                </a>
              </button>
            
            <button>
                <a href="https://www.linkedin.com/in/muhammad-khizar-0739192ab" target="_blank" rel="noopener noreferrer">
              <div className='flex m-2'>
                  <SiLinkedin className='text-3xl rounded-lg mx-2 text-blue-500 bg-white' />
                  <div className='mt-1'>muhammad-khizar-0739192ab</div>
              </div>
              </a>
              </button>

        <button>
                <a href="https://www.instagram.com/m.khizar19" target="_blank" rel="noopener noreferrer">
              <div className='flex m-2'>
                  <SiInstagram className='text-3xl rounded-lg mx-2 text-pink-500' />
                  <div className='mt-1'>m.khizar19</div>
              </div>
                </a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
