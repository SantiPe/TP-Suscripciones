import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Principal from './modules/Principal';
import Registro from './modules/Registro';
import Listado from './modules/Listado';


class App extends Component {

  render() {

    return (
      <div className="App">
        <NavBar />
        <Router>
          <Switch>
            <Route exact path="/" component={Principal} />
            <Route path="/registro" component={Registro} />
            <Route path="/listado" component={Listado} />
          </Switch>
        </Router>
      <Footer />    
      </div>
    )
  }
}

export default App;
