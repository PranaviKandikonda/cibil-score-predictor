import pandas as pd
import numpy as np

def simulate_credit_score(row):
    score = 300
    score += (row['Credit_History_Age'] * 1.2)
    score += (row['Monthly_Balance'] / 1000) * 2
    score += (row['Amount_invested_monthly'] / 1000) * 1.5
    score -= (row['Num_of_Delayed_Payment'] * 5)
    score -= (row['Credit_Utilization_Ratio'] * 0.8)
    score -= (row['Outstanding_Debt'] / 10000) * 2
    score -= (row['Interest_Rate'] * 1.0)
    score -= (row['Total_EMI_per_month'] / 1000) * 2
    score += max(0, 5 - abs(row['Num_Bank_Accounts'] - 4)) * 2
    score += max(0, 3 - abs(row['Num_Credit_Card'] - 3)) * 2
    credit_mix_score = {'Good': 20, 'Standard': 10, 'Bad': -10}
    score += credit_mix_score.get(row['Credit_Mix'], 0)
    if 'Low_spent' in row['Payment_Behaviour']:
        score -= 10
    elif 'High_spent' in row['Payment_Behaviour']:
        score += 10
    return round(np.clip(score, 300, 900))

# Load your dataset
df = pd.read_csv(r"C:\Users\prana\OneDrive\Desktop\Documents\cibil-score-predictor\datasets\cibil_score_dataset.csv")

# Generate and add the credit score
df["Simulated_Credit_Score"] = df.apply(simulate_credit_score, axis=1)

# Save the new dataset
df.to_csv(r"C:\Users\prana\OneDrive\Desktop\Documents\cibil-score-predictor\datasets\cibil_score_dataset.csv", index=False)
