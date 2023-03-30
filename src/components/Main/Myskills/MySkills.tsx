import { faReact, faHtml5, faCss3Alt, faGithub, faSquareJs, faJsSquare } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Myskill from "../../common/Myskill";
import Title from "../../common/Title";
import style from "./MySkills.module.scss";

const MySkills = () => {
  return (
    <div className={style.myskills}>
      <div className={style.container}>
        <Title title={"МОИ НАВЫКИ"} />
        <div className={style.flex}>
          <Myskill
            title={"Java Script"}
            ikon={faSquareJs}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."}
          />
          <Myskill title={"HTML"} ikon={faHtml5} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."} />
          <Myskill title={"CSS"} ikon={faCss3Alt} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."} />
          <Myskill
            title={"React Redux"}
            ikon={faReact}
            text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."}
          />
          <Myskill title={"GitHub"} ikon={faGithub} text={"Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem tenetur ratione quod."} />
        </div>
      </div>
    </div>
  );
};

export default MySkills;
