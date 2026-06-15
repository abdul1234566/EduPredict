from app.core.database import SessionLocal

from app.models.database_models import User

from app.auth.password import hash_password



db = SessionLocal()


user = User(

name="Admin",

email="admin@gmail.com",

password=hash_password("admin123"),

role="admin"

)



db.add(user)

db.commit()


print("USER CREATED")