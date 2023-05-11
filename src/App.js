import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";
import Works from "./components/Works";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";



function App() {
  return (
    <Router>
      <Navbar/>
      <div className="App bg-gray-400">
        <Switch>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route exact path="/about">
            <About/>
          </Route>
          <Route exact path="/skills">
            <Skills/>
          </Route>
          <Route exact path="/works">
            <Works/>
          </Route>
          <Route exact path="/contact">
            <Contact/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
