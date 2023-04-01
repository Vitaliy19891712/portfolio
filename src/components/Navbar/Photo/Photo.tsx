import React from "react";
import style from "./Photo.module.scss";
import { NavLink } from "react-router-dom";

const Photo = () => {
  return (
    <div className={style.photo}>
      <NavLink to={"/portfolio"} className={style.wrapperPhoto}></NavLink>
    </div>
  );
};
export default Photo;
