
function dogCard({dogs}) {    
  return (
    <>
        <div className='bg-gradient-to-b from-lightpink to-orange shadow-lg rounded-md w-60 h-80 mx-3 p-3 flex flex-col  align-middle'>
            <div className='flex items-center justify-center'>
                <img src={dogs.image.url} alt="" className='w-48 h-52'/>
            </div>
            <div className='flex flex-col mt-3 text-white'>
                <span className='font-bold'>Name: {dogs.name}</span>
                <span className='font-bold'>Age: {dogs.age}</span>
                <span className='font-bold'>Breed: {dogs.type}</span>
            </div>
            

        </div>
    </>
  )
}

export default dogCard;