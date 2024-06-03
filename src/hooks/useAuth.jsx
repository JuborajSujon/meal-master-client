import { useContext } from "react";
import AuthProvider from "../AuthProvider/AuthProvider";

export default function useAuth() {
  const authInfo = useContext(AuthProvider);
  return authInfo;
}
