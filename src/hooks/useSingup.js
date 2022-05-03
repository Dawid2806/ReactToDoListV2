import { useState } from "react";
import { useAuthContext } from "./useAuthContext";
import { auth } from "../firebase/config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
export const useSingup = () => {
  const goTo = useNavigate();
  const [error, setError] = useState(null);
  const { dispatch } = useAuthContext();
  const signup = (email, password) => {
    setError(null);
    createUserWithEmailAndPassword(auth, email, password)
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
  return { error, signup };
};
