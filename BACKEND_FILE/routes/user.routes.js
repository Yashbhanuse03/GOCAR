const express = require('express');
const routes = express.Router();
const {body} = require("express-validator")



router.post('/register',[
    body('email'),isEmail(),withMessage('Invalid Email'),
    body('fullname.firstname'),islength({min:3,max:45}).withMessage('first name must be at least 3 character long'),
    body('password'),islength({min:6}),withMessage('Password must be 6 charaeter long')
],
userController.registerUser
)

module.exports = router;

