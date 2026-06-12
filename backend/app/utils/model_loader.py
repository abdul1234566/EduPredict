import joblib
import os


MODEL_PATH = "ml_models/edupredict_xgb_final.pkl"
FEATURES_PATH = "ml_models/features.pkl"



model = joblib.load(MODEL_PATH)

features = joblib.load(FEATURES_PATH)



print("ML MODEL LOADED")
print("FEATURE COUNT:", len(features))