import logo from "./logo.svg";
import "./App.css";
import threeThousand from "./Keywords/threeThousand.json";
import twoThousand from "./Keywords/twoThousand.json";
import Keyword from "./Keyword";
import { useEffect, useState } from "react";
import { Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allKeywords, setAllKeywords] = useState({});
  const [continued, setContinued] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      if (continued) {
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }
    }, 350);

    return () => clearInterval(interval);
  }, [continued]);

  const pause = (status) => {
    setContinued(status);
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
        <div>
          <Button  variant="primary" onClick={() => pause(!continued)}>
            {continued ? "Duraklat" : "Başlat"}
          </Button>
        </div>
        <div style={{ width: "100vw", height: "65vh" }}>
          <Keyword dict={allKeywords[currentIndex]} key={currentIndex} />
        </div>
      </header>
    </div>
  );
}

export default App;
