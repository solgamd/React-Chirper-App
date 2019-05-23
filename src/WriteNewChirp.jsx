import React from 'react';
import './WriteNewChirp.css';

class WriteNewChirp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            text: ""
        }
    }

    // handleChange(e) {
    //     this.setState({ text: e.target.value })
    // }

    // handleClick(e) {     
    //     e.preventDefault(); 
    //     console.log('test');
    // }

    render() {
        return (
            <>
                {/* <form className="was-validated textbox">
                    <div className="mb-3">
                        <label for="validationTextarea">New Chirp</label>
                        <textarea
                            className="form-control is-invalid"
                            id="validationTextarea"
                            placeholder="What's chirpin'?"
                            text=""
                            value={this.state.text}
                            onChange={e => this.handleChange(e)}
                            required />
                        <div className="invalid-feedback promptText">
                            Enter your chirp.
                        </div>
                        <button
                            className="button"
                            onClick={e => { this.handleClick(e) }}
                        >Post Chirp</button>
                    </div>
                </form> */}
            </>
        );
    }
}

export default WriteNewChirp;