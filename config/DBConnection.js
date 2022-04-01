const mongoose = require("mongoose");
require("dotenv").config({ path: "./.env" });
// const _DBUrl = process.env.DB;
// const _DBUrl = "http://localhost:5000/";

// mongoose
//   .connect(_DBUrl, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
mongoose
  .connect(
    "mongodb+srv://naturalganic:naturalaman@cluster0.19l3w.mongodb.net/db-name?retryWrites=true&w=majority"
    // {
    //   // user: process.env.MONGO_USER,
    //   // user: db - name,
    //   // pass: process.env.MONGO_PASSWORD,
    //   // pass: naturalaman,
    //   useNewUrlParser: true,
    //   useUnifiedTopology: true,
    // }
  )
  .then(() => console.log("Connected Successful"))
  .catch((err) => console.log(`Connection failed ! Error : ${err}`));
