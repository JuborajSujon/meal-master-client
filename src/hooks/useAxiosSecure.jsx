import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { logOut } = useAuth();
  const navigate = useNavigate();

  // interceptors - request  to add authorizaton header for every secure call to the server
  // axiosSecure.interceptors.request.use((config) => {
  //   // Get the token from cookies
  //   const token = document.cookie
  //     .split("; ")
  //     .find((row) => row.startsWith("auth_token="))
  //     .split("=")[1];

  //   // if the token exists, add it to the request header
  //   if (token) {
  //     config.headers.Authorization = `Bearer ${token}`;
  //   }
  //   return config;
  // });

  // interceptors - response to remove authorization for every secure call to the server

  axiosSecure.interceptors.response.use(
    (res) => {
      return res;
    },
    async (error) => {
      const status = error.response?.status;
      if (status === 401 || status === 403) {
        await logOut();
        navigate("/login");
      }
      return Promise.reject(error);
    }
  );

  return axiosSecure;
};

export default useAxiosSecure;
