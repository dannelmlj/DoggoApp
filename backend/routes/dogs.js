const express = require('express')
const Dog = require('../models/DogModel')
const router = express.Router()
const {
    getDogs,
    getDog,
    postDog,
    deleteDog,
    updateDog
} = require ('../controllers/dogControllers')

//GET all dogs list
router.get('/', getDogs)

//GET a specific dog
router.get('/:id', getDog)

//POST a dog for adoption
router.post('/', postDog)

//UPDATE a dog for adoption data
router.patch('/:id', updateDog)

//DELETE a dog
router.delete('/:id',deleteDog)
module.exports = router