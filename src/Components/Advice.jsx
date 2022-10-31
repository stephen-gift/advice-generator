import React, { useEffect, useState } from "react";
// import axios from "axios";
import pauseDextop from "../Assets/images/pattern-divider-desktop.svg";
// import pauseMobile from '../Assets/images/pattern-divider-mobile.svg'
import dice from "../Assets/images/icon-dice.svg";

const Advice = () => {
  const [Advice, setAdvice] = useState([]);

  const apiData = () => {
    const url = "https://api.adviceslip.com/advice";
    fetch(url)
      .then((response) => response.json())
      .then((result) => {
        // console.log(result.slip);
        setAdvice(result.slip);
      });
  };

  useEffect(() => {
    apiData();
  }, []);

  return (
    <div className="advice">
      <div className="head">
        <small>Advice #{Advice.id}</small>
      </div>
      <div className="body">{Advice.advice}</div>
      <div className="foot">
        <img src={pauseDextop} alt="" className="pauseDesktop" />
      </div>
      <button className="diceRefresh" onClick={apiData}>
        <img src={dice} alt="diceRefresh" />
      </button>
    </div>
  );
};

export default Advice;
