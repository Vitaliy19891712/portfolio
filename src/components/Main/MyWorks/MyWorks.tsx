import React from "react";
import Mywork from "../../common/Mywork";
import Title from "../../common/Title";
import style from "./MyWorks.module.scss";
import todolist from "./../../../assets/todolist.jpg";
import sn from "./../../../assets/social-network.jpg";

const MyWorks = () => {
  return (
    <div className={style.myworks}>
      <div className={style.container}>
        <Title title={"ПОРТФОЛИО"} />
        <div className={style.flex}>
          <Mywork image={todolist} title={"Todolist"} text={"Таск-менеджер"} />
          <Mywork image={sn} title={"Social network"} text={"Для общения с родными, друзьями и знакомыми"} />
        </div>
      </div>
    </div>
  );
};

export default MyWorks;
