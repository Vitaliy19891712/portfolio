import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Navbar/Sidebar";
import style from "./App.module.scss";
import About from "./components/Main/About/About";
import Contacts from "./components/Main/Contacts/Contacts";
import Home from "./components/Main/Home/Home";
import MySkills from "./components/Main/Myskills/MySkills";
import MyWorks from "./components/Main/MyWorks/MyWorks";

function App() {
  return (
    <BrowserRouter>
      <div className={style.app}>
        <div className={style.sidebarWrapper}>
          <Sidebar />
        </div>
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
