import './App.css';
import Nav from './Nav';
import Contato from './Contato';
import Estados from './Estados';
import Home from "./Home";
import Mensagens from './Mensagens';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
    <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/contato" component={Contato} />
          <Route path="/estados" component={Estados} />
          <Route path="/mensagens" component={Mensagens} />
        </Switch>
    </div>
    </Router>
  );
}

export default App;