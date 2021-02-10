import './App.css';
import Header from './components/Header/index'
import Container from './components/Container/index';
import Projects from "./components/Projects";
import CV from "./utils/WebDevResume.pdf"
import Footer from './components/Footer/index';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";



function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route exact path="/" component={Container}/>
          <Route path="/Projects" component={Projects}/>
          <Route path="/CV" component={CV}/>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
