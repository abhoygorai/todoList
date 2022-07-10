const express = require("express");
const bodyParser = require("body-parser");
const date = require(__dirname + "/date.js");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

let Items = [];

app.get("/", function(req, res){
    day = date();
    res.render("list", {titleText: day, newListItem: Items});
});

app.post("/", function(req, res){
    let data = req.body.newInput; 
    console.log(data);

    Items.push(data);
    res.redirect("/");
});

app.listen(3000, function(req, res){
    console.log("server started in port 3000");
})