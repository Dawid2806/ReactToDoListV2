import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

export const useLogin = () => {
  const [error, setError] = useState(null);
  const goTo = useNavigate();
  const { dispatch } = useAuthContext();
  const login = (email, password) => {
    setError(null);
    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        dispatch({ type: "LOGIN", payload: res.user });
      })
      .then(() => {
        goTo("/zadania");
      })
      .catch((err) => {
        setError(err.message);
      });
  };
  return { error, login };
};
