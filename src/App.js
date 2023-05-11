import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    
      
      <div className="App bg-gray-400">
          <Navbar/>
          <Home/>
          <About/>
          <Skills/>
          <Works/>
          <Contact/>
      </div>
    
  );
}

export default App;
