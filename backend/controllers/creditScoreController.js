const { spawn } = require("child_process");
const path = require("path");

exports.predictCreditScore = (req, res) => {
    const userInput = JSON.stringify(req.body);
    const pyScript = path.join(__dirname, "..", "model_files", "predict_credit_score.py");

    const python = spawn("python", [pyScript, userInput]);

    let result = "";
    let errorOutput = "";

    python.stdout.on("data", (data) => {
        result += data.toString();
    });

    python.stderr.on("data", (data) => {
        errorOutput += data.toString();
    });

    python.on("close", (code) => {
        if (code !== 0 || errorOutput) {
            console.error(`❌ Python error: ${errorOutput}`);
            return res.status(500).json({ error: "Error while predicting credit score." });
        }

        try {
            const parsed = JSON.parse(result);
            res.json(parsed);
        } catch (err) {
            console.error("❌ Failed to parse Python output:", err);
            res.status(500).json({ error: "Failed to parse prediction result." });
        }
    });
};
