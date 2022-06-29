import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row } from 'reactstrap'
import Buton from './Buton'




class App extends Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <h1>Hava Nasıl</h1>
          </Row>
          <Row>
            <Buton />
          </Row>
        </Container>


      </div>
    );
  }
}

export default App;