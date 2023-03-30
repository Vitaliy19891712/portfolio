import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Photo from "./Photo/Photo";
import style from "./Sidebar.module.scss";
type PropsSidebarType = {
  visible: boolean;
  onClickHandler:()=>void;
};

const Sidebar = (props: PropsSidebarType) => {
  let classSidebarWrapper = props.visible ? style.sidebarWrapperVis : style.sidebarWrapperInvis;

  return (
    <div className={classSidebarWrapper}>
      <div className={style.sidebar}>
        <Photo />
        <Nav onClickHandler={ props.onClickHandler} />
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
