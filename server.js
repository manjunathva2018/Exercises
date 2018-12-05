var http=require('http');
var express=require('express');

var app=express();
var path=require('path');

app.use(express.static('public'));

app.get('/cal',function(req,res){
    res.sendFile(path.join(__dirname+'/public/calculator.html'));
})

app.get('/',function(req,res){
    res.sendFile(path.join(__dirname+'/public/task.html'));
})

app.get('/task1',function(req,res){
    res.sendFile(path.join(__dirname+'/public/task1.html'));
})

app.get('/task2',function(req,res){
    res.sendFile(path.join(__dirname+'/public/task2.html'));
})

app.get('/task3',function(req,res){
    res.sendFile(path.join(__dirname+'/public/task3.html'));
})

app.get('/task4',function(req,res){
    res.sendFile(path.join(__dirname+'/public/task4.html'));
})

var server=app.listen(2000,function(){
    console.log('Server started at port 2000')
})