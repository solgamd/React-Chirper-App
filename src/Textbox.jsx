import React from 'react';
import './Textbox.css';
import ChirpCorral from './ChirpCorral';

class Textbox extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    handleChange(e) {
        this.setState({ text: e.target.value })
    }

    handleClick() {      
        return (
            <>
        <ChirpCorral />      
        </>
        )
    }

    render() {
        return (
            <>
                <form className="was-validated textbox">
                    <div className="mb-3">
                        <label for="validationTextarea">New Chirp</label>
                        <textarea
                            className="form-control is-invalid"
                            id="validationTextarea"
                            placeholder="What's chirpin'?"
                            text=""
                            value={this.state.text}
                            onChange={(e) => { this.handleChange(e) }}
                            required>
                        </textarea>
                        <div className="invalid-feedback promptText">
                            Enter your chirp.
                        </div>
                        <button
                            className="button"
                            onClick={() => { this.handleClick() }}
                        >Post Chirp</button>
                    </div>
                </form>
            </>
        );
    }
}

export default Textbox;