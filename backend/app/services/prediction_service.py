import pandas as pd

from app.utils.model_loader import model, features

from app.models.database_models import (
    Prediction,
    Alert
)



def predict_student(data: dict, db):


    # ==========================
    # PREPARE DATA
    # ==========================

    df = pd.DataFrame([data])


    df = df.reindex(
        columns=features,
        fill_value=0
    )



    # ==========================
    # MODEL PREDICTION
    # ==========================

    prediction = model.predict(df)[0]


    probability = model.predict_proba(df)[0][1]


    prediction = int(prediction)


    risk_score = float(
        probability * 100
    )



    # ==========================
    # RISK LEVEL
    # ==========================

    if risk_score < 30:

        level = "LOW"


    elif risk_score < 60:

        level = "MEDIUM"


    else:

        level = "HIGH"



    result = {

        "prediction":
            "AT RISK"
            if prediction == 1
            else "NOT AT RISK",


        "risk_probability":
            round(risk_score, 2),


        "risk_level":
            level

    }



    # ==========================
    # SAVE PREDICTION + ALERT
    # ==========================

    try:


        record = Prediction(

            student_id=data["student_id"],

            prediction=result["prediction"],

            risk_probability=float(
                result["risk_probability"]
            ),

            risk_level=result["risk_level"]

        )



        db.add(record)


        db.commit()


        db.refresh(record)



        # ==========================
        # CREATE ALERT IF HIGH RISK
        # ==========================


        if result["risk_level"] == "HIGH":


            # ==========================
            # TEACHER ALERT
            # ==========================

            teacher_alert = Alert(

                student_id=data["student_id"],

                recipient_role="teacher",

                message="Student is at high risk",

                alert_type="RISK"

            )



            # ==========================
            # STUDENT ALERT
            # ==========================

            student_alert = Alert(

                student_id=data["student_id"],

                recipient_role="student",

                message="Your prediction shows a high risk level. Please check your dashboard.",

                alert_type="RISK"

            )



            db.add(teacher_alert)

            db.add(student_alert)


            db.commit()



    except Exception as e:


        db.rollback()


        print(

            "DATABASE SAVE ERROR:",

            e

        )



    return result