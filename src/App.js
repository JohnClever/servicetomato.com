import React from 'react';
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import {BrowserRouter as Router, Route, Switch, Link, useParams} from 'react-router-dom'
import 'materialize-css/dist/css/materialize.min.css'
import logo from './components/img/SERVICE TOMATO LOGO.jpg'
import logoMenu from './components/img/icon_menu.svg'
import {Menu} from './components/Menu'
import Home from './components/Home'

function App() {
  return (
   <Router>
     <div>
        <nav>
          <div className="nav-wrapper">
              <Link to="/" className="brand-logo nav-link left">Servicetomato.com</Link>
              <Link to="/" className="brand-logo nav-logo center"><img src={logo} alt= "logo" width="100%"/></Link>
              <Link to="/menu" className="brand-logo nav-menu right"><img src={logoMenu} alt= "logo"/></Link>
          </div>
        </nav>
      </div>
     <Switch>
      <Route exact path ="/" component={Home}></Route>
      <Route path="/menu" component={Menu}></Route>
      <Route path="/menu/:login" component={Menu}></Route>
     </Switch>
   </Router>
  );
}


export default App;
