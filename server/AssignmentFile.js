// const fs=require('fs');

// const data=fs.readFileSync("Assingment.txt").toString();

// const users=[];
// const mydata=JSON.parse(data);

// for(let i = 0; i < mydata.length; i++) {
//     let obj = mydata[i];
//     if(obj.LogLevel=='error')
//     {
//        users.push(obj);
//     }
// }
// console.log(users);

const express= require('express');
var cors = require('cors')
const app=express();

app.use(cors())
app.use(express.json());
app.use(require('./Routes/Router'));
app.listen(8000,()=>{console.log(`listening at ${8000}`)})

