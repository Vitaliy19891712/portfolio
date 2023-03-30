import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./Myskill.module.scss";

type PropsMyskillType = {
  title: string;
  ikon: IconProp;
  text: string;
};

const Myskill = (props: PropsMyskillType) => {
  return (
    <div className={style.myskill}>
      <div className={style.container}>
        <div>
          <i>
            <FontAwesomeIcon icon={props.ikon} size="2xl" style={{ color: "#037fff" }} />
          </i>
        </div>
        <h5>{props.title}</h5>
        <p>{props.text}</p>
      </div>
    </div>
  );
};

export default Myskill;
