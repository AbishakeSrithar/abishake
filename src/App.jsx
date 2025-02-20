import Topbar from "./components/topbar/Topbar";
import Works from "./components/works/Works";
import Portfolio from "./components/portfolio/Portfolio";
import Intro from "./components/intro/Intro";
import "./app.scss";
import Contact from "./components/contact/contact";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  return (
    <div className="app">
      <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro/>
        <Portfolio/>
        <Works/>
        <Contact/>
      </div>
    </div>
  );
}

export default App;
