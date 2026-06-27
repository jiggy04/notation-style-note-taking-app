const express = require ('express');

const router = express.Router();

const {registerUser, loginUser} = require('../controllers/user.controller');
const {registerSchema, loginSchema} = require('../validation/user.validation');
const validate = require('../middlewares/validationMiddleware');


router.post('/register', validate(registerSchema), registerUser)

router.post('/login', validate(loginSchema), loginUser)





module.exports = router;