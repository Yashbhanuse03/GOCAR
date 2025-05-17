const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');



const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength:[3, 'First name should be of minmun lenght 3 atleast '], 

        }
    },
    lastname: {
        firstname: {
            type: String,
            required: true,
            minlength:[3, 'Last name should be of minmun lenght 3 atleast '], 

        }
    },
    email: {
        firstname: {
            type: String,
            required: true,
            unique: true,
            minlength:[5, 'First name should be of minmun lenght 3 atleast '], 

        }
    },
    password:{
        type: String,
        required: true,
    },
    socketId: { 
        type: String,
        
    } 
    
})
userSchema.methods.generateAuthtoken = function (){
    const token =jwt.sign({_id: this._id},process.env.JWT_SECRET)
    return token;
}
userSchema.methods.comparepassword = async function (passwaord) {
    return await bcrypt.compare(password,this.password);
}
userSchema.statics.hashPassword = async function (passwaord) {
    return await bcrypt.hash(passwaord,10);
}
const userModel = mongoose.model('user', userSchema);

module.exports = userModel;