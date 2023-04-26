const express = require('express');
const { databaseConnection } = require('../config/database');
const app = express();
const port = 3030;

databaseConnection();

app.get("/", (req, res) => {
    res.send("Application");
});

app.listen(port, () => console.log(`Server is listening on port: ${port}`));