const mongoose = require("mongoose");
Schema = mongoose.Schema;

const UserSchema = new mongoose.Schema({
    name:{
        type: String,
        require: true,
    },
    lastname:{
        type: String,
        require: true,
    },
    phone:{
        type: Number,
        require: true,
        unique: true,
    },
    address:{
        type: String,
        require: true,
        
    },
    birth:{
        type: String,
        require: true,
    }
}, {
    timestamps: true,
})
module.exports = mongoose.model("User", UserSchema)