const express = require('express');
const router = express.Router();

router.post('/Getdata', async (req, res) => { 
       const mydata=req.body;
       console.log(mydata);
       const users=[];
         for(let i = 0; i < mydata.length; i++)
          {   let obj = mydata[i];
              if(obj.LogLevel=='error' || obj.LogLevel=='warn' )
              {
                 users.push(obj);
              }
          }
        console.log(users);
        return res.send({users:users});
})
module.exports = router;