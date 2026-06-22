import random
from app.core.database import SessionLocal
from app.models.database_models import User, Student, Prediction, Alert

db = SessionLocal()


# =========================
# RESET DATA
# =========================

db.query(Alert).delete()
db.query(Prediction).delete()
db.query(Student).delete()
db.query(User).delete()
db.commit()


# =========================
# HELPER: REALISTIC STUDENT PROFILE
# =========================

def generate_student_profile():

    # Academic behavior clusters
    profile_type = random.choices(
        ["good", "average", "weak"],
        weights=[0.3, 0.5, 0.2]
    )[0]

    if profile_type == "good":

        return {
            "age": random.randint(18, 21),
            "failures": random.randint(0, 1),
            "absences": random.randint(0, 5),
            "studytime": random.randint(3, 4),
            "famrel": random.randint(4, 5),
            "freetime": random.randint(2, 3),
            "goout": random.randint(1, 3),
            "health": random.randint(4, 5),
            "Medu": random.randint(3, 4),
            "Fedu": random.randint(3, 4),
            "bias": "LOW_RISK"
        }

    elif profile_type == "average":

        return {
            "age": random.randint(17, 22),
            "failures": random.randint(1, 2),
            "absences": random.randint(3, 10),
            "studytime": random.randint(2, 3),
            "famrel": random.randint(3, 4),
            "freetime": random.randint(2, 4),
            "goout": random.randint(2, 4),
            "health": random.randint(3, 4),
            "Medu": random.randint(2, 3),
            "Fedu": random.randint(2, 3),
            "bias": "MEDIUM_RISK"
        }

    else:

        return {
            "age": random.randint(16, 23),
            "failures": random.randint(2, 4),
            "absences": random.randint(10, 25),
            "studytime": random.randint(1, 2),
            "famrel": random.randint(1, 3),
            "freetime": random.randint(3, 5),
            "goout": random.randint(4, 5),
            "health": random.randint(1, 3),
            "Medu": random.randint(1, 2),
            "Fedu": random.randint(1, 2),
            "bias": "HIGH_RISK"
        }


# =========================
# CREATE USERS + STUDENTS
# =========================

users = []
students = []

for i in range(1, 61):

    user = User(
        name=f"Student User {i}",
        email=f"student{i}@edu.com",
        password="123456",
        role="student"
    )

    db.add(user)
    db.flush()

    student = Student(
        user_id=user.id,
        student_name=user.name,
        age=random.randint(16, 22),
        gender=random.choice(["Male", "Female"])
    )

    db.add(student)
    db.flush()

    users.append(user)
    students.append(student)


# =========================
# CREATE PREDICTIONS + ALERTS
# =========================

for s in students:

    profile = generate_student_profile()

    bias = profile.pop("bias")

    # simulate model-like probability based on bias
    if bias == "LOW_RISK":
        risk = random.uniform(5, 30)

    elif bias == "MEDIUM_RISK":
        risk = random.uniform(30, 65)

    else:
        risk = random.uniform(65, 95)

    if risk < 30:
        level = "LOW"
        pred = "NOT AT RISK"

    elif risk < 60:
        level = "MEDIUM"
        pred = "AT RISK"

    else:
        level = "HIGH"
        pred = "AT RISK"

    prediction = Prediction(
        student_id=s.id,
        prediction=pred,
        risk_probability=round(risk, 2),
        risk_level=level
    )

    db.add(prediction)

    # ALERTS ONLY FOR HIGH RISK
    if level == "HIGH":

        alert = Alert(
            student_id=s.id,
            message=f"{s.student_name} shows HIGH academic risk (low study time + high absences)",
            alert_type="RISK",
            is_read=False
        )

        db.add(alert)


db.commit()

print("🔥 PRESENTATION DATASET GENERATED (PRO LEVEL)")