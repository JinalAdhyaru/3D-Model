const express = require('express');
const app = express();
const ejs = require("ejs");

app.set('view engine', 'ejs');
app.use(express.static("public"));

app.get("/",function(request,response) {
    response.render("index");
});

app.listen(3000,function() {
    console.log("Server started on port 3000.");
})
