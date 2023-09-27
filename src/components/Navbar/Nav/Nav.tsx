import React from "react";
import { NavLink } from "react-router-dom";
import style from "./Nav.module.scss";

type PropsNavType = {
  onClickHandler: () => void;
};

const Nav = (props: PropsNavType) => {
  return (
    <ul className={style.nav}>
      <li>
        <NavLink
          onClick={props.onClickHandler}
          to={""}
          end
          className={({ isActive }) => {
            return isActive ? `${style.active}` : "";
          }}
        >
          <span>Главная</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={props.onClickHandler}
          to={"/about"}
          className={({ isActive }) => {
            return isActive ? `${style.active}` : "";
          }}
        >
          <span>ОБО МНЕ</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={props.onClickHandler}
          to={"/myskills"}
          className={({ isActive }) => {
            return isActive ? `${style.active}` : "";
          }}
        >
          <span>МОИ НАВЫКИ</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={props.onClickHandler}
          to={"/myworks"}
          className={({ isActive }) => {
            return isActive ? `${style.active}` : "";
          }}
        >
          <span>ПОРТФОЛИО</span>
        </NavLink>
      </li>
      <li>
        <NavLink
          onClick={props.onClickHandler}
          to={"/contacts"}
          className={({ isActive }) => {
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
