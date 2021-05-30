import React from "react";
import "../MovieRating/Rate.css";
function Rate({ rate, setRateSearch }) {
  const stars = (x) => {
    let starArray = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= x) {
        starArray.push(
          <span className="stars" key={i} onClick={() => setRateSearch(i)}>
            ★
          </span>
        );
      } else {
        starArray.push(
          <span className="stars" key={i} onClick={() => setRateSearch(i)}>
            ☆
          </span>
        );
      }
    }
    return starArray;
  };

  return <div>{stars(rate)}</div>;
}

export default Rate;
