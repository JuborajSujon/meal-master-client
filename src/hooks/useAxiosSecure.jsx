import axios from "axios";
import useAuth from "./useAuth";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const axiosSecure = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true,
});

const useAxiosSecure = () => {
  const { userSignOut } = useAuth();
  const navigate = useNavigate();

  // interceptors - response to remove authorization for every secure call to the server

  useEffect(() => {
    axiosSecure.interceptors.response.use(
      (res) => {
        return res;
      },
      async (error) => {
        const status = error.response?.status;
        if (status === 401 || status === 403) {
          await userSignOut();
          navigate("/login");
        }
        return Promise.reject(error);
      }
    );
  }, [userSignOut, navigate]);

  return axiosSecure;
};

export default useAxiosSecure;
