const router = require("express").Router();
const Transaction = require("../models/transaction.js");

// route to post the individual transaction and create a document/record into 'transactions' collection
router.post("/api/transaction", ({body}, res) => {
  Transaction.create(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// route to insert bulk records into MongoDB 'transactions' collection
// This is to load the transaction records stored on the client side (indexDB), when the application was offline.
router.post("/api/transaction/bulk", ({body}, res) => {
  console.log("Body Data", JSON.stringify(body));
  Transaction.insertMany(body)
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

// get api route to get all the transactions from the mongoDB sorted descing by date
router.get("/api/transaction", (req, res) => {
  Transaction.find({}).sort({date: -1})
    .then(dbTransaction => {
      res.json(dbTransaction);
    })
    .catch(err => {
      res.status(404).json(err);
    });
});

module.exports = router;