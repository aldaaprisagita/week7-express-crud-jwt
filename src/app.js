const express = require("express");
const app = express();
require("dotenv").config();

const authRoutes = require("./routes/authRoutes");
const carRouter = require("./routers/carRouter");

app.use(express.json());
app.use("/auth", authRoutes);
app.use("/cars", carRouter);

app.listen(3000, () => console.log("Server running on http://localhost:3000"));
