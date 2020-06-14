import React from 'react';
import './App.css';
import {LoginForm} from './components/login_form'
import {Navbar} from './components/header'
import 'materialize-css/dist/css/materialize.min.css'

function App() {
  return (
    <div className="container">
      <Navbar />
      <LoginForm />
    </div>
  );
}

export default App;
