import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom'
import './App.css';
import 'materialize-css/dist/css/materialize.min.css'
import 'materialize-css/dist/css/materialize.min.css'
import logo from './components/img/SERVICE TOMATO LOGO.jpg'
import logoMenu from './components/img/icon_menu.svg'
import {Menu} from './components/Menu'
import SignIn from './components/SignIn';
import JoinSite from './components/JoinSite';
import AfterSignUp from './components/AfterSignUp';
import AfterLogIn from './components/AfterLogIn';
import { LoginForm } from './components/login_form'
import Home from './components/Home'

class App extends Component {
  render() {
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
      {/* <Route exact path ="/" component={JoinSite}></Route> */}
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/menu" component={Menu}></Route>
      <Route exact path="/menu/join" component={JoinSite}></Route>
      <Route exact path="/menu/signIn" component={SignIn}></Route>
      <Route exact path="/menu/signIn/login" component={LoginForm}></Route>
      <Route exact path="/menu/join/signIn" component={SignIn}></Route>
      <Route exact path="/servicePage" component={AfterLogIn}></Route>
  
     </Switch>
   </Router>
    );
  }
}

export default App



