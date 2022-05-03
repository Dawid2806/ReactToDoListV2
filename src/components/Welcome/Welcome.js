import { useNavigate } from "react-router-dom";
import classes from "./Welcome.module.css";

const Welcome = () => {
  const goTo = useNavigate();
  return (
    <>
      <div className={classes.container}>
        <h2 className={classes.title}>Witamy na pokładzie </h2>
        <p className={classes.para}>
          z naszą " Listą do zrobienia" nie zapomnisz niczego !{" "}
        </p>
        <p className={classes.para}>
          Wystarczy założyć darmowe konto Aby cieszyć się Listą{" "}
        </p>
        <button
          onClick={() => {
            goTo("/rejestracja");
          }}
          className={classes.button}
        >
          zarejestruj sie{" "}
        </button>
        <p className={classes.para}>
          ale jeśli już masz Konto TO zaloguj się !
        </p>
        <button
          onClick={() => {
            goTo("/login");
          }}
          className={classes.button}
        >
          zaloguj się{" "}
        </button>
      </div>
    </>
  );
};
export default Welcome;
