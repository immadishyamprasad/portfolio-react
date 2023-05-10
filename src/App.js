import About from "./components/About";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Skills from "./components/Skills";



function App() {
  return (
    <div className="App bg-gray-400">
      <Navbar/>
      <Home/>
      <About/>
      <Skills/>
    </div>
  );
}

export default App;
