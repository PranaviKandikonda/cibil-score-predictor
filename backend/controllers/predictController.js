const { spawn } = require("child_process");
const path = require("path");

exports.predictLoans = (req, res) => {
  const { cibilScore } = req.body;

  const pyScript = path.join(__dirname, "..", "model_files", "predict.py");
  const pythonProcess = spawn("python", [pyScript, cibilScore]);

  let result = "";
  let errorOccurred = false;

  pythonProcess.stdout.on("data", data => {
    result += data.toString();
  });

  pythonProcess.stderr.on("data", err => {
    console.error("❌ Python error:", err.toString());
    errorOccurred = true;
  });

  pythonProcess.on("close", code => {
    if (errorOccurred) {
      return res.status(500).json({ error: "Python script failed." });
    }
    try {
      const parsed = JSON.parse(result);
      res.json(parsed);
    } catch (err) {
      console.error("❌ Failed to parse JSON:", err);
      res.status(500).json({ error: "Invalid response from Python script." });
    }
  });
};
