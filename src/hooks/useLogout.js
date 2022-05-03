import { auth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

import { signOut } from "firebase/auth";
export const useLogout = () => {
  const { dispatch } = useAuthContext();
  const logout = () => {
    signOut(auth)
      .then(() => {
        dispatch({ type: "LOGOUT" });
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return { logout };
};
