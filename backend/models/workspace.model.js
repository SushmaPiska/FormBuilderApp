import mongoose from 'mongoose';

const workspaceSchema=new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },
    folders:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Folder"
    }],
    directForms:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Form"
    }]
},{timestamp: true})

module.exports = mongoose.model('Workspace', workspaceSchema);