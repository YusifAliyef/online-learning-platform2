const express = require("express");
const app = express();
require("dotenv").config();


app.use(express.json());         
app.use(express.urlencoded({ extended: true }));

app.use("/users", require("./routes/users.routes"));
app.use("/courses", require("./routes/courses.routes"));
app.use("/lessons", require("./routes/lessons.routes"));
app.use("/enrollments", require("./routes/enrollments.routes"));

const swaggerUi = require("swagger-ui-express");
const swaggerSpec = require("./config/swagger");

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

module.exports = app;
