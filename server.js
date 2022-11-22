const express = require("express");
const app = express();
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');
const { application } = require("express");
const path = require("path");

app.set('view engine', 'ejs');



app.use(express.static(__dirname + '/views'));
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
    res.redirect("/admin");
})

/*app.get("/", function(req, res) {
    res.sendFile(__dirname + "/public/adddata.html");
    })*/

app.get('/', (req, res) => {
    Item.find({}, function(err, items) {
        res.render('pages/index', {
            itemList: items
        })
    })
})

app.get('/admin', (req, res) => {
    res.render('pages/admin')
})

app.get('/addcategories', (req, res) => {
    res.render('pages/addcategories')
})


app.listen(3000, function(){
    console.log("ok");
})
