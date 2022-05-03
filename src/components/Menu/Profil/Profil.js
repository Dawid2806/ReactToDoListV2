import { useState } from "react";
import classes from "./Profil.module.css";
import { useChangePassword } from "../../../hooks/useChangePassword";
const Profil = () => {
  const [newPassword, setNewPassword] = useState("");
  const { changePassword } = useChangePassword();

  const newPasswordHandler = (e) => {
    setNewPassword(e.target.value);
  };

  const updatePassword = (e) => {
    e.preventDefault();
    changePassword(newPassword);
    setNewPassword("");
  };

  return (
    <div className={classes.profil}>
      <div className={classes.change__password}>
        <h4 className={classes.title}>Zmień swoje hasło </h4>
        <div className={classes.change__password__box}>
          <label htmlFor="newPassword">Podaj nowe hasło</label>
          <input
            type="password"
            name="newPassword"
            id="newPassword"
            value={newPassword}
            onChange={newPasswordHandler}
          />
          <button
            type="button"
            onClick={updatePassword}
            className={classes.button}
          >
            {" "}
            Zmień hasło
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profil;
