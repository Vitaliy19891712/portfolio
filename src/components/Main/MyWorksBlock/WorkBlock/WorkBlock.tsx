import React from "react";
import style from "./WorkBlock.module.css";

const WorkBlock = () => {
  return (
    <div className={style.work}>
      <div className={style.img}></div>
      <div className={style.btn}>
        <button>Смотреть</button>
      </div>
      <div className={style.info}>
        <div className={style.name}>Название проекта</div>
        <div className={style.desc}>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam aliquam voluptatibus, illum quis tempore saepe harum perferendis cumque
          eveniet quisquam id labore optio quod vero repudiandae, molestiae odit dolores! Sequi?
        </div>
      </div>
    </div>
  );
};

export default WorkBlock;
