const express =  require("express");
const bodyParser = require("body-parser");
const date = require(__dirname+"/date.js");

const app = express();
var items=[];

app.set("view engine","ejs");
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/",function(req,res){
    
    const day=date();
    res.render("list",{typeOfDay: day , newListItems: items});
}); 

app.post("/",function(req,res){ //getting data back to server
    var item = req.body.newItem; //here newItem is the name of input field in the form
    items.push(item);
    console.log(items);
    res.redirect("/");
});

app.get("/about",function(req,res){
    res.render("about");
});

app.listen(3000,function(){
    console.log("Server started on port 3000.");
});