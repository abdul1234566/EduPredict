from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.database_models import Student, User, Feedback
from app.auth.dependencies import get_current_user


router = APIRouter(
    prefix="/teacher",
    tags=["Teacher"]
)


# ==========================
# GET STUDENTS (FIXED)
# ==========================
@router.get("/students")
def get_students(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    if current_user["role"] != "teacher":
        raise HTTPException(status_code=403, detail="Teacher only")

    students = (
        db.query(Student, User)
        .join(User, Student.user_id == User.id)
        .all()
    )

    return [
        {
            "id": student.id,
            "user_id": student.user_id,
            "name": user.name,
            "email": user.email,
            "age": student.age,
            "gender": student.gender
        }
        for student, user in students
    ]

# ==========================
# CREATE FEEDBACK (FIXED)
# ==========================
@router.post("/feedback/{student_id}")
def create_feedback(
    student_id: int,
    data: dict,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    if current_user["role"] != "teacher":
        raise HTTPException(status_code=403, detail="Teacher only")

    message = data.get("message", "").strip()

    # 🚨 BLOCK EMPTY FEEDBACK
    if not message:
        raise HTTPException(
            status_code=400,
            detail="Feedback message cannot be empty"
        )

    student = db.query(Student).filter(
        Student.id == student_id
    ).first()

    if not student:
        raise HTTPException(
            status_code=404,
            detail="Student not found"
        )

    feedback = Feedback(
        user_id=current_user["id"],
        message=message
    )

    db.add(feedback)
    db.commit()
    db.refresh(feedback)

    return {
        "message": "Feedback created successfully"
    }