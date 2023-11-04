const express = require('express');
const router = express.Router();
// const modelContact = require('../../models/contacts');
const jwt = require ('jsonwebtoken');
const passport = require('passport');
const User  = require('../../service/schemas/user');
require('dotenv').config();

const secret = process.env.SECRET;

const auth = (req, res, next) => {
    passport.authenticate('jwt', {session:false}, (err, user)=>{
        if(!user || err){
            return res.status(401).json({
                status:'error',
                code:401,
                message:'Unauthrized',
                data:'Unauthorized'
            })
        }
        req.user = user;
        next()
    })(req,res, next)
};

router.post('/users/signup', async (req, res, next)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});
    if (user){
        return res.status(409).json({
            status: 'error',
            code:409,
            message: 'Email in use',
            data:'conflict'
        })
    }
    try{
        const newUser = new User({email})
        newUser.setPassword(password);
        await newUser.save();
        res.status(201).json({
            status:'success',
            code: 201,
            data:{
                email: email,
                "subscription":'starter',
                message:'Registration was successful'
            }
        })
    }catch(e){
        console.log(e.message);
        next(e);
    }
})

router.post('/users/login', async (req, res, next)=>{
    const {email, password} = req.body;
    const user = await User.findOne({email});

    if(!user || !user.validPassword(password)){
        return res.status(401).json({
            status:'error',
            code:401,
            message:'Email or password is wrong'

        })
    }
    const payload = {
        id: user.id,
        email: user.email
    }

    const token = jwt.sign(payload, secret, {expiresIn:'1h'})
    res.json({
        status:'success',
        code:200,
        data:{token}
    })
})
router.get('/list', auth, async (req,res,next) => {
    const {_id} = req.user;
    const user =  await User.findOne({_id})
    if(!user){
        return res.status(401).json({
            status:'error',
            code:401,
            message:'not authorized'

        })
    }
    res.json({
        status:'success',
        code:200,
        data:{
            message:'Authorization Successful'
        }
    })

})
router.delete('/users/logout', async (req, res, next)=>{
    const {_id} = req.user;
    const user = await User.findOne({_id});
    if (!user){
        return res.status(401).json({
            status:'error',
            code:401,
            message:'not authorized'
        })
    }
    res.json({
        status:success,
        code:204
    })
})

module.exports = router;

