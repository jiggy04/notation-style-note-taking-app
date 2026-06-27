const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../model/userModel');


const generateToken = (user) => {
    return jwt.sign({id: user._id}, process.env.JWT_SECRET, {expiresIn: '7d'});
}

const registerUser = async (req, res, next) => {
    try {
        const {name, email, password} = req.body;

        if(!name || !email || !password) {
            return res.status(400).json({success: false,
                message: 'Please enter all fields'});
        }

        // Check if user already exists
        const userExists = await User.findOne({email});
        if (userExists) {
            return res.status(400).json({success: false, message: 'User already exists'});
        }

        // Hash password
        const salt = await bcrypt.genSalt(12);
        const hashedPassword = await bcrypt.hash(password, salt);

        // Create user
        const user = await User.create({
            name,
            email,
            password: hashedPassword
        });

        // Generate token
        const token = generateToken(user);

        res.status(201).json({name: user.name, success: true, token, user: {id: user._id, email: user.email}});
    } catch (error) {
        next(error);  
    }
};

const loginUser = async (req, res, next) => {
    try {
        const {email, password} = req.body;

        if(!email || !password) {
            return res.status(400).json({success: false, message: 'Please enter all fields'});
        }

        // Check if user exists
        const user = await User.findOne({email});
        if (!user) {
            return res.status(400).json({success: false, message: 'Invalid credentials'});
        }

        // Check password
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({success: false, message: 'Invalid credentials'});
        }

        // Generate token
        const token = generateToken(user);

        res.status(200).json({name: user.name, success: true, token, user: {id: user._id, email: user.email}});
    } catch (error) {
        console.error(error);
        next(error);
    }
};

module.exports = {registerUser, loginUser};