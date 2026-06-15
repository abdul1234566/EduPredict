import axios from "axios";

const BASE_URL = "http://127.0.0.1:8000/dashboard";

// attach token automatically
const authHeader = () => ({
  headers: {
    Authorization: `Bearer ${localStorage.getItem("token")}`
  }
});

export const getStats = async () => {
  return await axios.get(`${BASE_URL}/stats`, authHeader());
};

export const getPredictions = async () => {
  return await axios.get(`${BASE_URL}/predictions`, authHeader());
};

export const getTrends = async () => {
  return await axios.get(`${BASE_URL}/trends`, authHeader());
};