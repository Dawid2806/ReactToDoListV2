import { auth } from "../firebase/config";
import { updatePassword } from "firebase/auth";
import { useAuthContext } from "../hooks/useAuthContext";

export const useChangePassword = () => {
  const { user } = useAuthContext();
  const changePassword = (password) => {
    updatePassword(user, password)
      .then((res) => {
        console.log("hasło zmienione");
      })
      .catch((err) => {
        console.log(err.message);
      });
  };
  return { changePassword };
};
