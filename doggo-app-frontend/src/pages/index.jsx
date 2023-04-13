import React from "react";
import { Link } from "react-router-dom";
function Home(){
    return(
        <>
        <main className="w-full h-full ">
            
            <div className=" w-full h-full py-16 px-8 font-lato flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center  mt-12">
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-lato  font-extrabold text-blue"> PAWS! AND</span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-lato text-blue font-extrabold bg-clip-text bg-gradient-to-r from-[#8600ff] to-[#ff0085]"> TAKE A LOOK AT</span>
                    <span className="text-4xl sm:text-5xl lg:text-6xl font-lato text-blue font-extrabold bg-clip-text bg-gradient-to-r from-[#8600ff] to-[#ff0085]">ADORABLE DOGS</span>
                </div>
                <div className="flex flex-col justify-center mt-2">
                    <span className="text-sm sm:text-lg lg:text-2xl font-lato text-lightpink font-semibold "> Explore the cutest dogs and puppies from around the world</span>
                </div>
                <Link to='/dashboard'>
                    <div className="mt-4 rounded-full bg-orange font-extrabold text-white py-2 px-4 hover:bg-[#fb8500] md:py-3 md:px-6 md:text-lg lg:py-4 lg:px-8 lg:text-xl ">
                        LET'S GO!
                    </div>
                </Link>

            </div>
        </main>
            
        </>
    );
}

export default Home;