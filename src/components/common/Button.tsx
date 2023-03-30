import style from "./Button.module.scss";

type PropsButtonType = {
  name: string;
};

const Button = (props: PropsButtonType) => {
  return (
    <a className={style.button} href="">
      {props.name}
    </a>
  );
};

export default Button;
