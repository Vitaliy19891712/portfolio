import React from "react";
import style from "./ContactsBlock.module.css";
import cstyle from "./../../../styles/commonstyle.module.css";

const ContactsBlock = () => {
  return (
    <div className={style.contactsblock}>
      <div className={`${cstyle.container} ${style.flex}`}>
        <div className={style.nameBlock}>Контакты</div>
        <div className={style.formDiv}>
          <form className={style.form} action="">
            <input type="text" />
            <input type="text" />
            <textarea name="" id=""></textarea>
          </form>
        </div>
        <div className={style.btn}>
          <button>Отправить</button>
        </div>
      </div>
    </div>
  );
};

export default ContactsBlock;
