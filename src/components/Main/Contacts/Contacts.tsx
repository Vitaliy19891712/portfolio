import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

import Button from "../../common/Button";
import Title from "../../common/Title";
import style from "./Contacts.module.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ContactItem from "../../common/ContactItem";

const Contacts = () => {
  return (
    <div className={style.contacts}>
      <div className={style.container}>
        <Title title={"КОНТАКТЫ"} />
        <div className={style.flex}>
          <div className={style.formWrap}>
            <div className={style.form}>
              <h4>Связаться со мной</h4>
              <form action="">
                <div className={style.formfield}>
                  <label>Введите ваше имя</label>
                  <input type="text" name="name" id="contact-form-name" />
                </div>
                <div className={style.formfield}>
                  <label>Введите ваш email</label>
                  <input type="text" name="email" id="contact-form-email" />
                </div>

                <div className={style.formfield}>
                  <label>Введите ваше сообщение</label>
                  <textarea name="message" id="contact-form-message" cols={30} rows={6}></textarea>
                </div>
                <div>
                  <Button name={"ОТПРАВИТЬ"} />
                </div>
              </form>
            </div>
          </div>
          <div className={style.contWrap}>
            <div className={style.cont}>
              <ContactItem title={"Телефон"} logo={faPhone} info={"+7-918-119-85-14"} />
              <ContactItem title={"Email"} logo={faEnvelope} info={"vitaliy_myrafa@mail.ru"} />
              <ContactItem title={"Адрес"} logo={faLocationDot} info={"Российская Федерация, г. Краснодар, ул. 1 мая, 388/2"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
