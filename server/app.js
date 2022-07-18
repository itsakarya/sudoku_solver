const express = require("express");

const app = express();

app.use(express.static('public'))


app.get("/",(req,res)=>{
    console.log(req);
    res.sendFile(__dirname+"/public/index.html");
})


app.listen(5000,()=>{
    console.log("Server started at port 5000");
})