from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker, declarative_base

from app.core.config import (
    DB_SERVER,
    DB_NAME,
    DB_DRIVER
)


# ==========================
# DATABASE CONNECTION
# WINDOWS AUTHENTICATION
# ==========================

DATABASE_URL = (
    f"mssql+pyodbc://@{DB_SERVER}/{DB_NAME}"
    f"?driver={DB_DRIVER.replace(' ', '+')}"
    "&trusted_connection=yes"
)


engine = create_engine(
    DATABASE_URL,
    echo=True
)


# ==========================
# SESSION
# ==========================

SessionLocal = sessionmaker(
    autocommit=False,
    autoflush=False,
    bind=engine
)


# ==========================
# BASE MODEL
# ==========================

Base = declarative_base()



# ==========================
# DATABASE DEPENDENCY
# ==========================

def get_db():

    db = SessionLocal()

    try:
        yield db

    finally:
        db.close()