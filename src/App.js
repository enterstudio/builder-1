import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
    Container, Row, Col
} from 'reactstrap';

import {
    BrowserRouter
} from 'react-router-dom';

import Navigasi from './Navigasi.jsx';
import Sidebar from './Sidebar.jsx';
import Komponen from './Komponen.jsx';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div>
                <Navigasi/>
                <Container fluid>
                    <Row>
                        <Col md="3" className="sidebar">
                            <Sidebar/>
                        </Col>
                        <Col md="9">
                            <Komponen/>
                        </Col>
                    </Row>
                </Container>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
