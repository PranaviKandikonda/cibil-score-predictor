import sys
import joblib
import json
import pandas as pd
import os

base_dir = os.path.dirname(__file__)
model = joblib.load(os.path.join(base_dir, "credit_score_model.pkl"))
model_columns = joblib.load(os.path.join(base_dir, "credit_model_columns.pkl"))

data = json.loads(sys.argv[1])
input_df = pd.DataFrame([data])

# Drop unused columns like during training
if "SSN" in input_df.columns:
    input_df.drop(columns=["SSN"], inplace=True)
if "Type_of_Loan" in input_df.columns:
    input_df.drop(columns=["Type_of_Loan"], inplace=True)

# One-hot encode
input_df = pd.get_dummies(input_df)

# Align columns
for col in model_columns:
    if col not in input_df.columns:
        input_df[col] = 0
input_df = input_df[model_columns]

predicted_score = model.predict(input_df)[0]

feedback = (
    "✅ Your score looks good! You're eligible for loans."
    if predicted_score >= 700
    else "⚠️ Your score is low. Consider reducing debt, paying EMIs on time, and lowering credit utilization."
)

print(json.dumps({
    "Predicted_Credit_Score": round(predicted_score, 2),
    "Feedback": feedback
}))
