import { FormEvent } from "react";
import style from "./Button.module.scss";

type PropsButtonType = {
  name: string;
};

const Button: React.FC<PropsButtonType> = ({ name }) => {
  return (
    <button className={style.button} type="submit" formNoValidate={true}>
      {name}
    </button>
  );
};

export default Button;
