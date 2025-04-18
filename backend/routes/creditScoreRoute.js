const express = require("express");
const router = express.Router();
const { predictCreditScore } = require("../controllers/creditScoreController");

router.post("/predict-credit-score", predictCreditScore);

module.exports = router;
