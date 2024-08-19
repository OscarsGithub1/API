//mongodb+srv://oscar:<password>@cluster0.8azzn.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0

const express = require('express');

const app = express();
const connectedDB = require('./db.js');
connectedDB();
app.listen(3000, () => {
    console.log("app is running");
});
