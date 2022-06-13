import { useState } from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";

// CSS
import "bulma/css/bulma.min.css";

// Components
import Contacts from "./components/Contacts";
import Messages from "./components/Messages";
import ErrorPage from "./components/ErrorPage";
import ContactInfo from "./components/ContactInfo";
import MessageUI from "./components/MessageUI";

const Menu = ({ link, text, id, activeMenu, setActiveMenu }) => {
  return (
    <li
      onClick={() => {
        setActiveMenu(id);
      }}
      className={activeMenu === id ? "is-active" : ""}
    >
      <Link to={link}>{text}</Link>
    </li>
  );
};

const menuData = [
  {
    link: "/",
    text: "Contacts",
  },
  {
    link: "/messages",
    text: "Messages",
  },
];

function App() {
  const location = useLocation();
  const isMessage = location.pathname.includes("message");
  const [activeMenu, setActiveMenu] = useState(isMessage ? 1 : 0);

  return (
    <div className="App">
      <div
        style={{
          position: "fixed",
          zIndex: 1,
          background: "white",
          width: "100vw",
          top: 0,
        }}
        className="tabs is-centered "
      >
        <ul>
          {menuData.map((data, indx) => {
            return (
              <Menu
                link={data.link}
                text={data.text}
                id={indx}
                activeMenu={activeMenu}
                setActiveMenu={setActiveMenu}
                key={indx}
              />
            );
          })}
        </ul>
      </div>
      <div style={{ marginTop: 40.6 + 24 }} className="container">
        <Routes>
          <Route path="/" element={<Contacts />} />
          <Route path="/messages" element={<Messages />} />
          <Route path="/info/:id" element={<ContactInfo />} />
          <Route path="/message/:id" element={<MessageUI />} />

          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
