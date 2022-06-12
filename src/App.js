import { Routes, Route, Link } from "react-router-dom";

// CSS
import "./App.css";
import "bulma/css/bulma.min.css";

// Components
import Contacts from "./components/Contacts";
import Messages from "./components/Messages";
import ErrorPage from "./components/ErrorPage";
import ContactInfo from "./components/ContactInfo";
import MessageUI from "./components/MessageUI";

function App() {
  return (
    <div className="App">
      <div className="tabs is-centered ">
        <ul>
          <li className="is-active">
            <Link to="/">Contacts</Link>
          </li>
          <li>
            <Link to="/messages">Messages</Link>
          </li>
        </ul>
      </div>
      <div className="container">
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
