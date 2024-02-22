import logo from "./logo.svg";
import "./App.css";
import threeThousand from "./Keywords/threeThousand.json";
import twoThousand from "./Keywords/twoThousand.json";
import Keyword from "./Keyword";
import { useEffect, useState } from "react";

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex(currentIndex + 1)
    }, 350);

    return () => clearInterval(interval);
  }, [currentIndex]);
  
  
  let sizeTwoThousand = Object.keys(twoThousand);
  let sizeThreeThousand = Object.keys(threeThousand);
  let allKeywords = {};
  let index = 0;

  sizeTwoThousand.map((e) => {
    allKeywords[index] = twoThousand[e];
    index++;
  });
  sizeThreeThousand.map((e) => {
    allKeywords[index] = threeThousand[e];
    index++;
  });
  
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
