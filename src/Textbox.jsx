import React from 'react';
import './Textbox.css';


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

    handleClick() {                 ////////////////////////// TRYING FOR LOOP BEFORE MAP
        let chirpCorral = [];
        let chirpCard = <div className="chirpCard">{this.state.text}</div>;
        // let chirpText = this.state.text;
        for (let i = 0; i < chirpCorral.length; i++) {
            chirpCorral.push(chirpCorral[i]);
        }
        chirpCorral.append(chirpCard);

        return (
            <ul>{ chirpCorral }</ul>
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
                            onChange={(e) => { this.handleChange(e) }}
                            required>
                        </textarea>
                        <div className="invalid-feedback">
                            Enter your chirp.
                        </div>
                        <button 
                        className="button"
                        onClick={() => { this.handleClick()}}
                        >Post Chirp</button>
                    </div>
                </form>
            </>
        );
    }
}

export default Textbox;