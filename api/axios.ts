import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: 'https://museum-bahari.telenurse.web.id/api/',
  timeout: 3000,
});
