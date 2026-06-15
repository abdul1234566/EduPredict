from fastapi import APIRouter, Depends

from sqlalchemy.orm import Session

from app.schemas.student_schema import StudentData

from app.services.prediction_service import predict_student

from app.auth.dependencies import require_role

from app.core.database import get_db



router = APIRouter()



# ==========================
# PREDICTION API
# ==========================

@router.post("/predict")
def predict(

    data: StudentData,

    db: Session = Depends(get_db),

    user = Depends(
        require_role(
            [
                "admin",
                "teacher"
            ]
        )
    )

):

    result = predict_student(

        data.dict(),

        db

    )


    return result