import React, { Component } from 'react';

class Fahrenheit extends Component {
    render() {
        return (
            <div>
                <h2>Fahrenheit:{this.props.celc * 1.8 + 32}</h2>
            </div>
        );
    }
}

export default Fahrenheit;