import React from "react";
import Title from "../../common/Title";
import style from "./About.module.scss";
const About = () => {
  return (
    <div className={style.about}>
      <div className={style.container}>
        <Title title={"ОБО МНЕ"} />
        <div className={style.items}>
          <div className={style.photo}>
            <div className={style.image}></div>
          </div>
          <div className={style.discription}>
            <div className={style.content}>
              <h3>
                Меня зовут <span>Виталий Мурафа</span>
              </h3>
              <p>
                Мой основной фокус - это создание веб-приложений с использованием HTML, CSS, JavaScript и Typescript. Я уверенно работаю с различными
                библиотеками, такими как React, Redux ToolKit, RTKQuery и имею опыт в интеграции с серверными API. Сейчас я совершенствую свои навыки
                и планирую расширить их такими технологиями как Angular и React Native. В свободное время обычно провожу за чтением IT- литературы и
                улучшением моего уровня английского.
              </p>
              <ul>
                <li>
                  <b>Имя Фамилия</b>Виталий Мурафа
                </li>
                <li>
                  <b>Возраст</b>33 года
                </li>
                <li>
                  <b>Язык</b>Русский, Английский(А2)
                </li>
                <li>
                  <b>Страна</b>Российская Федерация
                </li>
                <li>
                  <b>Город</b>Краснодар
                </li>
              </ul>
              {/* <a href="http://express-product.vercel.app/public/Resume.pdf" download target="_blank" rel="noreferrer">
                ЗАГРУЗИТЬ CV
              </a> */}
              <a href="http://express-product.vercel.app/Resume.pdf" download target="_blank" rel="noreferrer">
                ЗАГРУЗИТЬ CV
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
