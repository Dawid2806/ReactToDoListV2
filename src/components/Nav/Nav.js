import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useLogout } from "../../hooks/useLogout";
import classes from "./Nav.module.css";
const Nav = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <nav className={classes.nav}>
      <ul className={classes.links}>
        {!user && (
          <li className={classes.link}>
            <NavLink
              to="/login"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Login
            </NavLink>
          </li>
        )}
        {!user && (
          <li className={classes.link}>
            <NavLink
              to="/rejestracja"
              className={(navData) => (navData.isActive ? classes.active : "")}
            >
              Rejestracja
            </NavLink>
          </li>
        )}
        {user && (
          <li className={classes.link}>
            <a onClick={logout} href="">
              Wyloguj
            </a>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
