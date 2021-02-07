import logo from './logo.svg';
import './App.css';
import Header from './components/Header/index'
import Container from './components/Container/index';
import Projects from "./components/Projects"
import Footer from './components/Footer/index';
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Switch>
          <Route path="/" exact component={Container}/>
          <Route path="/Projects" component={Projects}/>
        </Switch>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
