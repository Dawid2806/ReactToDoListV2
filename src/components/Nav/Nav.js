import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../hooks/useAuthContext";
import classes from "./Nav.module.css";
import { useAuth } from "../../hooks/useAuth";
const Nav = () => {
  const { user } = useAuthContext();
  const { logout } = useAuth();

  return (
    <nav className={classes.nav}>
      <ul className={classes.links}>
        {!user && (
          <>
            <li className={classes.link}>
              <NavLink
                to="/login"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Login
              </NavLink>
            </li>

            <li className={classes.link}>
              <NavLink
                to="/rejestracja"
                className={(navData) =>
                  navData.isActive ? classes.active : ""
                }
              >
                Rejestracja
              </NavLink>
            </li>
          </>
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
