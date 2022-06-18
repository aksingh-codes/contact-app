import { Routes, Route, NavLink } from "react-router-dom";

// CSS
import "bulma/css/bulma.min.css";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

// Components
import Contacts from "./components/Contacts";
import Messages from "./components/Messages";
import ErrorPage from "./components/ErrorPage";
import ContactInfo from "./components/ContactInfo";
import MessageUI from "./components/MessageUI";

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

const activeStyles = {
  color: "#485fc7",
  borderBottomColor: "#485fc7",
  borderBottomStyle: "solid",
  borderBottomWidth: "1px",
};

function App() {
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
              <NavLink
                key={indx}
                to={data.link}
                style={({ isActive }) => (isActive ? activeStyles : undefined)}
              >
                {data.text}
              </NavLink>
            );
          })}
        </ul>
      </div>
      <div style={{ marginTop: 40.6 + 24 }} className="container ">
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
