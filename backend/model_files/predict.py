# predict.py
import sys
import joblib
import json
import os
import pandas as pd

# Constants
ELIGIBILITY_THRESHOLD = 700
BASE_DIR = os.path.dirname(__file__)  # Directory of the script

# Get CIBIL score from CLI args
cibil_score = int(sys.argv[1])

# Check eligibility
if cibil_score < ELIGIBILITY_THRESHOLD:
    result = {
        "CIBIL_Score": cibil_score,
        "Eligible": False,
        "Message": "❌ Not eligible for any loans. Your CIBIL score must be 700 or above."
    }
    print(json.dumps(result))
    sys.exit(0)

# Load encoder
encoder_path = os.path.join(BASE_DIR, "loan_type_encoder.pkl")
loan_type_encoder = joblib.load(encoder_path)

# Loop through saved models
eligible_loans = []
model_dir = os.path.join(BASE_DIR, "models")
for file in os.listdir(model_dir):
    if file.endswith(".pkl"):
        loan_type = file.replace("model_", "").replace(".pkl", "")
        model_path = os.path.join(model_dir, file)
        model = joblib.load(model_path)

        input_df = pd.DataFrame([[cibil_score]], columns=["CIBIL_Score"])
        predicted_amount = model.predict(input_df)[0]

        eligible_loans.append({
            "Loan_Type": loan_type,
            "Estimated_Amount": round(predicted_amount, 2)
        })

# Return results
result = {
    "CIBIL_Score": cibil_score,
    "Eligible": True,
    "Eligible_Loans": eligible_loans
}
print(json.dumps(result))
