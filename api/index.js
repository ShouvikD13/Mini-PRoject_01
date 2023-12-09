const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());//JSON parser

app.post('/register',(req,res)=>{
    const {username,password}=req.body;
    res.json({requestData:{username,password}});
});

app.listen(4000);

//mongodb+srv://blog:team10@cluster0.ecwhyhx.mongodb.net/?retryWrites=true&w=majority