var express = require("express"),
    bodyParser = require('body-parser');
var router = express.Router();

var port = process.env.PORT || 3000;



var path = __dirname + "/views/";

var app = express();
app.use(bodyParser.json());
var list = [];
var locations = [];
var map = {};
var index = 0;

router.use(function (req, res, next) {
    console.log("/" + req.method);
    next();
});
router.get("/", function (req, res) {
    res.sendFile(path + "index.html");
});

router.get("/map", function (req, res) {
    res.sendFile(path + "map.html");
});

app.use("/", router);

app.get("/listLocations", function (req, res, next) {
    locations = [];
    for (var i in map) {
        locations.push(map[i].location);
    }
    res.json(locations);
})
app.post("/pushLocation", function (req, res, next) {
    var result = req.body;
    map[result.user] = result;
    res.json({
        status: true,
        values: map
    });
})

app.use("*", function (req, res) {
    list.push("Yo, what are you doing back here?")
    res.json(list);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});