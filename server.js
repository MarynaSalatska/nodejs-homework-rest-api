const mongoose = require("mongoose");
// const NODE_VERSION = "16.14.2";
const app = require("./app");
const { DB_HOST } = process.env;

mongoose.set("strictQuery", true);

mongoose
  .connect(DB_HOST)
  .then(() => {app.listen(3000)})
  .catch((error) => {
    console.log(error.message);
    process.exit(1)
  });


// app.listen(3000, () => {
//   console.log("Server running. Use our API on port: 3000");
// });
