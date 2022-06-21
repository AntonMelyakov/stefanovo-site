import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import History from "./Pages/History";
import Home from "./Pages/Home";
import GalleryPage from "./Pages/Gallery";
import Contacts from "./Pages/Contacts";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column app-container">
        <Header />

        {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/history" element={<History />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="/gallery" element={<GalleryPage />} />
        </Routes>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
