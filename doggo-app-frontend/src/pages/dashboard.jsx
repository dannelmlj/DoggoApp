import React from 'react'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import DogCard from '../components/DogCard';

function dashboard() {
    const [dogs, setDogs] = useState(null);
    const [page, setPage]= useState(1);
    const [pageCount, setPageCount]= useState(0);
    
    useEffect (()=>{
        const fetchDogs = async () =>{
            const response = await fetch(`http://localhost:2121/api/dogs?page=${page}`);
            const datas = await response.json();
            if (response.ok){
                setDogs(datas.Dogs);
                setPageCount(datas.pageCount)
            }
        }
        fetchDogs()
    }, [page])

    const nextHandler = (()=>{
        setPage((p) =>{
            if (p === pageCount){
                return p;
            }
            return p + 1;
        })
    })
    
    const previousHandler = (()=>{
        setPage((p) =>{
            if (p === 1){
                return p;
            }
            return p - 1;
        }) 
    })

    
  return (
    <>
    <main className='w-full h-full'>
        <div className='w-full h-full py-16 px-8 font-lato flex flex-col justify-center items-center'>
            <div className='mt-12'>
                <span className='text-4xl sm:text-5xl lg:text-6xl font-lato font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue to-lightpink'>GOOD DOGGOS</span>
            </div> 
            <Link to='/addPage'>
                <div className='mt-2 rounded-full bg-orange font-extrabold text-white py-2 px-4 hover:bg-[#fb8500] text-xs '>
                    + Add Good Doggos
                </div>
            </Link>
        </div>
        <div className='w-full h-full flex flex-col items-center'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {dogs && dogs.map((dog) =>(
                    <DogCard key={dog._id} dogs={dog} />
                ))}
            </div>

        </div>
        <div className='flex flex-row justify-center gap-8 mt-2'>
            <button disabled={page === 1} onClick={previousHandler} className="text-orange border border-orange hover:bg-orange hover:text-white focus:ring-4 focus:outline-none focus:ring-orange font-medium rounded-lg text-sm p-3 text-center inline-flex items-center mr-2 dark:border-orange-500 dark:text-orange-500 dark:hover:text-white dark:focus:ring-orange-800 dark:hover:bg-orange-500">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/100/svg"><path d="M19,11H9l3.29-3.29a1,1,0,0,0,0-1.42,1,1,0,0,0-1.41,0l-4.29,4.3A2,2,0,0,0,6,12H6a2,2,0,0,0,.59,1.4l4.29,4.3a1,1,0,1,0,1.41-1.42L9,13H19a1,1,0,0,0,0-2Z"/></svg>
            </button>
            <button disabled={page === pageCount} onClick={nextHandler} className="text-orange border border-orange hover:bg-orange hover:text-white focus:ring-4 focus:outline-none focus:ring-orange font-medium rounded-lg text-sm p-3 text-center inline-flex items-center mr-2 dark:border-lightpink-500 dark:text-lightpink-500 dark:hover:text-white dark:focus:ring-pink-800 dark:hover:bg-pink-500">
                <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/100/svg"><path d="M18,12h0a2,2,0,0,0-.59-1.4l-4.29-4.3a1,1,0,0,0-1.41,0,1,1,0,0,0,0,1.42L15,11H5a1,1,0,0,0,0,2H15l-3.29,3.29a1,1,0,0,0,1.41,1.42l4.29-4.3A2,2,0,0,0,18,12Z"/></svg>
            </button>
        </div>
        <div className='flex justify-center mt-2 font-lato font-semibold text-lg'>
            Page: {page}
        </div>


    </main>
    </>
  )
}

export default dashboard;