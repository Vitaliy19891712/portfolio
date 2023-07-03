import style from "./Mywork.module.scss";
type PropsMyworkType = {
  title: string;
  text: string;
  image: string;
  link: string;
};

const Mywork = (props: PropsMyworkType) => {
  return (
    <div className={style.mywork}>
      <div className={style.image}>
        <img src={props.image} alt="Todolist" />
      </div>
      <h5>
        <a href={props.link}>{props.title}</a>
      </h5>
      <h6>{props.text}</h6>
    </div>
  );
};

export default Mywork;
