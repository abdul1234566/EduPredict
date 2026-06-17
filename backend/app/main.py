from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import engine, Base

from app.models import database_models

from app.api.routes import router
from app.api.dashboard_routes import router as dashboard_router
from app.api.auth_routes import router as auth_router

# =========================
# DATABASE TABLE CREATION
# =========================

Base.metadata.create_all(
    bind=engine
)


# =========================
# FASTAPI APP
# =========================

app = FastAPI(
    title="EduPredict API",
    version="1.0"
)


# =========================
# CORS CONFIGURATION
# =========================

app.add_middleware(
    CORSMiddleware,

    allow_origins=[
        "http://localhost:5173",
        "http://127.0.0.1:5173"
    ],

    allow_credentials=True,

    allow_methods=["*"],

    allow_headers=["*"],
)


# =========================
# ROUTES
# =========================

app.include_router(
    router
)


app.include_router(
    auth_router
)

app.include_router(
    dashboard_router
)


# =========================
# HOME TEST ROUTE
# =========================

@app.get("/")
def home():

    return {

        "message":
        "EduPredict Backend Running"

    }