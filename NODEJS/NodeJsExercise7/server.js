var express = require("express")
var app = express()

var port_no = 8001;

app.listen(port_no, () => {
    console.log(`Server running on Port: ${port_no}`);
});

app.get("/", (req, res, next) => {
    res.send("Hello World!");
});