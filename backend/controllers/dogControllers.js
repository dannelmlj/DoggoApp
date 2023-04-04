const Dog = require('../models/DogModel')

//get all
const getDogs = async (req,res) =>{
    const Dogs = await Dog.find({}).sort({createdAt: -1})
    res.status(200).json(Dogs)
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
const postDog = async(req,res) => {
    const {name, type, age, vaccinations} = req.body
    try{
        const dog = await Dog.create({name, type, age, vaccinations})
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