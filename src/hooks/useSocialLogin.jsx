import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function useSocialLogin(signInFunction) {
  const navigate = useNavigate();
  const handleSignIn = useCallback(async () => {
    try {
      await signInFunction();
      navigate("/");
      toast.success("Login Successful", {
        position: "top-right",
        autoClose: 1500,
      });
    } catch (err) {
      console.log(err);
      toast.error(err.message);
    }
  }, [signInFunction, navigate]);
  return handleSignIn;
}
