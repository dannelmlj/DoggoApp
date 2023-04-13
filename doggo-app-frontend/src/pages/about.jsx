import React from 'react'

function about() {
  return (
    <>
        <main className="w-full h-full ">

            <div className=" w-full h-full py-16 px-8 font-lato flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center mt-12">
                    <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-lato text-blue font-extrabold bg-clip-text bg-gradient-to-r from-[#8600ff] to-[#ff0085]"> THE TAIL OF DOGGO: </span>
                    <span className="text-3xl sm:text-3xl md:text-4xl lg:text-5xl font-lato text-blue font-extrabold bg-clip-text bg-gradient-to-r from-[#8600ff] to-[#ff0085]"> OUR STORY</span>
                </div>
                <div className="flex flex-col justify-center mt-3 w-[75vh] sm:w-[75vh] md:w-[80vh] lg:w-[100vh] ">
                    <span className="text-sm  font-lato text-lightpink font-semibold ">                         
                        At DOGGO, we understand the power that a cute and cuddly pup can have on someone's day. Whether you're feeling stressed, anxious, or just need a quick pick-me-up, browsing through our collection of adorable dog pictures is sure to put a smile on your face.
                    </span>
                    <br />
                    <span className="text-sm  font-lato text-lightpink font-semibold ">  
                        Our community is made up of dog lovers from all over the world, sharing their favorite photos and stories of their furry best friends. Whether it's a silly snapshot or a heartwarming tale, we invite you to join us in celebrating the unique bond between humans and dogs.
                    </span>
                    <br />
                    <span className="text-sm  font-lato text-lightpink font-semibold ">  
                        Thank you for choosing DOGGO as your go-to source for adorable dog pictures. We hope that our platform brings a little bit of happiness into your life, just like dogs have done for us.
                    </span>
                </div>

            </div>
        </main>
    </>   
  )
}

export default about;