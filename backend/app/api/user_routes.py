from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db

from app.models.database_models import User, Student

from app.auth.password import hash_password

from app.auth.dependencies import get_current_user


router = APIRouter(
    prefix="/users",
    tags=["Users"]
)



# ==========================
# GET ALL USERS
# ==========================

@router.get("/")
def get_users(
    db: Session = Depends(get_db),
    current_user: User = Depends(get_current_user)
):

    if current_user.role != "admin":
        raise HTTPException(
            status_code=403,
            detail="Admin only"
        )


    return db.query(User).all()




# ==========================
# CREATE USER
# ==========================

@router.post("/")
def create_user(

    data: dict,

    db: Session = Depends(get_db),

    current_user: User = Depends(get_current_user)

):


    if current_user.role != "admin":

        raise HTTPException(
            status_code=403
        )



    existing = db.query(User).filter(
        User.email == data["email"]
    ).first()



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




    # automatically create student profile

    if user.role == "student":


        student = Student(

            user_id=user.id,

            student_name=user.name

        )


        db.add(student)

        db.commit()



    return {

        "message":"User created",

        "user":user

    }




# ==========================
# DELETE USER
# ==========================


@router.delete("/{id}")
def delete_user(

    id:int,

    db:Session=Depends(get_db),

    current_user:User=Depends(get_current_user)

):


    if current_user.role!="admin":

        raise HTTPException(
            status_code=403
        )



    user=db.query(User).filter(
        User.id==id
    ).first()



    if not user:

        raise HTTPException(
            status_code=404,
            detail="User not found"
        )



    db.delete(user)

    db.commit()



    return {

        "message":"Deleted"

    }