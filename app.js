//importing data
let accounts = require("./accounts");
//port number
const PORT = 8000;
//to import express
const express = require("express");
//to create a cicyle
const app = express();
//Allowing body
app.use(express.json());
//refactoring
const accountRoutes = require("./api/accounts/accounts.routes");
//use it

//to start listening
app.listen(PORT, () => {
  console.log(`Runinng Crud Bank on ${PORT}`);
});

//get all account value
app.use("/accounts", accountRoutes);
