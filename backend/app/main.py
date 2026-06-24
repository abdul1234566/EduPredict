# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware

# from app.core.database import engine, Base

# from app.models import database_models

# from app.api.routes import router
# from app.api.dashboard_routes import router as dashboard_router
# from app.api.auth_routes import router as auth_router
# from app.api.user_routes import router as user_router
# from app.api.admin_routes import router as admin_router
# from app.api.student_routes import router as student_router
# from app.api.teacher_routes import router as teacher_router

# # =========================
# # DATABASE TABLE CREATION
# # =========================

# Base.metadata.create_all(
#     bind=engine
# )


# # =========================
# # FASTAPI APP
# # =========================

# app = FastAPI(
#     title="EduPredict API",
#     version="1.0"
# )


# # =========================
# # CORS CONFIGURATION
# # =========================

# app.add_middleware(
#     CORSMiddleware,

#     allow_origins=[
#         "http://localhost:5173",
#         "http://127.0.0.1:5173"
#     ],

#     allow_credentials=True,

#     allow_methods=["*"],

#     allow_headers=["*"],
# )


# # =========================
# # ROUTES
# # =========================

# app.include_router(
#     router
# )


# app.include_router(
#     auth_router
# )

# app.include_router(
#     dashboard_router
# )

# app.include_router(
#     user_router
# )

# app.include_router(
#     admin_router
# )

# app.include_router(
#     student_router
# )

# app.include_router(
#     teacher_router
# )

# # =========================
# # HOME TEST ROUTE
# # =========================

# @app.get("/")
# def home():

#     return {

#         "message":
#         "EduPredict Backend Running"

#     }

from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from app.core.database import engine, Base

from app.models import database_models

from app.api.routes import router
from app.api.dashboard_routes import router as dashboard_router
from app.api.auth_routes import router as auth_router
from app.api.user_routes import router as user_router
from app.api.admin_routes import router as admin_router
from app.api.student_routes import router as student_router
from app.api.teacher_routes import router as teacher_router
from app.api.alert_routes import router as alert_router

# =========================
# DATABASE TABLE CREATION
# =========================

Base.metadata.create_all(bind=engine)


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

app.include_router(router)
app.include_router(auth_router)
app.include_router(dashboard_router)
app.include_router(user_router)
app.include_router(admin_router)
app.include_router(student_router)
app.include_router(teacher_router)


<<<<<<< HEAD
app.include_router(
    auth_router
)

app.include_router(
    dashboard_router
)

app.include_router(
    user_router
)

app.include_router(
    admin_router
)

app.include_router(
    student_router
)

app.include_router(
    teacher_router
)

app.include_router(
    alert_router
)



=======
>>>>>>> 3a43a8f89ddd771ee56a3b3851630f76c1feb76d
# =========================
# HOME TEST ROUTE
# =========================

@app.get("/")
def home():
    return {
        "message": "EduPredict Backend Running"
    }


# =========================
# DB CONNECTION TEST ROUTE
# =========================

@app.get("/db-check")
def db_check():
    try:
        conn = engine.connect()
        conn.close()
        return {
            "status": "DB Connected Successfully ✅"
        }
    except Exception as e:
        return {
            "status": "DB Connection Failed ❌",
            "error": str(e)
        }