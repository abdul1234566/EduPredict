import pandas as pd
import numpy as np

from app.utils.model_loader import model, features
from app.core.database import SessionLocal
from app.models.database_models import Prediction


def predict_student(data):

    db = SessionLocal()

    df = pd.DataFrame([data])
    df = df.reindex(columns=features, fill_value=0)

    prediction = model.predict(df)[0]
    probability = model.predict_proba(df)[0][1]

    prediction = int(prediction)
    risk_score = float(probability * 100)

    if risk_score < 30:
        level = "LOW"
    elif risk_score < 60:
        level = "MEDIUM"
    else:
        level = "HIGH"

    result = {
        "prediction": "AT RISK" if prediction == 1 else "NOT AT RISK",
        "risk_probability": round(risk_score, 2),
        "risk_level": level
    }

    # ----------------------------
    # SAVE TO DATABASE
    # ----------------------------

    try:
        record = Prediction(
            student_id=None,
            prediction=result["prediction"],
            risk_probability=result["risk_probability"],
            risk_level=result["risk_level"]
        )

        db.add(record)
        db.commit()

    except Exception as e:
        db.rollback()
        print("DB SAVE ERROR:", e)

    finally:
        db.close()

    return result