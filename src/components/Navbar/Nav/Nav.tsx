import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

const Nav = () => {
  return (
    <ul className={style.nav}>
      <li>
        <NavLink
          to={"/"}
          className={({ isActive, isPending }) => {
            return isActive ? `${style.active}` : "";
          }}
        >
          <span>Главная</span>{" "}
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/about"}
          className={({ isActive, isPending }) => {
            return isActive ? `${style.active}` : "";
          }}
        >
          <span>ОБО МНЕ</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/myskills"}
          className={({ isActive, isPending }) => {
            return isActive ? `${style.active}` : "";
          }}
        >
          <span>МОИ НАВЫКИ</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/myworks"}
          className={({ isActive, isPending }) => {
            return isActive ? `${style.active}` : "";
          }}
        >
          <span>ПОРТФОЛИО</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          to={"/contacts"}
          className={({ isActive, isPending }) => {
            return isActive ? `${style.active}` : "";
          }}
        >
          <span>КОНТАКТЫ</span>
        </NavLink>
      </li>
    </ul>
  );
};

export default Nav;
