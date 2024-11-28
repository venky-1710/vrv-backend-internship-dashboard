const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
const User = require("../models/userModel");
//handling registartion
const register = async (req, res) => {
    try{
        const {username, password, role} = req.body;
        const hashedPassword = await bcrypt.hash(password, 10);
    
        const newUser = new User({username, password:hashedPassword, role});
        await newUser.save();
        res.status(201).json({message: `User registered with username ${username}`});
        }
        catch(err){
            res.status(500).
            json({message: "Something went wrong"});
        };

};
//handling login

const login = async (req, res) => {
    try{
    const {username, password} = req.body;
    const user = await User.findOne({username });

    if (!user){
        return res.status(404).json({message: "User not found"});
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if(!isMatch){
        return res.status(400).json({message: "Invalid credentials"});

    }
    const token = jwt.sign({
        id: user._id, role:user.role
    },process.env.JWT_SECRET,{ expiresIn:"1h"});

    res.status(200).json({ token })
}catch(err){
    res.status(500).json({message: "Something went wrong"});
}

};

//handling logout
let tokenBlacklist = []; // Mock blacklist 


const logout = (req, res) => {
    try {
        const token = req.token; // Extracted from middleware

        
        tokenBlacklist.push(token);

        res.status(200).json({ message: "Successfully logged out" });
    } catch (error) {
        res.status(500).json({ message: "Logout failed", error: error.message });
    }
};


const isTokenBlacklisted = (token) => {
    return tokenBlacklist.includes(token);
};




module.exports = {register,login,logout,isTokenBlacklisted};