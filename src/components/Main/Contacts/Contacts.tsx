import { faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";
import Button from "../../common/Button";
import Title from "../../common/Title";
import style from "./Contacts.module.scss";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import ContactItem from "../../common/ContactItem";
import { ChangeEvent,  FormEvent,  useState } from "react";
import Stack from "@mui/material/Stack";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert, { AlertProps } from "@mui/material/Alert";
import React from "react";
import axios from "axios";

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  phone: HTMLInputElement;
  message: HTMLInputElement;
}

interface YourFormElement extends HTMLFormElement {
  readonly elements: FormElements;
}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Contacts = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [openSuccess, setOpenSuccess] = useState(false);
  const [openError, setOpenError] = useState(false);
  const handleCloseSuccess = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }

    setOpenSuccess(false);
  };
  const handleCloseError = (event?: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === "clickaway") {
      return;
    }
    setOpenError(false);
  };

  const onchangeNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.currentTarget.value);
  };
  const onchangeEmailHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.currentTarget.value);
  };
  const onchangePhoneHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setPhone(e.currentTarget.value);
  };
  const onchangeMessageHandler = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setMessage(e.currentTarget.value);
  };

  const handleSubmit = (e: FormEvent<YourFormElement>) => {
    e.preventDefault();
    axios
      .post("https://https://express-product.vercel.app//sendMessage", {
        name: e.currentTarget.elements.name.value,
        phone: e.currentTarget.elements.phone.value,
        email: e.currentTarget.elements.email.value,
        message: e.currentTarget.elements.message.value,
      })
      .then(() => {
        setOpenSuccess(true);
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
      })
      .catch(() => {
        setOpenError(true);
      });
  };
  return (
    <div className={style.contacts}>
      <Stack spacing={2} sx={{ width: "100%" }}>
        <Snackbar open={openSuccess} autoHideDuration={6000} onClose={handleCloseSuccess}>
          <Alert onClose={handleCloseSuccess} severity="success" sx={{ width: "100%" }}>
            Контакты успешно отправлены!
          </Alert>
        </Snackbar>
        <Snackbar open={openError} autoHideDuration={6000} onClose={handleCloseError}>
          <Alert severity="error">Что-то пошло не так!</Alert>
        </Snackbar>
      </Stack>
      <div className={style.container}>
        <Title title={"КОНТАКТЫ"} />
        <div className={style.flex}>
          <div className={style.formWrap}>
            <div className={style.form}>
              <h4>Связаться со мной</h4>
              <form id="contacts" onSubmit={handleSubmit}>
                <div className={style.formfield}>
                  <label>Введите ваше имя</label>
                  <input type="text" name="name" value={name} onChange={onchangeNameHandler} />
                </div>
                <div className={style.formfield}>
                  <label>Введите ваш телефона</label>
                  <input type="tel" name="phone" value={phone} onChange={onchangePhoneHandler} />
                </div>
                <div className={style.formfield}>
                  <label>Введите ваш email</label>
                  <input type="text" name="email" value={email} onChange={onchangeEmailHandler} />
                </div>

                <div className={style.formfield}>
                  <label>Введите ваше сообщение</label>
                  <textarea name="message" cols={30} rows={6} onChange={onchangeMessageHandler} value={message}></textarea>
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
