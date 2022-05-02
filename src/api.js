import axios from "axios";

const api = axios.create({
  baseURL: "https://disease.sh/v3/covid-19/all"
});

export default api;
