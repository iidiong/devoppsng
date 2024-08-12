const express = require("express");
const app = express();
const path = require('path');

// app.use(express.static("public"))
app.use(express.static(path.join(__dirname, 'public')))
// app.get("/", (req, res) => res.sendFile(__dirname + "/index.html"))
// app.get("/cropsfarm", (req, res) => res.sendFile(__dirname + "/cropsfarm.html"))
// app.get("/livestock", (req, res) => res.sendFile(__dirname + "/livestockfarm.html"))

    // / Users / idongidiong / Documents / Web - Development / devoppsng / public / livestockfarm.html


app.get('/', (req, res) => {
    res.sendFile('index.html');
});

app.get('/cropsfarm', (req, res) => {
    res.sendFile(__dirname + "/cropsfarm.html")
});
app.get('/livestockfarm', (req, res) => {
    res.send('livestockfarm.html');
});
app.get('/contact', (req, res) => {
    res.send('contact.html');
});
let port = process.env.PORT;
if (port == null || port == "") {
    port = 3000;
}

app.listen(port, () => console.log("App is listening on port 3000"))