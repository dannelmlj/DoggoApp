const mongoose = require('mongoose')

const Schema = mongoose.Schema

const dogSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true,
            enum:
            [
                'Golden Retriever','Chihuahua','Yorkshire Terrier','Poodle','Dachsund','Samoyed','Husky','German Shepard',
                'Bulldog', 'French Bulldog','Pug','Malamute','Border Collie','Pomeranian','Corgi','Shiba Inu','Dalmatian',
                'Dobermann','Beagle','Shih Tzu','Rottweilers','Maltese'
            ]
        },
        age: {
            type: Number,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            public_id: {
                type: String,
                required: true
            },
            url: {
                type: String,
                required: true
            }
        } 

    },
    {
        timestamps: true
    })

module.exports = mongoose.model('Dog', dogSchema)