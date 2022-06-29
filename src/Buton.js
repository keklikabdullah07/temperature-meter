import React, { Component } from 'react';
import { Button, Col, Row, Container } from "reactstrap";
import Celcius from "./celcius"
import Kelvin from "./kelvin"
import Fahrenheit from "./fahrenheit"


class Buton extends Component {
    constructor(props) {
        super(props)

        this.state = { arttir: 0 }
    }
    clickHandler = () => {
        this.setState({
            arttir: this.state.arttir + 1
        })
    }

    render() {
        const { arttir } = this.state;
        return (

            <div>
                <Container>
                    <Row>
                        <h5>Şuanki Sıcaklık değeri:{arttir}</h5>
                    </Row>

                    <Button onClick={this.clickHandler}>Sıcaklık Arttır</Button>
                    <h5>3 Birimde Sıcaklık Ölçümü:</h5>
                    <Row>
                        <Col>
                            <Celcius celc={this.state.arttir} />
                        </Col>
                        <Col>
                            <Kelvin celc={this.state.arttir} />
                        </Col>
                        <Col>
                            <Fahrenheit celc={this.state.arttir} />
                        </Col>
                    </Row>
                </Container>
            </div>

        );
    }
}

export default Buton;