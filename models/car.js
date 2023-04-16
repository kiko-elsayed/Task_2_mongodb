const mongoose = require('mongoose')
const validator = require('validator')

const Cars = mongoose.model('Cars',{
    name: {
        type: String,
        required: true,
        trim : true
    },
    model:{
        type: String,
        required: true,
        trim : true
    },
    year: {
        type: Number,
        required: true,
        min: 2000,
        validate(val){
            if(val <= 2000){
                throw new Error ("the year must be more than 2000")
            }
        }

    },
    color:{
        type: String,
        required: true,
        trim : true
    }

})

module.exports = Cars;