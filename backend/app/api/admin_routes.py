from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.database_models import User, Student

from app.auth.dependencies import get_current_user
from app.auth.password import hash_password


router = APIRouter(
    prefix="/admin",
    tags=["Admin"]
)



# ==========================
# GET USERS
# ==========================

@router.get("/users")
def get_users(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    if current_user["role"] != "admin":

        raise HTTPException(
            status_code=403,
            detail="Admin only"
        )


    return db.query(User).all()



# ==========================
# CREATE USER
# ==========================


@router.post("/users")
def create_user(

    data:dict,

    db:Session = Depends(get_db),

    current_user = Depends(get_current_user)

):


    if current_user["role"] != "admin":

        raise HTTPException(
            status_code=403,
            detail="Admin only"
        )



    existing = (
        db.query(User)
        .filter(
            User.email == data["email"]
        )
        .first()
    )


    if existing:

        raise HTTPException(
            status_code=400,
            detail="Email already exists"
        )



    user = User(

        name=data["name"],

        email=data["email"],

        password=hash_password(
            data["password"]
        ),

        role=data["role"]

    )


    db.add(user)

    db.commit()

    db.refresh(user)



    # ======================
    # CREATE STUDENT PROFILE
    # ======================


    if user.role == "student":


        student = Student(

            user_id=user.id,

            student_name=user.name,

            age=0,

            gender="unknown"

        )


        db.add(student)

        db.commit()



    return user





# ==========================
# UPDATE USER
# ==========================


@router.put("/users/{id}")

def update_user(

    id:int,

    data:dict,

    db:Session = Depends(get_db),

    current_user = Depends(get_current_user)

):


    if current_user["role"] != "admin":

        raise HTTPException(
            status_code=403
        )



    user = (
        db.query(User)
        .filter(User.id==id)
        .first()
    )


    if not user:

        raise HTTPException(
            status_code=404
        )



    user.name=data["name"]

    user.email=data["email"]

    user.role=data["role"]



    db.commit()

    db.refresh(user)



    return user





# ==========================
# DELETE USER
# ==========================


@router.delete("/users/{id}")

def delete_user(

    id:int,

    db:Session=Depends(get_db),

    current_user=Depends(get_current_user)

):


    if current_user["role"] != "admin":

        raise HTTPException(
            status_code=403
        )



    user = (
        db.query(User)
        .filter(User.id==id)
        .first()
    )


    if not user:

        raise HTTPException(
            status_code=404
        )



    db.delete(user)

    db.commit()



    return {

        "message":"deleted"

    }