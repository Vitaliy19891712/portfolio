import React from "react";
import Footer from "./Footer/Footer";
import Nav from "./Nav/Nav";
import Photo from "./Photo/Photo";
import style from "./Sidebar.module.scss";

const Sidebar = () => {
  return (
    <div className={style.sidebarWrapper}>
      <div className={style.sidebar}>
        <Photo />
        <Nav />
        <Footer />
      </div>
    </div>
  );
};

export default Sidebar;
