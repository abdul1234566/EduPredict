from fastapi import APIRouter, Depends, HTTPException
from sqlalchemy.orm import Session

from app.core.database import get_db
from app.models.database_models import Alert
from app.auth.dependencies import get_current_user

router = APIRouter(
    prefix="/alerts",
    tags=["Alerts"]
)

# ==========================
# GET MY ALERTS (ROLE SAFE)
# ==========================
@router.get("")
def get_alerts(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    alerts = (
        db.query(Alert)
        .filter(Alert.recipient_role == current_user["role"])
        .order_by(Alert.created_at.desc())
        .all()
    )

    return alerts


# ==========================
# UNREAD COUNT (ROLE SAFE)
# ==========================
@router.get("/count")
def alert_count(
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    count = (
        db.query(Alert)
        .filter(
            Alert.recipient_role == current_user["role"],
            Alert.is_read == False
        )
        .count()
    )

    return {"count": count}


# ==========================
# MARK AS READ (SECURE)
# ==========================
@router.put("/{alert_id}/read")
def mark_read(
    alert_id: int,
    db: Session = Depends(get_db),
    current_user = Depends(get_current_user)
):

    alert = (
        db.query(Alert)
        .filter(
            Alert.id == alert_id,
            Alert.recipient_role == current_user["role"]  # 🔒 IMPORTANT
        )
        .first()
    )

    if not alert:
        raise HTTPException(
            status_code=404,
            detail="Alert not found"
        )

    alert.is_read = True
    db.commit()

    return {
        "message": "Alert marked read"
    }