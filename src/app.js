// src/app.js
const express = require("express");
const app = express();
require("dotenv").config();

// Middleware
app.use(express.json());

// Routes
app.use("/users", require("./routes/users.routes"));
app.use("/courses", require("./routes/courses.routes"));
app.use("/lessons", require("./routes/lessons.routes"));
app.use("/enrollments", require("./routes/enrollments.routes"));

module.exports = app;
