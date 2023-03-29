import React from "react";
import style from "./Title.module.scss";

type PropsTitleType = {
  title: string;
};

const Title = (props: PropsTitleType) => {
  return (
    <div className={style.title}>
      <h2>{props.title}</h2>
      <span>{props.title}</span>
    </div>
  );
};

export default Title;
