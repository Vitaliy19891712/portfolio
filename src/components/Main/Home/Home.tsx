import React from "react";
import style from "./Home.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVk } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className={style.home}>
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.flex}>
            <h1>
              Меня зовут <span>Виталий Мурафа</span>
            </h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente quidem maxime deleniti recusandae fuga, voluptatibus cupiditate,</p>
            <ul>
              <li>
                <NavLink to={"https://github.com/Vitaliy19891712"}>
                  <i>
                    <FontAwesomeIcon icon={faVk} size="2xl" style={{ color: "#ffffff" }} />
                  </i>
                </NavLink>
              </li>
              <li>
                <NavLink to={"https://vk.com/murafa1989"}>
                  <i>
                    <FontAwesomeIcon icon={faGithub} size="2xl" style={{ color: "#ffffff" }} />
                  </i>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
