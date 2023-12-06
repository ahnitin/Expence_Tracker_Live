//expence-tracker-live
const express = require("express");
const app = express();
const cors = require("cors");

const userRoutes = require("./routes/user.js");

app.use(express.urlencoded({extended:false}))
app.use(cors());
app.use(express.json());

