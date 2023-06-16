const express = require("express");
const router = express();

let {
  getAllAccounts,
  getAccountById,
  createAccount,
  deleteAccount,
  changeAccount,
  findByUsername,
} = require("./accounts.controllers");

router.get("/", getAllAccounts);
//get by id
router.get("/:accId", getAccountById);
//posting
router.post("/", createAccount);
//deleting
router.delete("/:accId", deleteAccount);

router.put("/:accId", changeAccount);

//find by user name
router.get("/findByUsername/:username", findByUsername);
module.exports = router;
