import { useState } from "react";
import axios from "axios";

export default function CreditScoreForm() {
  const [formData, setFormData] = useState({
    Age: "",
    Occupation: "",
    Annual_Income: "",
    Monthly_Inhand_Salary: "",
    Num_Bank_Accounts: "",
    Num_Credit_Card: "",
    Interest_Rate: "",
    Num_of_Loan: "",
    Type_of_Loan: "",
    Num_of_Delayed_Payment: "",
    Credit_Mix: "",
    Outstanding_Debt: "",
    Credit_Utilization_Ratio: "",
    Credit_History_Age: "",
    Total_EMI_per_month: "",
    Amount_invested_monthly: "",
    Payment_Behaviour: "",
    Monthly_Balance: ""
  });

  const [score, setScore] = useState(null);
  const [feedback, setFeedback] = useState("");
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const payload = { ...formData };
      // Convert numeric strings to actual numbers
      Object.keys(payload).forEach((key) => {
        if (!["Occupation", "Type_of_Loan", "Credit_Mix", "Payment_Behaviour"].includes(key)) {
          payload[key] = parseFloat(payload[key]);
        }
      });

      const res = await axios.post("http://localhost:5000/api/predict-cibil/predict-credit-score", payload);
      setScore(res.data.Predicted_Credit_Score);
      setFeedback(res.data.Feedback);
      setError("");
    } catch {
      setError("Server error. Try again.");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "600px", margin: "auto" }}>
      <h2>Predict Your Credit Score</h2>
      <form onSubmit={handleSubmit} style={{ display: "grid", gap: "10px" }}>
        {Object.keys(formData).map((key) => (
          <input
            key={key}
            type={["Occupation", "Type_of_Loan", "Credit_Mix", "Payment_Behaviour"].includes(key) ? "text" : "number"}
            name={key}
            placeholder={key.replace(/_/g, " ")}
            onChange={handleChange}
            required
          />
        ))}
        <button type="submit">Check Score</button>
      </form>
      {score && (
        <div style={{ marginTop: "20px" }}>
          <h3>Your Credit Score: {score}</h3>
          <p>{feedback}</p>
        </div>
      )}
      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
}
