from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.database_models import Student, User, Feedback, Alert
from app.auth.dependencies import get_current_user



router = APIRouter(
    prefix="/teacher",
    tags=["Teacher"]
)




@router.get("/students")
def get_students(

    db:Session = Depends(get_db),

    current_user = Depends(get_current_user)

):


    if current_user["role"] != "teacher":

        raise HTTPException(
            status_code=403,
            detail="Teacher only"
        )



    students = (
        db.query(Student, User)

        .join(
            User,
            Student.user_id == User.id
        )

        .filter(
            User.role=="student"
        )

        .all()
    )



    return [

        {

            "id":student.id,

            "user_id":student.user_id,

            "name":user.name,

            "email":user.email,

            "age":student.age,

            "gender":student.gender

        }

        for student,user in students

    ]







# ==========================
# CREATE FEEDBACK
# ==========================
@router.post("/feedback/{student_id}")
def create_feedback(

    student_id:int,

    data:dict,

    db:Session=Depends(get_db),

    current_user=Depends(get_current_user)

):


    if current_user["role"]!="teacher":

        raise HTTPException(
            status_code=403,
            detail="Teacher only"
        )


    message = data.get("message","").strip()


    if not message:

        raise HTTPException(
            status_code=400,
            detail="Feedback cannot be empty"
        )



    student = db.query(Student).filter(
        Student.id==student_id
    ).first()



    if not student:

        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )



    feedback = Feedback(

        student_id=student_id,

        teacher_id=current_user["id"],

        message=message

    )


    db.add(feedback)

    db.commit()

    alert = Alert(

    student_id=student_id,

    message="New feedback received from teacher",

    alert_type="FEEDBACK"

    )


    db.add(alert)

    db.commit()

    db.refresh(feedback)


    return {

        "message":"Feedback created"

    }