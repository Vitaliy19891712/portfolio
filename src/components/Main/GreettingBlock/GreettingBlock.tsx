import React from "react";
import style from "./GreettingBlock.module.css";
import cstyle from "./../../../styles/commonstyle.module.css";

const GreettingBlock = () => {
  return (
    <div className={style.greettingblock}>
      <div className={`${cstyle.container} ${style.flex}`}>
        <div className={style.text}>
          <span>Привет</span>
          <h1>Меня зовут Мурафа Виталий</h1>
          <p>Я front-end разработчик</p>
        </div>
        <div className={style.photo}></div>
      </div>
    </div>
  );
};

export default GreettingBlock;
