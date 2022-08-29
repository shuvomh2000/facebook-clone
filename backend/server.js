const express = require("express");
const mongoose = require("mongoose");
const { readdirSync } = require("fs");
const cors = require("cors");
const dotenv = require("dotenv");

const app = express();

// middleware
app.use(cors());
app.use(express.json());
dotenv.config();

// database
mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(() => {
  console.log("DB Connected");
});
// mongoose.connect(process.env.MONGODB_CONNECTION_URL).then(()=>{
//   console.log('DB Connected')
// })

// routes
readdirSync("./routes").map((f) => app.use("/", require("./routes/" + f)));

// ENV
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
