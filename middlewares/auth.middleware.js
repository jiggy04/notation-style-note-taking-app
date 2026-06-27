const jwt = require('jsonwebtoken');
const User = require('../model/userModel');

const protect = async (req, res, next) => {
    try{
        const authHeader = req.headers.authorization;
        if(!authHeader || !authHeader.startsWith('Bearer '))
            {
                return res.status(401).json({message: 'Authorization denied'});

            }
            const token = authHeader.split(' ')[1];
            
            const decoded = jwt.verify(token, process.env.JWT_SECRET);
            

            const user = await User.findById(decoded.id).select('-password');

            if (!user) {
                return res.status(401).json({
                    message: 'User not found'
                });

            }
            req.user = user;
            console.log('Authenticated user:', user)
            next();
            
    } catch (error) {
       next(error)
    }
};

module.exports = protect;     