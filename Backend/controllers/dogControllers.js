const Dog = require('../models/DogModel');
const cloudinary = require('../config/cloudinary');

const itemPerPage = 12;

//get all per page
const getDogs = async (req,res) =>{

    const page = req.query.page || 1;
    console.log(page)

    try{
        const count = await Dog.estimatedDocumentCount({});
        const Dogs= await Dog.find({}).sort({createdAt:-1}).skip((page -1)*itemPerPage).limit(itemPerPage);
        const pageCount=Math.ceil(count/ itemPerPage);

        console.log(pageCount);
        res.status(200).json({Dogs, pageCount})
    }
    catch (error){
        res.status(400).json({error: error.message })
    }
}

//get id
const getDog = async (req,res) =>{
    const {id}= req.params
    try{
        const goodDog = await Dog.findById(id)
        res.status(200).json(goodDog)
    }catch(error){
        res.status(400).json({error: "Sorry, We couldn't find a dog with that ID :( "})
    }
}

//post dog
const postDog =  async(req,res) => {
    const {name, type, age, description, image} = req.body;
    const imageUnstripped = 'data:image/jpeg;base64,'+image;
    try{
        const result = await cloudinary.uploader.upload(imageUnstripped,{
            overwrite: true,
            invalidate: true,
            resource_type: "auto",
            folder: "Dogs"
        })
        console.log(result.secure_url);
        console.log(result.public_id);

        const dog = await Dog.create({name, type, age, description, 
            image:{
                public_id: result.public_id,
                url: result.secure_url
            }})
        res.status(200).json(dog)
    }
    catch (error){
        res.status(400).json({error: error.message})
    }
}

//delete id
const deleteDog =async (req,res)=>{
    const {id} = req.params
    try{
        const deletedDog = await Dog.findByIdAndDelete(id)
        res.status(200).json({success: "Succesfully deleted a dog ", deletedDog})
    }
    catch(error){
        res.status(400).json({error: "No dog with that ID"})
    }
}

//update id
const updateDog = async (req,res) =>{
    const {id} = req.params
    try{
        const updateGoodDog = await Dog.findByIdAndUpdate(id, {
            ...req.body
        })
        res.status(200).json({success: "Succesfully updated the dog"})
    }catch(error){
        res.status(400).json({error: "No dog with that ID"})
    }
}

module.exports = {
    getDogs,
    getDog,
    postDog,
    deleteDog,
    updateDog
}