import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Navbar/Sidebar";
import style from "./App.module.scss";
import About from "./components/Main/About/About";
import Contacts from "./components/Main/Contacts/Contacts";
import Home from "./components/Main/Home/Home";
import MySkills from "./components/Main/Myskills/MySkills";
import MyWorks from "./components/Main/MyWorks/MyWorks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

function App() {
  const [visible, setVisible] = useState(false);

  const onChangeVisible = () => {
    setVisible(!visible);
  };

  let ikon = visible ? faXmark : faBars;
let classToggle = visible ? style.toggleXmark : style.toggleBars;
  return (
    <BrowserRouter>
      <div className={style.app}>
        <Sidebar visible={visible} />
        <i className={classToggle} onClick={onChangeVisible}>
          <FontAwesomeIcon icon={ikon} size="2xl" style={{ color: "#bbb" }} />
        </i>
        <div className={style.main}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/myskills" element={<MySkills />} />
            <Route path="/myworks" element={<MyWorks />} />
            <Route path="/contacts" element={<Contacts />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}
export default App;
