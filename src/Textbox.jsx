import React from 'react';
import './Textbox.css';


const Textbox = () => {
    return (
        <form class="was-validated textbox">
            <div class="mb-3">
                <label for="validationTextarea">New Chirp</label>
                <textarea class="form-control is-invalid" id="validationTextarea" placeholder="What's chirpin'?" required></textarea>
                <div class="invalid-feedback">
                    Please enter a message in the text area.
                </div>
            </div>
        </form>
    )
}

export default Textbox;