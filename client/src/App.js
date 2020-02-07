import React from "react";
import "./App.css";
import DayQuote from "./components";
import { Container, Row, Col } from "react-bootstrap";

function App() {
  return (
    <div className="App">
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <DayQuote />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
