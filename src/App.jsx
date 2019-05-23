import React, { Component } from 'react';
import './App.css';
import Navbar from './Navbar';
// import WriteNewChirp from './WriteNewChirp';
import ChirpCard from './ChirpCard';
import Icon from './Icon';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      messages: [],
      text: ''
    }
  }
  handleChange(e) {
    this.setState({ text: e.target.value })
  }

  handleClick(e) {
    e.preventDefault();
    console.log(this.state.text);
    let newArray = this.state.messages;   //Need to put this.state.messages into a variable; cannot change this.state in any way
    newArray.push(this.state.text);
    this.setState({ messages: newArray, text:'' })

  }

  componentDidMount() {
    let data = this.state.messages;     // HOW DO I CHANGE THIS TO AN EMPTY ARRAY ???
    this.setState({ messages: data })  //Will update message array with what data represents
  }

  render() {
    let newArray = this.state.messages.map((message, i) => {
      return <ChirpCard key={i} message={message} />
    })

    return (
      <>
        <Navbar />
        <main className="container">
          <section className="col shadow">
            <Icon />
            <h1>What's chirpin'?</h1>
            <div className="card">
              {/* // WriteNewChirp */}
              <form className="was-validated textbox">
                <div className="mb-3">
                  <label for="validationTextarea">New Chirp</label>
                  <textarea
                    className="form-control is-invalid"
                    placeholder="What's chirpin'?"
                    value={this.state.text}
                    onChange={e => this.handleChange(e)}
                    />
                  <button
                    className="button"
                    onClick={e => this.handleClick(e)}
                  >Post Chirp</button>
                </div>
              </form>
            </div>
          </section>
        </main>
        <main className="container">
          <section className="row">
            {newArray}
          </section>
        </main>
      </>
    )
  };

}

export default App;
