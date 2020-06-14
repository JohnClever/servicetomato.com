import React from 'react';
import './App.css';
import {LoginForm} from './components/login_form'
import {Navbar} from './components/header'

function App() {
  return (
    <div className="App">
      <Navbar />
     <section className="section_five">
        <div className="items">
          <LoginForm />
          <div className="divider"></div>
        <button type="submit"> {'>'} </button>
        </div>
       
     </section>
    </div>
  );
}

export default App;
