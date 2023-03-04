import UserModel from "../models/UserModel.js";


export const getAllUsers = async(req,res) => {
   try {
    const allUsers = await UserModel.find({})
    return res.status(200).json(allUsers)
   } catch (error) {
    console.log(error.message);
    return res.status(500).json("Internal server error")
   }
}
export const createUser = async(req,res) => {
    try {
        const newUser = await UserModel.create(req.body) 
          return res.status(201).json(newUser)
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
}
export const updateUser = async(req,res) => {
    try {
    const {userId} = req.params
    const user = await UserModel.findById(userId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const updateUser = await UserModel.findByIdAndUpdate(user._id,req.body,{new:true})
  return res.status(200).json(updateUser)
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
}

export const deleteUser = async(req,res) => {
   try {
    const {userId} = req.params
    const user = await UserModel.findById(userId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    const deleteUser = await UserModel.findByIdAndDelete(user._id)
  return res.status(200).json({message:"User deleted successfully"})
   } catch (error) {
    return res.status(500).json("Internal server error")
   }
}

export const getSingleUser = async(req,res) => {
    try {
        const {userId} = req.params
    const user = await UserModel.findById(userId)
    if(!user){
        return res.status(404).json({message:"User not found"})
    }
    return res.status(200).json(user)
    } catch (error) {
        return res.status(500).json("Internal server error")
    }
}