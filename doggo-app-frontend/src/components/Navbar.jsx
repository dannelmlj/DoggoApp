import React from 'react'
import { Link } from 'react-router-dom'
import { useState } from 'react';
function Navbar() {
    const navButton = [
        {name:"HOME", link:"/"},
        {name:"DASHBOARD", link:"/dashboard"},
        {name:"ABOUT", link:"/about"}
    ];
    const [openMenu, setOpenMenu]=useState(false);
  return (
    <div className='w-full fixed top-0 left-0 shadow-sm'>
        <div className='md:flex md:flex-row bg-primary px-4 md:px-0 py-2 md:justify-center '>
            
            {/* Logo */}
            <div className='h-12 font-extrabold font-lato text-black text-2xl cursor-auto '>
                <Link to='/'>
                    <span className='text-3xl mr-1 pt-2'>
                        <img src="./doggo.svg" alt="Logo" className='h-full object-cover inline' />
                    </span>
                    DOGGO
                </Link>
            </div>

            {/* Buttons */}
            <div className='h-12 text-3xl absolute right-5 top-2 md:hidden' onClick={()=>setOpenMenu(!openMenu)}>
                <img src="./hamburger.svg" alt="" className='h-full object-fill inline' />
            </div>
            <ul className={`md:flex md:items-center bg-primary left-0 w-full md:w-auto absolute md:static transition-all duration-500 ease-in-out ${openMenu ? 'top-17 opacity-100' : 'top-[-490px]'} md:opacity-100 opacity-0`}>
                {
                    navButton.map((link)=>(
                        <li key={link.name} className='text-xl ml-4 md:ml-8 md:my-0 my-7 font-semibold'>
                            <Link to={link.link} className='hover:text-gray-800'>{link.name}</Link>
                        </li>
                    ))
                }
            </ul>

        </div>
    </div>
  )
}

export default Navbar