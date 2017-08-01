var express = require('express');
var path = require('path');
var app = express();
var fs = require('fs');
var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(__dirname));
var abspath = process.cwd() + "/students.json";
var port = process.env.PORT || 8080;
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + "/index.html"));
});
app.post('/students', function (req, res) {
    var message = null;
    fs.exists("./students.json", function (err, data) {
        if (!err) {
            message = err;
            res.json(message);
        }
        else {
            message = fs.readFileSync("./students.json", 'utf8');
            res.json(message);
        }
    });
});
app.listen(port);
console.log("Port is listening on " + port);