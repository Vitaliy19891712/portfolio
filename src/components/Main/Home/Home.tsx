import { faGithub, faVk } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { Particle } from "../../common/Particles";
import style from "./Home.module.scss";
import ReactTypingEffect from "react-typing-effect";

const Home = () => {
  return (
    <div className={style.home}>
      <Particle />
      <div className={style.container}>
        <div className={style.content}>
          <div className={style.flex}>
            <h1>
              Меня зовут{" "}
              <ReactTypingEffect
                text={"Виталий Мурафа"}
                typingDelay={200}
                displayTextRenderer={(text, i) => {
                  return <span className={style.name}>{`${text} `}</span>;
                }}
              />
            </h1>
            <p>
              "Привет! Я опытный фронтэнд разработчик. Мои навыки включают HTML, CSS, JavaScript и библиотеки, такие как
              React и Redux. Готов присоединиться к команде и внести вклад в разработку веб-приложений. Спасибо за рассмотрение моего резюме!"
            </p>
            <ul>
              <li>
                <NavLink to={"https://vk.com/murafa1989"}>
                  <i>
                    <FontAwesomeIcon icon={faVk} size="2xl" style={{ color: "#ffffff" }} />
                  </i>
                </NavLink>
              </li>
              <li>
                <NavLink to={"https://github.com/Vitaliy19891712"}>
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
