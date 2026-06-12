from fastapi import FastAPI

from app.core.database import engine, Base

from app.models import database_models

from app.api.routes import router



Base.metadata.create_all(
    bind=engine
)



app = FastAPI(
    title="EduPredict API",
    version="1.0"
)



app.include_router(
    router
)



@app.get("/")

def home():

    return {

        "message":
        "EduPredict Backend Running"

    }