import mongoose from 'mongoose';

const formElementSchema=new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    
    elementName:{
        type:String,
        required:true,
        unique:true
    },
    type:{
        type:String,
        required:true,
        minlength:6
    },
    bubbleContent:{
        type:String,
        required:true,
        minlength:6
    },
   
})

const FormElement=mongoose.model('FormElement',formElementSchema)

export default FormElement;