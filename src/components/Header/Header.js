import React from "react";
import Nav from "../Nav/Nav";
import classes from "./Header.module.css";
import { useAuthContext } from "../../hooks/useAuthContext";

const Header = () => {
  const { user } = useAuthContext();
  return (
    <>
      <header className={classes.header}>
        <h1 className={classes.title}>Lista zadań </h1>
        {user && <p className={classes.name}> {user.email} </p>}
        <Nav />
      </header>
    </>
  );
};
export default Header;
