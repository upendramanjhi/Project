const express = require("express");
const { model } = require("mongoose");
const mongoose = require("mongoose");
//let doc = "";

var router = express.Router();
const Employee = mongoose.model("Employee");

router.get("/", (req, res) => {
  res.render("employee/addOrEdit", {
    viewTitle: "Insert Employee",
  });
});

router.post("/", (req, res) => {
  insertRecord(req, res);
});

async function insertRecord(req, res) {
  var employee = new Employee();
  employee.fullName = req.body.fullName;
  employee.email = req.body.email;
  employee.mobile = req.body.mobile;
  employee.city = req.body.city;
  employee
    .save()
    .then(() => {
      res.redirect("employee/list");
    })
    .catch((err) => {
      console.log(err);
    });
}

router.get("/list", (req, res) => {
  findEmployees(req, res);
  // Employee.find()
  //   .then(() => {
  //     res.render("/employee/list");
  //   })
  //   .catch((err) => {
  //     console.log("Error fetching data from Database :" + err);
  //   });
  ///////////////////////////////////
  //     if (!err) {
  //       res.render("/employee/list", { list: doc });
  //     } else {
  //       console.log("Error fetching data from Database :" + err);
  //     }
  //   });
});
async function findEmployees(req, res) {
  const doc = await Employee.find();
  res.render("/employee/list", { item: doc });
  // .then(() => {
  //   console.log(doc);
  //   res.redirect("/employee/list", { list: doc });
  // })
  // .catch((err) => {
  //   console.log("Error fetching data from Database :" + err);
  // });
}
module.exports = router;
