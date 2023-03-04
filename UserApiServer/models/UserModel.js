import mongoose from 'mongoose'

var userSchema = new mongoose.Schema({
    name:String,
    gender:String,
    city:String,
    dob:String,
    pincode:String,
    state:String,
},{
    timestamps:true
});




const UserModel = mongoose.model('User', userSchema);

export default UserModel