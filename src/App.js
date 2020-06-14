import React from 'react';
import './App.css';
import {LoginForm} from './components/login_form'

function App() {
  return (
    <div className="App">
     <section className="section_five">
        <div className="items">
          <LoginForm />
        </div>
        <div className="divider"></div>
        <button type="submit"> {'>'} </button>
     </section>
    </div>
  );
}

export default App;
