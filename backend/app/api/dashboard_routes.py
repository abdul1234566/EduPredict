from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session

from app.core.database import get_db

from app.models.database_models import Prediction, User

from app.auth.dependencies import get_current_user



router = APIRouter(
    prefix="/dashboard",
    tags=["Dashboard"]
)





# =====================================
# GET ALL PREDICTION HISTORY
# ADMIN + TEACHER ONLY
# =====================================

@router.get("/predictions")
def get_predictions(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):


    if current_user.role not in ["admin", "teacher"]:
        raise HTTPException(
            status_code=403,
            detail="Access denied"
        )



    records = (
        db.query(Prediction)
        .order_by(
            Prediction.created_at.desc()
        )
        .all()
    )


    return records





# =====================================
# DASHBOARD STATISTICS
# ADMIN + TEACHER
# =====================================

@router.get("/stats")
def dashboard_stats(

    db: Session = Depends(get_db),

    current_user: User = Depends(get_current_user)

):


    if current_user.role not in ["admin", "teacher"]:

        raise HTTPException(
            status_code=403,
            detail="Access denied"
        )



    total = (
        db.query(Prediction)
        .count()
    )


    high = (
        db.query(Prediction)
        .filter(
            Prediction.risk_level=="HIGH"
        )
        .count()
    )


    medium = (
        db.query(Prediction)
        .filter(
            Prediction.risk_level=="MEDIUM"
        )
        .count()
    )


    low = (
        db.query(Prediction)
        .filter(
            Prediction.risk_level=="LOW"
        )
        .count()
    )



    return {


        "total_predictions": total,


        "high_risk": high,


        "medium_risk": medium,


        "low_risk": low


    }





# =====================================
# RISK TREND DATA
# ADMIN + TEACHER
# =====================================


@router.get("/trends")
def risk_trends(

    db: Session = Depends(get_db),

    current_user: User = Depends(get_current_user)

):


    if current_user.role not in ["admin","teacher"]:

        raise HTTPException(
            status_code=403,
            detail="Access denied"
        )



    predictions = (

        db.query(Prediction)

        .order_by(
            Prediction.created_at
        )

        .all()

    )



    trends = {}



    for item in predictions:


        if item.created_at:


            date = item.created_at.strftime(
                "%Y-%m-%d"
            )



            if date not in trends:


                trends[date] = {


                    "date": date,


                    "total":0,


                    "at_risk":0,


                    "safe":0


                }




            trends[date]["total"] += 1




            if item.prediction == "AT RISK":


                trends[date]["at_risk"] += 1



            else:


                trends[date]["safe"] += 1





    return list(trends.values())





# =====================================
# STUDENT PERSONAL DASHBOARD
# =====================================


@router.get("/my-predictions")
def my_predictions(

    db: Session = Depends(get_db),

    current_user: User = Depends(get_current_user)

):


    if current_user.role != "student":

        raise HTTPException(
            status_code=403,
            detail="Students only"
        )



    records = (

        db.query(Prediction)

        .filter(
            Prediction.student_id == current_user.id
        )

        .order_by(
            Prediction.created_at.desc()
        )

        .all()

    )



    return records