from jose import jwt

from datetime import datetime,timedelta

from app.core.config import (
    SECRET_KEY,
    ALGORITHM,
    ACCESS_TOKEN_EXPIRE_MINUTES
)



def create_token(data):

    payload = data.copy()


    expire = datetime.utcnow() + timedelta(
        minutes=ACCESS_TOKEN_EXPIRE_MINUTES
    )


    payload["exp"] = expire


    return jwt.encode(
        payload,
        SECRET_KEY,
        algorithm=ALGORITHM
    )



def decode_token(token):

    return jwt.decode(
        token,
        SECRET_KEY,
        algorithms=[ALGORITHM]
    )