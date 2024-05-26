const express = require("express");
const authRoutes = require("./routes/authRoutes");
// const bookRoutes = require("./routes/bookRoutes");
require("dotenv").config();

const app = express();

app.use(express.json());

app.use("/auth", authRoutes);
// app.use("/books", bookRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
