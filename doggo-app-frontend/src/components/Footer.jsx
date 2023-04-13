import React from 'react'
import { Link } from 'react-router-dom'
export default function Footer() {
  return (
    <div className='w-full  bottom-10 '>
        <div className='flex flex-col justify-center items-center'>
            {/* Logo */}
            <div className='h-12 font-extrabold font-lato text-black text-2xl'>
                <span className='text-3xl mr-1 pt-2'>
                    <img src="./doggo.svg" alt="Logo" className='h-full object-cover inline' />
                </span>
                DOGGO
            </div>
            <div className='h-8 text-lg font-semibold '>
                Made with
                <span className='text-lg font-semibold mr-1 ml-1  pt-2'> 
                 <img src="./love.svg" alt="" className='h-4/5 object-cover inline' />
                </span>
                by <a href="https://github.com/dannelmlj">Dannel Mulja</a>
            </div>
        </div>
        
    </div>
  )
}
