import style from "./MySkillsBlock.module.css";
import cstyle from "./../../../styles/commonstyle.module.css";
import SkillBlock from "./SkillBlock/SkillBlock";

const MySkillsBlock = () => {
  return (
    <div className={style.myskillsblock}>
      <div className={`${cstyle.container} ${style.flex}`}>
        <div className={style.nameBlock}>Мои скиллы</div>
        <div className={style.skills}>
          <SkillBlock />
          <SkillBlock />
          <SkillBlock />
        </div>
      </div>
    </div>
  );
};

export default MySkillsBlock;
