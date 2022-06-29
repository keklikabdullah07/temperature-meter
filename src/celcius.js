import React, { Component } from 'react';

class Celcius extends Component {
    render() {
        return (
            <div>

                <h2>Celcius:{this.props.celc}</h2>
            </div>
        );
    }
}

export default Celcius;