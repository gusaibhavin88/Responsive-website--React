import React, { useState } from "react";
import {
  frequencies,
  daw,
  vocal,
  mixing,
  mixingconsole,
  mastering,
} from "../../assets/index";
import "../LearnPage/LearnPage.css";
import "../../index.css";

const LearnPage = () => {
  const [currentImage, setcurrentImage] = useState(frequencies);
  return (
    <section id="learnpage" className="section">
      <div className="wrapper">
        <h1>What will you learn?</h1>
        <div className="changecombo">
          <ul>
            <li
              className="textlist"
              onMouseEnter={() => setcurrentImage(frequencies)}
            >
              What are frequencies?
            </li>
            <li className="textlist" onMouseEnter={() => setcurrentImage(daw)}>
              Using DAW
            </li>
            <li
              className="textlist"
              onMouseEnter={() => setcurrentImage(vocal)}
            >
              Vocals Processing
            </li>
            <li
              className="textlist"
              onMouseEnter={() => setcurrentImage(mixing)}
            >
              Mixing
            </li>
            <li
              className="textlist"
              onMouseEnter={() => setcurrentImage(mixingconsole)}
            >
              Mixing console
            </li>
            <li
              className="textlist"
              onMouseEnter={() => setcurrentImage(mastering)}
            >
              Mastering
            </li>
          </ul>
          <img className="changeimg" src={currentImage} alt="Img not foud" />
        </div>
      </div>
    </section>
  );
};

export default LearnPage;
