import os
import pandas as pd
from sklearn.ensemble import RandomForestRegressor
from sklearn.model_selection import train_test_split
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
import numpy as np
import joblib

# Load dataset
df = pd.read_csv(r"C:\Users\prana\OneDrive\Desktop\Documents\cibil-score-predictor\datasets\cibil_score_dataset.csv")

# Drop unused columns
X = df.drop(["Simulated_Credit_Score", "SSN", "Type_of_Loan"], axis=1)
y = df["Simulated_Credit_Score"]

# One-hot encode categorical variables
X_encoded = pd.get_dummies(X, columns=["Occupation", "Credit_Mix", "Payment_Behaviour"])

# Train-test split
X_train, X_test, y_train, y_test = train_test_split(X_encoded, y, test_size=0.2, random_state=42)

# Train model
model = RandomForestRegressor()
model.fit(X_train, y_train)

# Predict on test set
y_pred = model.predict(X_test)

# Evaluate model
r2 = r2_score(y_test, y_pred)
mae = mean_absolute_error(y_test, y_pred)
rmse = np.sqrt(mean_squared_error(y_test, y_pred))

print("\n📊 Credit Score Prediction Model Accuracy:")
print(f"R² Score: {r2:.4f}")
print(f"MAE     : {mae:.2f}")
print(f"RMSE    : {rmse:.2f}")

# ✅ Ensure model_files directory exists
os.makedirs("model_files", exist_ok=True)

# Save model and columns
joblib.dump(model, "model_files/credit_score_model.pkl")
joblib.dump(X_encoded.columns.tolist(), "model_files/credit_model_columns.pkl")

print("\n✅ Model training complete and saved.")
