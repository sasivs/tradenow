const express = require("express");

const app = express();

const path = require("path");

const tradenow_dir = path.resolve(__dirname, '..');

app.use('/static', express.static(path.join(tradenow_dir, 'public')));

app.get("/", function(req,res){
    res.sendFile(tradenow_dir+'/public/index.html');
})

app.listen(3000, function(){
    console.log("Server is active");
});