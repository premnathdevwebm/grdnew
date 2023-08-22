import axios, { AxiosInstance } from "axios";
const instance: AxiosInstance = axios.create({
  baseURL: "https://goldandroyceserver.onrender.com",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(error);
    }
  );

  export default instance;
