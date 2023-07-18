const express = require("express");
const cors = require("cors");
// const errorHandler = require("./app/middlewares/errorHandler");

const app = express();

var corsOptions = {
  origin: "http://localhost:8081",
};

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

// app.use(errorHandler);

const db = require("./app/models");
const Role = db.role;

db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and Resync Db");
  initial();
});

function initial() {
  Role.create({
    id: 1,
    name: "user",
  });

  Role.create({
    id: 2,
    name: "moderator",
  });

  Role.create({
    id: 3,
    name: "admin",
  });
}

require("./app/router/auth.routes")(app);
require("./app/router/user.routes")(app);

// simple route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to coffee application." });
});

const init = () => {
  app.listen(process.env.WEB_PORT, () =>
    console.log(`listening ${process.env.WEB_PORT}`)
  );
};

init();

// export default app;
