const express = require('express');
const path = require("path");
const cp = require("child_process");
const app = express();


app.get('/', function (req, res) {
  let pathOfFile = path.join(__dirname, 'index.html')
  res.sendFile(pathOfFile);
})

// app.get('/hello', function(req,res){
//     res.send("hey hello from my side")
// })

// app.get('/bye', function(req,res){
//     res.send("hey bye from my side")
// })

app.get('/details/:pin', function(req,res){
    // res.send(req.params.pin)
    let pin = req.params.pin;
    let result = cp.execSync(`node script ${pin}`)
    res.send(result);

})



app.listen(3000)
console.log("My server is running")