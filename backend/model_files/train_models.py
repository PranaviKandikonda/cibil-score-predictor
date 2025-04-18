# train_models.py
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from sklearn.preprocessing import LabelEncoder
from sklearn.metrics import r2_score, mean_absolute_error, mean_squared_error
import joblib
import os

# Load your dataset
df = pd.read_csv(r"C:\Users\prana\OneDrive\Desktop\Documents\cibil-score-predictor\datasets\loan_dataset.csv")

# Encode Loan_Type
le = LabelEncoder()
df['Loan_Type_Encoded'] = le.fit_transform(df['Loan_Type'])
joblib.dump(le, 'loan_type_encoder.pkl')

# Create a directory to store models
os.makedirs("models", exist_ok=True)

# Train a model for each loan type on eligible users only
for loan_type in df['Loan_Type'].unique():
    eligible_data = df[(df['Loan_Type'] == loan_type) & (df['Eligibility'] == 'Yes')]

    if not eligible_data.empty:
        X = eligible_data[['CIBIL_Score']]
        y = eligible_data['Loan_Amount']

        model = LinearRegression()
        model.fit(X, y)

        joblib.dump(model, f'models/model_{loan_type}.pkl')

        # Predict and evaluate
        y_pred = model.predict(X)
        r2 = r2_score(y, y_pred)
        mae = mean_absolute_error(y, y_pred)
        rmse = np.sqrt(mean_squared_error(y, y_pred))

        print(f"\n📊 Loan Type: {loan_type}")
        print(f"R² Score: {r2:.4f}")
        print(f"MAE     : {mae:.2f}")
        print(f"RMSE    : {rmse:.2f}")

print("✅ Training complete. Models saved for eligible users only.")
