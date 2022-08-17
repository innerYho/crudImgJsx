const express = require("express");
const mysql = require("mysql2");
const conn = require("express-myconnection");
const cors = require("cors");
const path = require("path");
const routesGeneral = require("./routes/general.routes");
// const routesUpload = require("./routes/img.routes");

const app = express();
app.set("port", process.env.PORT || 9369);
const dbConfig = {
  host: "localhost",
  port: "3306",
  user: "devuser",
  // user: "root",
  // password: "",
  password: "DevUser$",
  database: "img_dbs",
};

// middleware
app.use(conn(mysql, dbConfig, "single"));
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, "../../public/")));

// routes
app.use("/", routesGeneral);
// app.use("/server", require("./src/routes/default.route"));
app.use("/upload", require("./routes/img.routes"));

// port listen
app.listen(app.get("port"), () => {
  console.log("server running on port", app.get("port"));
});
