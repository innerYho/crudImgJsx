const express = require("express");
const routes = express.Router();
const uploads = require("../utils/handleStorage");
const { uploadFile } = require("../controllers/images.controller");

routes.post("/images/:campana/:metodo", uploads, uploadFile);

module.exports = routes;
