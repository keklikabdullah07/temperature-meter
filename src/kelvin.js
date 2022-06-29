import React, { Component } from 'react';

class Kelvin extends Component {
    render() {
        return (
            <div>
                <h2>Kelvin:{this.props.celc + 273.15}</h2>
            </div>
        );
    }
}

export default Kelvin;