import React from "react";

export default function Stepper({ elements }) {
  console.log(elements);
  if (!Array.isArray(elements))
    throw new Error("Los elementos deben ser de tipo objeto");
  return (
    <>
      <div className="wrapper-progressBar">
        <ul className="progressBar">
          {elements.map((el, i) => {
            return (
              <li className={`${el.active ? "active" : ""}`} key={i}>
                {el.name}
              </li>
            );
          })}
        </ul>
      </div>

      <style jsx>
        {`
          .wrapper-progressBar {
            width: 100%;
          }

          .progressBar {
          }

          .progressBar li {
            list-style-type: none;
            float: left;
            width: 33%;
            position: relative;
            text-align: center;
          }

          .progressBar li:before {
            content: " ";
            line-height: 30px;
            border-radius: 50%;
            width: 30px;
            height: 30px;
            border: 1px solid #ddd;
            display: block;
            text-align: center;
            margin: 0 auto 10px;
            background-color: white;
          }

          .progressBar li:after {
            content: "";
            position: absolute;
            width: 100%;
            height: 2px;
            background-color: #ddd;
            top: 15px;
            left: -50%;
            z-index: -1;
          }

          .progressBar li:first-child:after {
            content: none;
          }

          .progressBar li.active {
            color: dodgerblue;
          }

          .progressBar li.active:before {
            border-color: dodgerblue;
            background-color: dodgerblue;
          }

          .progressBar li.active:after {
            background-color: dodgerblue;
          }
        `}
      </style>
    </>
  );
}
