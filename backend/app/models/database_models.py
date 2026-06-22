from sqlalchemy import Column, Integer, String, Float, DateTime, Boolean, ForeignKey
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


    user_id = Column(
        Integer,
        ForeignKey("users.id"),
        unique=True
    )


    student_name = Column(
        String(100),
        nullable=False
    )


    age = Column(Integer)


    gender = Column(String(20))


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
        primary_key=True,
        index=True
    )


    student_id = Column(
        Integer,
        ForeignKey("students.id")
    )
    
    recipient_role = Column(
        String(20)
    )  # teacher/student


    message = Column(
        String
    )


    alert_type = Column(
        String,
        default="RISK"
    )


    is_read = Column(
        Boolean,
        default=False
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


    student_id = Column(
        Integer,
        ForeignKey("students.id")
    )


    teacher_id = Column(
        Integer,
        ForeignKey("users.id")
    )


    message = Column(
        String(500),
        nullable=False
    )


    created_at = Column(
        DateTime,
        server_default=func.now()
    )