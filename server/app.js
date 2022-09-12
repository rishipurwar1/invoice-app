const path = require("path");
const express = require("express");
const app = express();
var cors = require("cors");
const port = process.env.PORT || 5001;
const connectDB = require("./config/db");

// routes
const invoicesRoutes = require("./routes/invoices");
const userRoutes = require("./routes/users");

// Init Middleware
app.use(express.json({ extended: false }));
app.use(cors());

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// Connect Database
connectDB();

app.get("/api", (req, res) => {
  res.render("index");
});

app.use("/invoices", invoicesRoutes);
app.use("/user", userRoutes);

app.listen(port, () => {
  console.log("Server is started");
});
