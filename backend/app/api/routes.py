from fastapi import APIRouter

from app.schemas.student_schema import StudentData

from app.services.prediction_service import predict_student



router = APIRouter()



@router.post("/predict")


def predict(data: StudentData):


    result = predict_student(
        data.dict()
    )


    return result