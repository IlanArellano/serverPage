import React from "react";

export default function Card() {
  return (
    <div className="card">
      <div className="cardHeader">title</div>
      <div className="cardContent">this is a content Card</div>
      <div className="cardFooter">footer</div>

      <style jsx>
        {`
          .card {
            background: #ffffff;
            height: 500px;
            width: 300px;
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 5px;
            padding: 0 1rem;
            transition: all 0.3s ease;
          }
          .card:hover {
            transform: scale(1.05);
          }
          .cardHeader {
            height: 100px;
            font-size: 3em;
          }
          .cardContent {
            height: 350px;
          }
          .cardFooter {
            height: 50px;
          }
        `}
      </style>
    </div>
  );
}
