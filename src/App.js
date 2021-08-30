import './App.css';
import Navbar from './Components/Navbar';
import { BrowserRouter,  Switch, Route, } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';
import Contact from './Pages/Contact';


function App() {
  return (
    <BrowserRouter className="App">
        <Navbar />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/projects" component={Project} />
          <Route path="/contact" component={Contact} />
        </Switch>

    </BrowserRouter>
  );
}

export default App;
