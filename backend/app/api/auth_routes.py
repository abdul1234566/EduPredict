from fastapi import APIRouter, Depends, HTTPException

from sqlalchemy.orm import Session


from app.core.database import get_db

from app.models.database_models import User

from app.schemas.auth_schema import LoginRequest

from app.auth.password import verify_password

from app.auth.jwt_handler import create_token



router = APIRouter(
    prefix="/auth",
    tags=["Authentication"]
)




@router.post("/login")


def login(
    data:LoginRequest,
    db:Session=Depends(get_db)
):


    user = (
        db.query(User)
        .filter(
            User.email==data.email
        )
        .first()
    )



    if not user:

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )



    if not verify_password(
        data.password,
        user.password
    ):

        raise HTTPException(
            status_code=401,
            detail="Invalid credentials"
        )



    token = create_token(
        {
            "id":user.id,
            "role":user.role,
            "email":user.email
        }
    )


    return {

        "access_token":token,

        "token_type":"bearer",

        "role":user.role

    }