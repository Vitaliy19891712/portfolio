import React from "react";
import style from "./SkillBlock.module.css";

const SkillBlock = () => {
  return (
    <div className={style.skill}>
      <div className={style.tech}>
        <div className={style.logo}></div>
        <div className={style.name}>React</div>
      </div>
      <div className={style.desc}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti velit tenetur asperiores itaque? Voluptas, temporibus dolores, quidem
        dolorem aliquam amet excepturi ab et?
      </div>
    </div>
  );
};

export default SkillBlock;
