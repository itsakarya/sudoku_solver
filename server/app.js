const express = require("express");
const dotenv = require("dotenv")
dotenv.config();
const app = express();

app.use(express.static('public'))


app.get("/",(req,res)=>{
    console.log(req);
    res.sendFile(__dirname+"/public/index.html");
})

const PORT = process.env.PORT||5000
app.listen(PORT||5000,()=>{
    console.log(`Server started at port ${PORT}`);
})