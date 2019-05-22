import React from 'react';

class ChirpCorral extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
    }
    render() {
        let chirpArray = [];
        let chirpList = chirpArray.map((val, i) => {
            return <li key={i}>{val.text}</li>;
        })
        return <ul>{chirpList}</ul>;
    };
};

export default ChirpCorral;