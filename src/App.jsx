import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
import Textbox from './Textbox';
import ChirpCorral from './ChirpCorral';
import Icon from './Icon';


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
            <Icon />
            <h1>What's chirpin'?</h1>
            <div className="card">
              <Textbox />

            </div>
          </section>
        </main>
        <main className="container">
          <section className="col"></section>
          <div className="chirpsCorral">
            <ChirpCorral />
          </div>
        </main>
      </>
    )
  };

}

export default App;
