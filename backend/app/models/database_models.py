from sqlalchemy import Column, Integer, String, Float, DateTime, ForeignKey
from sqlalchemy.sql import func

from app.core.database import Base


# ==========================
# USERS TABLE
# ==========================

class User(Base):

    __tablename__ = "users"

    id = Column(
        Integer,
        primary_key=True,
        index=True
    )

    name = Column(
        String(100),
        nullable=False
    )

    email = Column(
        String(150),
        unique=True,
        nullable=False
    )

    password = Column(
        String(255),
        nullable=False
    )

    role = Column(
        String(50),
        default="teacher"
    )

    created_at = Column(
        DateTime,
        server_default=func.now()
    )


# ==========================
# STUDENTS TABLE
# ==========================

class Student(Base):

    __tablename__ = "students"


    id = Column(
        Integer,
        primary_key=True,
        index=True
    )


    student_name = Column(
        String(100),
        nullable=False
    )


    age = Column(
        Integer
    )


    gender = Column(
        String(20)
    )


    created_at = Column(
        DateTime,
        server_default=func.now()
    )



# ==========================
# PREDICTIONS TABLE
# ==========================

class Prediction(Base):

    __tablename__ = "predictions"


    id = Column(
        Integer,
        primary_key=True
    )


    student_id = Column(
        Integer,
        ForeignKey("students.id")
    )


    prediction = Column(
        String(50)
    )


    risk_probability = Column(
        Float
    )


    risk_level = Column(
        String(50)
    )


    created_at = Column(
        DateTime,
        server_default=func.now()
    )



# ==========================
# ALERTS TABLE
# ==========================

class Alert(Base):

    __tablename__ = "alerts"


    id = Column(
        Integer,
        primary_key=True
    )


    student_id = Column(
        Integer
    )


    message = Column(
        String(255)
    )


    status = Column(
        String(50),
        default="pending"
    )


    created_at = Column(
        DateTime,
        server_default=func.now()
    )



# ==========================
# FEEDBACK TABLE
# ==========================

class Feedback(Base):

    __tablename__ = "feedback"


    id = Column(
        Integer,
        primary_key=True
    )


    user_id = Column(
        Integer
    )


    message = Column(
        String(500)
    )


    created_at = Column(
        DateTime,
        server_default=func.now()
    )