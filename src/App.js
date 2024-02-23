import "./App.css";
import threeThousand from "./Keywords/threeThousand.json";
import twoThousand from "./Keywords/twoThousand.json";
import Keyword from "./Keyword";
import { useEffect, useState } from "react";
import { Button, Col, Container, Form, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allKeywords, setAllKeywords] = useState({});
  const [continued, setContinued] = useState(false);
  const [speed, setSpeed] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      if (continued) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, speedMeter(speed));

    return () => clearInterval(interval);
  }, [continued, speed]);

  const pause = (status) => {
    setContinued(status);
  };

  const speedMeter = (value) => {
    let speed;
    switch (parseInt(value)) {
      case -5:
        speed = 4000;
        break;
      case -4:
        speed = 3000;
        break;
      case -3:
        speed = 2500;
        break;
      case -2:
        speed = 2000;
        break;
      case -1:
        speed = 1500;
        break;
      case 1:
        speed = 500;
        break;
      case 2:
        speed = 400;
        break;
      case 3:
        speed = 350;
        break;
      case 4:
        speed = 300;
        break;
      case 5:
        speed = 250;
        break;
      default:
        speed = 1000;
        break;
    }

    return speed;
  };
  const speedScale = (value) => {
    let speed;
    switch (parseInt(value)) {
      case -5:
        speed = "X 0.2";
        break;
      case -4:
        speed = "X 0.3";
        break;
      case -3:
        speed = "X 0.4";
        break;
      case -2:
        speed = "X 0.5";
        break;
      case -1:
        speed = "X 0.6";
        break;
      case 1:
        speed = "X1";
        break;
      case 2:
        speed = "X2";
        break;
      case 3:
        speed = "X3";
        break;
      case 4:
        speed = "X4";
        break;
      case 5:
        speed = "X5";
        break;
      default:
        speed = "Normal";
        break;
    }

    return speed;
  };
  useEffect(() => {
    let keywords = {};
    let index = 0;

    Object.keys(twoThousand).forEach((key) => {
      keywords[index] = twoThousand[key];
      index++;
    });

    Object.keys(threeThousand).forEach((key) => {
      keywords[index] = threeThousand[key];
      index++;
    });

    setAllKeywords(keywords);
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        
        <div style={{ width: "95vw", height: "65vh" }}>
          <Container fluid="xs">
            <Row>
              <Col xs={3}></Col>
              <Col xs={6}>
                <Keyword dict={allKeywords[currentIndex]} key={currentIndex} />
              </Col>
              <Col xs={3} style={{paddingTop:"5vh"}}>
                <Container style={{background:"#343a40"}}>
                  <Form.Label>Range</Form.Label>
                  <Form.Range
                    min={-5}
                    max={5}
                    onChange={(e) => {
                      setSpeed(e.target.value);
                    }}
                  />
                  <Form.Label>Your Speed: {speedScale(speed)}</Form.Label>
                  <Row>
            <Button variant="primary" onClick={() => pause(!continued)}>
            {continued ? "Duraklat" : "Başlat"}
          </Button>
            </Row>
                </Container>
              </Col>
            </Row>
          </Container>
        </div>
      </header>
    </div>
  );
}

export default App;
