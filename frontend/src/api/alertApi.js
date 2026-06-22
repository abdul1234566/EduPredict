import API from "./axiosConfig";

export const getAlerts = () =>
  API.get("/alerts");

export const getAlertCount = () =>
  API.get("/alerts/count");

export const markAlertRead = (id) =>
  API.put(`/alerts/${id}/read`);