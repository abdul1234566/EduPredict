from fastapi import Depends, HTTPException, status
from fastapi.security import OAuth2PasswordBearer

from app.auth.jwt_handler import decode_token


oauth2_scheme = OAuth2PasswordBearer(
    tokenUrl="/auth/login"
)



def get_current_user(
    token: str = Depends(oauth2_scheme)
):

    try:

        payload = decode_token(token)


        user = {

            "id": payload.get("id"),

            "email": payload.get("email"),

            "role": payload.get("role")

        }


        return user


    except Exception:


        raise HTTPException(

            status_code=status.HTTP_401_UNAUTHORIZED,

            detail="Invalid token"

        )




def require_role(allowed_roles):


    def checker(

        user = Depends(get_current_user)

    ):


        if user["role"] not in allowed_roles:


            raise HTTPException(

                status_code=403,

                detail="Permission denied"

            )


        return user


    return checker