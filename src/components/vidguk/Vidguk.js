import React, { useState } from "react";
import data from "./data";
import "./Vidguk.css";

export default function Vidguk() {
  const [index, setIndex] = useState(0);
  const review = data[index];
  console.log(review);
  const next = () => {
    if (index === data.length - 1) {
      setIndex(0);
    } else {
      setIndex((index) => index + 1);
    }
  };
  const back = () => {
    if (index === 0) {
      setIndex(5);
    } else {
      setIndex((index) => index - 1);
    }
  };

  return (
    <section>
      <h2 className="vidguk-title">Трофеї «Реала»</h2>
      <div className="vidguk">
        <img src={review.image} className="vidguk-img" />
        <div>
          <h3 className="vidguk-name">{review.name}</h3>
        </div>
        <div>
          <button type="button" className="vidguk-btn" onClick={back}>
            Попередній
          </button>
          <button type="button" className="vidguk-btn" onClick={next}>
            Наступний
          </button>
          <br />
        </div>
      </div>
    </section>
  );
}
