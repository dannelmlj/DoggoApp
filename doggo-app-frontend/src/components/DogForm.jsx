// import { resolve } from 'path'
import React, { useState } from 'react'

function DogForm() {
    const [name, setName] = useState('')
    const [age, setAge] = useState('')
    const [type, setType] = useState('')
    const [description, setDesc] = useState('')
    const [image, setImage] = useState('')
    // const [imageunstripped, setImageUnstripped]=useState('')
    const [error, setError] = useState(null)


    const convertToBase = (file) =>{
        return new Promise((resolve,reject)=>{
            const reader= new FileReader();
            reader.readAsDataURL(file);

            reader.onload = () => {
                resolve(reader.result);
            };
            reader.onerror = (error) => {
                reject(error);
            };
        });
    };
    const handleImage = async (e) =>{
        const file =  e.target.files[0];
        // console.log(convertToBase(file))
        const base64 = await convertToBase(file);
        const base64result = await base64.split(',')[1];
        // console.log(base64);
        await setImage(base64result);
        // await setImageUnstripped(base64);
        // console.log(imageunstripped);
    }

    const submitHandler = async (submit) =>{
        submit.preventDefault()

        const dog = {name,age,type,description,image}
        const response = await fetch('http://localhost:2121/api/dogs', {
            method: 'POST',
            body: JSON.stringify(dog),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        // console.log(response.json)
        // const json = await response.json();
        // console.log(json);
        if(!response.ok){
            setError(response.error)
        }
        if(response.ok){
            setError(null)
            setName('')
            setAge('')
            setType('')
            setDesc('')
            setImage('')
        }
        
    }

  return (
    <form onSubmit={submitHandler}>
        <div className='px-3'>
            <div>
                <label htmlFor="name" className='block text-gray-700 text-sm font-bold mb-2'>Name:</label>
                <input 
                    type="text" 
                    name="name" 
                    id="name" 
                    onChange={(entry) =>{setName(entry.target.value)}}
                    required
                    value={name}
                    className='shadow appearance-none border rounded w-1/2 h-7 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>
            <div>
                <label htmlFor="age" className='block text-gray-700 text-sm font-bold mb-2'>Age:</label>
                <input 
                    type="number" 
                    name="age" 
                    id="age" 
                    required
                    onChange={(entry) =>{setAge(entry.target.value)}}
                    value={age}
                    className='shadow appearance-none border rounded w-1/2 h-7 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>
            <div>
            <label htmlFor="type" className='block text-gray-700 text-sm font-bold mb-2'>Breed:</label>
                <select  
                    name="type" 
                    id="type"
                    type="text"
                    onChange={(entry) =>{setType(entry.target.value)}}
                    value={type}
                    className='shadow border rounded w-1/2 h-7 px-2 leading-tight focus:outline-none focus:shadow-outline text-sm font-normal'
                    required
                >   
                    <option value="" disabled selected>Select the breed</option>
                    <option value="Golden Retriever">Golden Retriever</option>
                    <option value="Chihuahua">Chihuahua</option>
                    <option value="Poodle">Poodle</option>
                    <option value="Yorkshire Terrier">Yorkshire Terrier</option>
                    <option value="Dachsund">Dachsund</option>
                    <option value="Samoyed">Samoyed</option>
                    <option value="Husky">Husky</option>
                    <option value="German Shepard">German Shepard</option>
                    <option value="Bulldog">Bulldog</option>
                    <option value="French Bulldog">French Bulldog</option>
                    <option value="Pug">Pug</option>
                    <option value="Malamute">Malamute</option>
                    <option value="Border Collie">Border Collie</option>
                    <option value="Pomeranian">Pomeranian</option>
                    <option value="Corgi">Corgi</option>
                    <option value="Shiba Inu">Shiba Inu</option>
                    <option value="Dalmatian">Dalmatian</option>
                    <option value="Dobermann">Dobermann</option>
                    <option value="Beagle">Beagle</option>
                    <option value="Shih Tzu">Shih Tzu</option>
                    <option value="Rottweilers">Rottweilers</option>
                    <option value="Maltese">Maltese</option>
                </select>
            </div>
            <div>
                <label htmlFor="desc" className='block text-gray-700 text-sm font-bold mb-2'>Description:</label>
                <textarea 
                    rows= '4'
                    cols= '5'
                    type="text" 
                    name="desc" 
                    id="desc" 
                    required
                    onChange={(entry) =>{setDesc(entry.target.value)}}
                    value={description}
                    className='shadow appearance-none border rounded w-full h-32 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>
            <div>
                <label htmlFor="image" className='block text-gray-700 text-sm font-bold mb-2'>Image Upload:</label>
                <input
                    type='file'
                    id='image'
                    name='image' 
                    required
                    onChange={handleImage}
                    className='shadow appearance-none border rounded w-full h-12 py-2 px-3 leading-tight focus:outline-none focus:shadow-outline'
                />
            </div>
            {image && (
                <div className='w-60 h-60'>
                    <img src={`data:image/jpeg;base64,${image}`} alt="" className='w-3/4 h-full'/>
                </div>
            )
            }
            
            <button className='rounded bg-[#023e8a] hover:bg-[#03045e] mt-1 text-white font-bold px-2 py-1 mb-2'>Add Good Doggo to the Pawrty </button>
            {error && <div>{error}</div>}
        </div>

    </form>
  )
}

export default DogForm