import logo from "./logo.svg";
import "./App.css";
import threeThousand from "./Keywords/threeThousand.json";
import twoThousand from "./Keywords/twoThousand.json";
import Keyword from "./Keyword";
import { useEffect, useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [allKeywords, setAllKeywords] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }, 350);

    return () => clearInterval(interval);
  }, []);

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
        <img src={logo} className="App-logo" alt="logo" />
        <div style={{ width: "100vw" }}>
          <Keyword dict={allKeywords[currentIndex]} key={currentIndex} />
        </div>
      </header>
    </div>
  );
}

export default App;
