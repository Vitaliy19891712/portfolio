import React from "react";
import style from "./DistanseWorkBlock.module.css";
import cstyle from "./../../../styles/commonstyle.module.css";

const DistanseWorkBlock = () => {
  return (
    <div className={style.distanseworkblock}>
      <div className={`${cstyle.container} ${style.flex}`}>
        <div className={style.nameBlock}>Рассматриваю варианты удаленной работы</div>
        <div className={style.btn}>
          <button>Нанять меня</button>
        </div>
      </div>
    </div>
  );
};

export default DistanseWorkBlock;
