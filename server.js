const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');
/*app.set('view engine', 'ejs');*/



app.use(bodyParser.urlencoded({extended:true}));

mongoose.connect("mongodb+srv://knnhsn-zxt726:Salam123@cluster0.hffkb7r.mongodb.net/pro-r", {useNewUrlParser:true}, {useUnifiedTopology:true})

const proxSchema = {
    title: String,
    price: String,
    about: String
}

const Item = mongoose.model("Item", proxSchema);




app.post("/", function(req, res) {
    let newItem = new Item({
        title: req.body.title,
        price: req.body.price,
        about: req.body.about
    });
    newItem.save();
    res.redirect("/");
})

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
    })

/*app.get('/', (req, res) => {
    Item.find({}, function(err, items) {
        res.render('index', {
            itemList: items
        })
    })
})*/


app.listen(3000, function(){
    console.log("ok");
})
