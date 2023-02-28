import React from "react";
import style from "./Footer.module.css";
import cstyle from "../../styles/commonstyle.module.css";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={`${cstyle.container} ${style.flex}`}>
        <div className={style.nameBlock}>Мурафа Виталий</div>
        <div className={style.content}></div>
        <div className={style.copyright}>© 2023 Все права защищены</div>
      </div>
    </div>
  );
};

export default Footer;
