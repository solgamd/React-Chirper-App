import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Textbox from './Textbox';


class App extends Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }
  render() {
    return (
      <>
        <Navbar />
        <main className="container">
          <section className="col shadow">
            <h1>Chirper</h1>
            <div className="card">
              <Textbox />
              <div>
                <div className="chirpsCorral">
                  <ul className="chirpList">
                    
                  </ul>
                </div>
              </div>
            </div>

          </section>
        </main>
      </>
    )
  };

}

export default App;
