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
            <div className={style.image}>
              <img src="../../../assets/image.jpg" alt="" />
            </div>
          </div>
          <div className={style.discription}>
            <div className={style.content}>
              <h3>
                Меня зовут <span>Виталий Мурафа</span>
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quidem maxime deleniti recusandae fuga, voluptatibus cupiditate,
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
              <a href="">ЗАГРУЗИТЬ CV</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
