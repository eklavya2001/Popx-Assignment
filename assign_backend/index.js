const express = require("express");

const cors = require("cors");
const app = express();
const path = require("path");

const port = 3000;

const connectToDb = require("./db");
const router = require("./routes/userRoute");

connectToDb();

app.use(
  cors({
    origin: "http://localhost:5173", // Your frontend URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true, // Required for cookies/sessions
  })
);

app.use(express.json());

app.use(express.urlencoded({ extended: false })); // Parse URL-encoded bodies

app.use("/user", router);

app.listen(port, () => {
  console.log(`server is running on PORT :  ${port}`);
});
