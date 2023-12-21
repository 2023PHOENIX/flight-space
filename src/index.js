//! PACKAGE REQUIREMENTS
const express = require("express");
const bodyParser = require("body-parser");

const { City } = require("./models/index");

// & LOCAL REQUIREDMENTS
const { PORT } = require("./config/serverConfig");

const startUpServer = async () => {
    const app = express();

    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // const respository = new CityRespository();
    // respository.createCity({ name: "new delhi" });
    app.listen(PORT, () => {
        console.log(`server started at ${PORT}`);
    });
};

startUpServer();
