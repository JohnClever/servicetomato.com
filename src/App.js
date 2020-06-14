import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
     <section className="section_five">
        <div className="items">
          <form action="" method="post">
              <input type="text" name="contact" placeholder="CONTACT" id="" required />
              <input type="password" name="password" placeholder="PASSWORD" id="" required />
              <p><a href=" ">lost password?</a></p>
          </form>
        </div>
        <div className="divider"></div>
        <button type="submit"> {'>'} </button>
     </section>
    </div>
  );
}

export default App;
