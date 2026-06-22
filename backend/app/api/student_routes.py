from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.database_models import User, Student
from app.auth.dependencies import get_current_user
from app.models.database_models import Feedback


router = APIRouter(
    prefix="/student",
    tags=["Student"]
)



@router.get("/me")
def get_student_profile(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    if current_user["role"] != "student":

        raise HTTPException(
            status_code=403,
            detail="Student only"
        )


    student = (
        db.query(Student)
        .filter(
            Student.user_id == current_user["id"]
        )
        .first()
    )


    if not student:

        raise HTTPException(
            status_code=404,
            detail="Student profile not found"
        )


    return {

        "id": student.id,

        "name": student.student_name,

        "age": student.age,

        "gender": student.gender,

        "email": current_user["email"]

    }

@router.put("/me")
def update_student_profile(

    data: dict,

    db: Session = Depends(get_db),

    current_user = Depends(get_current_user)

):


    if current_user["role"] != "student":

        raise HTTPException(
            status_code=403,
            detail="Student only"
        )


    student = (
        db.query(Student)
        .filter(
            Student.user_id == current_user["id"]
        )
        .first()
    )


    if not student:

        raise HTTPException(
            status_code=404,
            detail="Profile not found"
        )



    student.age = data.get(
        "age",
        student.age
    )


    student.gender = data.get(
        "gender",
        student.gender
    )


    db.commit()

    db.refresh(student)



    return {

        "message":"Profile updated"

    }

@router.get("/feedback")
def get_my_feedback(

    db:Session=Depends(get_db),

    current_user=Depends(get_current_user)

):


    if current_user["role"]!="student":

        raise HTTPException(
            status_code=403,
            detail="Student only"
        )



    student = db.query(Student).filter(
        Student.user_id==current_user["id"]
    ).first()



    if not student:

        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )



    feedback = db.query(Feedback).filter(
        Feedback.student_id==student.id
    ).all()



    return feedback