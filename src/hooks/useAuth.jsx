import { useContext } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";

export default function useAuth() {
  const authInfo = useContext(AuthContext);
  return authInfo;
}
