/**
 * Created by Aparna on 5/24/2015.
 */

var http = require('http');
var express = require('express');
var app=express();

//app.all('/*', function (req, res, next) {
//    res.header("Access-Control-Allow-Origin", "*");
//    res.header("Access-Control-Allow-Headers", "Cache-Control, Pragma, Origin, Authorization, Content-Type, X-Requested-With");
//    res.header("Access-Control-Allow-Methods", "GET, PUT, POST");
//    res.header("Expires", "-1");
//    return next();
//});

app.use('/css', express.static(__dirname + '/css'));
app.use('/js', express.static(__dirname + '/js'));
app.use('/view', express.static(__dirname + '/view'));
app.use('/img', express.static(__dirname + '/img'));
app.use('/', express.static(__dirname + '/'));
app.get("/test", function (req, res) {
    res.send('Node App Working Correctly');

});

app.get('/index', function (req, res) {
    res.sendFile(__dirname +'/index.html');
});
//app.get('/index', express.static( __dirname + '/'), function (req, res, next) {
//    console.log('On Route "/index"');
// //   res.sendFile(__dirname +'/index.html');
//    next();
//});
http.createServer(app).listen(8000);
    console.log("Created Server at port 8000");
