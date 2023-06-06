const express = require("express");
const app = express();
require("dotenv").config();
const userRouter = require("./userapi/userrouter");

app.use(express.json());

app.use("/api/users", userRouter);
app.listen(8080);