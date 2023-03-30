import { faEnvelope, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "./ContactItem.module.scss";

type PropsButtonType = {
  title: string;
  logo: IconDefinition;
  info: string;
};

const ContactItem = (props: PropsButtonType) => {
  return (
    <div className={`${style.email} ${style.flexitems}`}>
      <i className={style.logo}>
        <FontAwesomeIcon icon={props.logo} size="xl" style={{ color: "#a4acc4" }} />
      </i>
      <div className={style.data}>
        <h6>{props.title}</h6>
        <p>{props.info}</p>
      </div>
    </div>
  );
};

export default ContactItem;
