import React from "react";
import style from "./Header.module.css";
import Nav from "./Nav/Nav";
import cstyle from "../../styles/commonstyle.module.css"

const Header = () => {
  return (
    <div className={style.header}>
      <div className={`${cstyle.container} ${style.flex}`}>
        <Nav />
      </div>
    </div>
  );
};

export default Header;
