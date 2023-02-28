import React from "react";
import style from "./MyWorksBlock.module.css";
import cstyle from "./../../../styles/commonstyle.module.css";
import WorkBlock from "./WorkBlock/WorkBlock";

const MyWorksBlock = () => {
  return (
    <div className={style.myskillsblock}>
      <div className={`${cstyle.container} ${style.flex}`}>
        <div className={style.nameBlock}>Мои работы</div>
        <div className={style.works}>
          <WorkBlock />
          <WorkBlock />
        </div>
      </div>
    </div>
  );
};

export default MyWorksBlock;
