const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");



app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://knnhsn-zxt726:Salam123@cluster0.hffkb7r.mongodb.net/pro-r", {useNewUrlParser:true}, {useUnifiedTopology:true})

const proxSchema = {
    title: String,
    price: String
}

const Item = mongoose.model("Item", proxSchema);

app.get("/", function(req, res) {
res.sendFile(__dirname + "/index.html");
})


app.post("/", function(req, res) {
    let newItem = new Item({
        title: req.body.item,
        price: req.body.price
    });
    newItem.save();
    res.redirect("/");
})

app.listen(3000, function(){
    console.log("server is running, why are you running");
})
