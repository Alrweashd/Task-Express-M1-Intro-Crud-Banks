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

//to start listening
app.listen(PORT, () => {
  console.log(`Runinng Crud Bank on ${PORT}`);
});

//get all account value

app.get("/accounts", (req, res) => {
  console.log("Giving all accounts details....");
  return res.status(200).json(accounts);
});
//get by id
app.get("/accounts/:accId", (req, res) => {
  const { accId } = req.params;
  let foundAccount = accounts.find((acc) => acc.id == accId);
  if (!foundAccount) return res.status(404).json({ message: "Not found" });
  return res.status(200).json(foundAccount);
});
//posting
app.post("/accounts", (req, res) => {
  const accId = accounts[accounts.length - 1].id + 1;
  const value = req.body;
  accounts.push({
    id: accId,
    ...value,
    funds: 0,
  });
  console.log(value);
  return res.status(201).json(accounts);
});
//deleting
app.delete("/accounts/:accId", (req, res) => {
  const { accId } = req.params;
  if (!accounts.find((a) => a.id == accId)) {
    return res.status(404).json({ message: "not found" });
  }
  accounts = accounts.filter((account) => account.id != accId);
  return res.status(200).json(accounts);
});
