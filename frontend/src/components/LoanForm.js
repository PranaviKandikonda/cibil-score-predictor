import React, { useState } from "react";
import axios from "axios";

const LoanForm = () => {
  const [cibilScore, setCibilScore] = useState("");
  const [result, setResult] = useState(null);
  const [error, setError] = useState("");

  const handleSubmit = async e => {
    e.preventDefault();
    setError("");
    setResult(null);

    if (!cibilScore || isNaN(cibilScore)) {
      setError("Please enter a valid CIBIL score.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/api/predict", {
        cibilScore: parseInt(cibilScore),
      });
      setResult(response.data);
    } catch (err) {
      setError("Server error. Try again.");
    }
  };

  return (
    <div style={{ maxWidth: 600, margin: "2rem auto", textAlign: "center" }}>
      <h2>Loan Eligibility Checker</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="number"
          placeholder="Enter CIBIL Score"
          value={cibilScore}
          onChange={(e) => setCibilScore(e.target.value)}
          min="100"
          max="900"
          required
          style={{ padding: "10px", width: "60%" }}
        />
        <button type="submit" style={{ padding: "10px 20px", marginLeft: "10px" }}>
          Check Eligibility
        </button>
      </form>

      {error && <p style={{ color: "red", marginTop: "1rem" }}>{error}</p>}

      {result && (
        <div style={{ marginTop: "2rem", textAlign: "left" }}>
          <h3>Result for CIBIL Score: {result.CIBIL_Score}</h3>
          {result.Eligible ? (
            <div>
              <h4>✅ Eligible Loans:</h4>
              <ul>
                {result.Eligible_Loans.map((loan, idx) => (
                  <li key={idx}>
                    <strong>{loan.Loan_Type}</strong>: ₹{loan.Estimated_Amount.toLocaleString()}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <p style={{ color: "red" }}>❌ {result.Message}</p>
          )}
        </div>
      )}
    </div>
  );
};

export default LoanForm;
