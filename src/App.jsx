import React from 'react';
import './App.css';
import Navbar from './Navbar';
import Textbox from './Textbox';

const App = () => {
  return (
    <>
      <Navbar />
      <main class="container">
        <div className="col">
          <h1>Chirper</h1>
          <div className="card">
            <Textbox />
          </div>
        </div>
      </main>
    </>
  )
}

export default App;
