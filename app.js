const express = require('express');
const app = express();
app.listen(8010);

app.use('/',(req,res,next)=>{
  console.log("Hello Express.js");
  res.send(`<h1>Hello Express</h1>`);
});