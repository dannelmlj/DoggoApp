import React from 'react'
import { Link } from 'react-router-dom';
import DogForm from '../components/DogForm'


function addPage() {
  return (
    <>
    <main className='w-full h-full'>
        <div className='font-lato font-extrabold py-16 px-8 mt-12 text-6xl flex flex-col justify-center items-center'>
            <div className='flex flex-col justify-center items-center'>
                <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-lato text-transparent font-extrabold bg-clip-text bg-gradient-to-r from-blue via-lightpink to-blue"> 
                    JOIN THE PAWRTY 
                </span>
                <span className='text-sm sm:text-md lg:text-lg font-lato text-lightpink font-semibold mt-1 '>
                    Want your dog to put a smile on thousands of others? 
                </span>
                <span className='text-sm sm:text-md lg:text-lg font-lato text-lightpink font-semibold '>
                    Well then join the pawrty by filling out the below form!
                </span>
            </div>
            <div className='rounded-lg bg-gradient-to-br font-normal font-md bg-skyblue w-96 shadow-sm border-orange h-auto mt-3'>
                <div className='mt-4 text-sm'>
                    <DogForm/>
                </div>
            </div>
        </div>
    </main>
    </>
  )
}

export default addPage;