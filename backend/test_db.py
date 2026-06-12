from app.core.database import engine


try:

    connection = engine.connect()

    print("SQL SERVER CONNECTED SUCCESSFULLY")

    connection.close()


except Exception as e:

    print("CONNECTION FAILED")
    print(e)