var express = require("express");
var path = require("path");

var app = express();
var PORT = 1337;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// var reservations = [{
//     routeName: "reservations",
//     name: "customer name",
//     phoneNum: "custumer phone number",
//     email: "customer email",
//     id: "reservation number"
// }];

app.get('/', function(req, res) {
    res.sendFile(__dirname, 'tblView.html')
})
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)
})