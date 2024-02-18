import React, { useEffect, useState } from "react";
import axios from "axios";
import "./AdviceCard.css"

const AdviceCard = () => {
  const [advice, setAdvice] = useState({});

  useEffect(() => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip));
  }, []);

  const newAdvice = () => {
    axios
      .get("https://api.adviceslip.com/advice")
      .then((res) => setAdvice(res.data.slip));
  };
  return (
    <div className="advice-card">
      <p>advice #{advice.id}</p>
      <p className="advice">"{advice.advice}"</p>

      <img className="divider" onClick={newAdvice} src="../../images/pattern-divider-desktop.svg" alt="divider" />
      <img className="dice" onClick={newAdvice} src="../../images/icon-dice.svg" alt="dice" />
    </div>
  );
};

export default AdviceCard;
