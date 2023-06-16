let accounts = require("../../accounts");
//get all account value
const getAllAccounts = (req, res) => {
  console.log("Giving all accounts details....");
  return res.status(200).json(accounts);
};

const getAccountById = (req, res) => {
  const { accId } = req.params;
  let foundAccount = accounts.find((acc) => acc.id == accId);
  if (!foundAccount) return res.status(404).json({ message: "Not found" });
  return res.status(200).json(foundAccount);
};

const createAccount = (req, res) => {
  const accId = accounts[accounts.length - 1].id + 1;
  const value = req.body;
  accounts.push({
    id: accId,
    ...value,
    funds: 0,
  });
  console.log(value);
  return res.status(201).json(accounts);
};

const deleteAccount = (req, res) => {
  const { accId } = req.params;
  if (!accounts.find((a) => a.id == accId)) {
    return res.status(404).json({ message: "not found" });
  }
  accounts = accounts.filter((account) => account.id != accId);
  return res.status(200).json(accounts);
};

const changeAccount = (req, res) => {
  const { accId } = req.params;
  accounts.forEach((account) => {
    if (account.id == +accId) {
      for (key in account) {
        if (key != "id") account[key] = req.body[key];
      }
    }
  });
  return res.status(201).json(accounts);
};

const findByUsername = (req, res) => {
  const { username } = req.params;
  let { currency } = req.query;

  console.log(username);
  console.log(currency);
  const foundAccount = accounts.find(
    (account) => account.username.toUpperCase() == username.toUpperCase()
  );
  if (currency) foundAccount.funds = foundAccount.funds + ` ${currency}`;
  if (!foundAccount) return res.status(200).json({ message: "Not found" });
  return res.status(201).json(foundAccount);
};

module.exports = {
  getAllAccounts,
  getAccountById,
  createAccount,
  deleteAccount,
  changeAccount,
  findByUsername,
};
