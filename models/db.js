const mongoose = require("mongoose");

// mongoose.connect(
//   "mongodb://localhost:27017/EmployeeDB",
//   { useNewUrlParser: true },
//   (err) => {
//     if (!err) {
//       console.log("MongoDb connection Success");
//     } else {
//       console.log("Error is ", err);
//     }
//   }
// );

mongoose
  .connect("mongodb://localhost:27017/EmployeeDB")
  .then(console.log("connected to mongoDB"))
  .catch((err) => {
    console.log(err);
  });

require("./employee.model");
