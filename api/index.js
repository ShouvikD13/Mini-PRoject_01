const express = require('express');
const cors = require('cors');
const { default: mongoose } = require('mongoose');
const User = require('./models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const app = express();
const salt = bcrypt.genSaltSync(10);
const secret = '0h4rj4nV41llyN30P43r50dk3G4nd4ss1M4r1';

app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(express.json());//JSON parser
app.use(cookieParser());//Cookie parser

mongoose.connect('mongodb+srv://blog:team10@cluster0.ecwhyhx.mongodb.net/?retryWrites=true&w=majority');

app.post('/register', async (req,res)=>{
    const {username,password}=req.body;
    try{
        const userDoc = await User.create({username,
            password:bcrypt.hashSync(password,salt),});
        res.json(userDoc);
    } catch (e){
        res.status(400).json(e);
    }
   
});

app.post('/login',async(req,res)=>{
    const {username,password} = req.body;
    const userDoc = await User.findOne({username});
    const passOK = bcrypt.compareSync(password,userDoc.password);
    if (passOK){
        //logged in
        jwt.sign({username,id:userDoc._id}, secret,{},(err,token)=>{
            if (err) throw err;
            res.cookie('token',token).json({
                id:userDoc._id,
                username,
            });
        });
    } else {
        res.status(400).json('Wrong Username or Password');
    }
})

app.get('/profile', (req,res)=>{
   const {token} = req.cookies;
   jwt.verify(token, secret,{},(err,info)=>{
    if (err) throw err;
    res.json(info);
   });
   res.json(req.cookies);
});

app.post('/logout', (req,res)=>{
    res.cookie('token', '').json('ok');
})

app.listen(4000);

