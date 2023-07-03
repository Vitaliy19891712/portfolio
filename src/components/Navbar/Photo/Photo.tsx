import React from "react";
import style from "./Photo.module.scss";
import { NavLink } from "react-router-dom";

type PropsPhotoType = {
  onClickHandler: () => void;
};
const Photo = (props: PropsPhotoType) => {
  return (
    <div className={style.photo}>
      <NavLink onClick={props.onClickHandler} to={"/portfolio"} className={style.wrapperPhoto}></NavLink>
    </div>
  );
};
export default Photo;
