var express = require("express");
var bodyParser = require("body-parser");
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
var items = require("../database-mongo");
var path = require("path");

var app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + "/../react-client/dist"));

// app.get("/items", function(req, res) {
//   items.selectAll(function(err, data) {
//     if (err) {
//       res.sendStatus(500);
//     } else {
//       res.json(data);
//     }
//   });
// });

// to make the react-router-dom render different paths
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/../react-client/dist", "index.html"));
});
app.listen(3000, function() {
  console.log("listening on port 3000!");
});
