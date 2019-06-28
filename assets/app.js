var express = require("express");
var path = require("path");
var app = express();
var PORT = 1337;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var reservations = [{
        routeName: "Cliff",
        name: "Cliff",
        phoneNum: "custumer phone number",
        email: "customer email",
        id: "reservation number"
    },
    {
        routeName: "Badri",
        name: "Badri",
        phoneNum: "custumer phone number",
        email: "customer email",
        id: "reservation number"
    }
];
// express
app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "homepage.html"));
});
app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
})
app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tblView.html"));
});
app.get('/reservations/:confirmation', function(req, res) {
    var chosen = req.params.reservations;
    console.log(chosen);
    for (var i = 0; i < reservations.length; i++) {
        if (chosen === reservations[i].routeName) {
            return res.json(reservations[i]);
        }
    }
    return res.json(false);
});
app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)

});