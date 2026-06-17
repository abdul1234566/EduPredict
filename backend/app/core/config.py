# HOME SYSTEM
import os
from dotenv import load_dotenv

load_dotenv()


DB_SERVER = os.getenv("DB_SERVER")
DB_NAME = os.getenv("DB_NAME")
DB_DRIVER = os.getenv("DB_DRIVER")


SECRET_KEY = "edupredict_secret_key_change_later"

ALGORITHM = "HS256"

ACCESS_TOKEN_EXPIRE_MINUTES = 60

# Aptech system

# import os
# from dotenv import load_dotenv

# load_dotenv()

# DB_SERVER = os.getenv("DB_SERVER")
# DB_NAME = os.getenv("DB_NAME")
# DB_USER = os.getenv("DB_USER")
# DB_PASSWORD = os.getenv("DB_PASSWORD")
# DB_DRIVER = os.getenv("DB_DRIVER")

# SECRET_KEY = "edupredict_secret_key_change_later"
# ALGORITHM = "HS256"
# ACCESS_TOKEN_EXPIRE_MINUTES = 60