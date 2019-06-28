var express = require("express");
var path = require("path");
var app = express();
var PORT = 1337;
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
var reservations = [{
        routeName: "Cliff",
        name: "Cliff",
        phoneNum: "123456789",
        email: "example@gmail.com",
        id: "123"
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

app.get('/api/reservations', (req, res) => {
    res.json(reservations);
})

app.get("/reservations", function(req, res) {
    res.sendFile(path.join(__dirname, "reserve.html"));
    // const newReservation = req.body.name;
    // console.log(newReservation);
    // reservations.push(newReservation)
    // res.json(newReservation);
})

app.get("/tables", function(req, res) {
    res.sendFile(path.join(__dirname, "tblView.html"));
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`)

});