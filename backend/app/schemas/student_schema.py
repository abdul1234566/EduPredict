from pydantic import BaseModel


class StudentData(BaseModel):

    age: int

    failures: int

    absences: int

    famrel: int

    freetime: int

    goout: int

    health: int

    studytime: int

    Medu: int

    Fedu: int