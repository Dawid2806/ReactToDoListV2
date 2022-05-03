import classes from "./Menu.module.css";
import { NavLink } from "react-router-dom";
const Menu = () => {
  return (
    <div className={classes.menu}>
      <NavLink className={classes.a} to={"/archiwum"}>
        Archiwum
      </NavLink>
      <NavLink className={classes.a} to={"/profil"}>
        Profil
      </NavLink>
      <NavLink className={classes.a} to={"/zadania"}>
        Zadania
      </NavLink>
    </div>
  );
};
export default Menu;
