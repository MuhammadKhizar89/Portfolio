import React from 'react'
import { FaGithubSquare, FaInstagramSquare } from 'react-icons/fa';
const Footer = () => {
  return (
    <div className='w-full mx-1'>
    <div className='mt-12 border-t border-gray-500 text-center '>
        <p className='my-5  text-gray-500'>Fast NUCES<br/> Software Engineer </p>
<div className='flex justify-center text-purple-500  m-4 gap-4 text-3xl'>
<a href="https://github.com/muhammadkhizar89" target="_blank" rel="noopener noreferrer">
<FaGithubSquare />
</a>
<a href="https://www.instagram.com/m.khizar19/" target="_blank" rel="noopener noreferrer">
<FaInstagramSquare />
</a>
</div>

    </div>
    </div>
  )
}

export default Footer