const express = require('express');
const routes = express.Router()

const defaultController = require("../controllers/general.controller");

routes.get("/search/:tabla/:name/:value", defaultController.search);
routes.get(
    "/searchAll/:tabla/:nameUno/:value1/:value2/:nameDos/:value3/:nameTres/:value4/:nameCuatro/:value5",
    defaultController.searchAll
);
routes.get(
    "/uniqueColumn/:column/:tabla/:name/:value",
    defaultController.uniqueColumn
);
// routes.post("/login", loginController.login);
routes.post("/create/:tabla", defaultController.create);
routes.post("/createGeneral/:tabla", defaultController.createGeneral);
routes.put("/update/:tabla/:name/:value", defaultController.update);
routes.delete("/delete/:tabla/:name/:value", defaultController.delete);

module.exports = routes;
