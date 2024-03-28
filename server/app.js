const express = require("express");
const collection = require("./Mongo")
const app = express();
app.use(express.json);
app.use(express.urlencoded({extends:true}));




app.post("/", async(req,res)=>{
    
    const username = req.body.username;
    const email = req.body.email;
    const message = req.body.message;
   
        await collection.insertMany([username,email,message])
})

app.listen(8080,()=>{
    console.log("portconnected")
})