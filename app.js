const express=require("express");
const parser=require("body-parser");
const app=express();

app.use(parser.urlencoded({extended: true}));
app.use(express.static("public"));

app.set('view engine','ejs');

var today=new Date();
const options={
    weekday:"long",
    month: "long",
    day:"numeric",
    year:"numeric",
};

var day=today.toLocaleDateString("en-US",options);

const items=["apple","mango","guava"];
const workitems=["Afl","Os"];

app.get("/",(req,res)=>{
    res.render('todo',{days:day,item:items});
});

app.post("/",(req,res)=>{
    const item=req.body.item;
    items.push(item);
    res.redirect("/");
});

app.get("/work",(req,res)=>{
    res.render('work-todo',{days:day,item:workitems});
});

app.post("/work",(req,res)=>{
    const item=req.body.item;
    workitems.push(item);
    res.redirect("/work");
});

app.listen(3000,function(){
    console.log("Getting on 3000");
});