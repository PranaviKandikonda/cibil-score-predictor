const express = require("express");
const app = express();
const cors = require("cors");

const predictRoute = require("./routes/predictRoute"); // existing loan eligibility
const cibilRoute = require("./routes/creditScoreRoute"); // credit score prediction

app.use(cors());
app.use(express.json());

app.use("/api/predict", predictRoute);
app.use("/api/predict-cibil", cibilRoute);

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
