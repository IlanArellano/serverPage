import React from "react";

/**
 * Crea un tooltip que puede ser envuelto en cualquier elemento o componente de React
 * @param {String} test Es el texto que va a tener el Tooltip
 * @param {String} side Indica la posicion del tooltip (left, right, top, bottom)
 * @param {Boolean} arrow Indica si se quiere pintar un arrow
 * @returns {HTMLElement} un elemento
 */
export default function Tooltip({ children, text = "", side, arrow = false }) {
  const position = (side) => {
    switch (side) {
      case "right":
        return {
          top: "-5px",
          left: "105%",
          right: null,
          bottom: null,
          marginLeft: null,
        };
      case "left":
        return {
          top: "-5px",
          right: "100%",
          left: null,
          bottom: null,
          marginLeft: null,
        };
      case "top":
        return {
          bottom: "100%",
          left: "50%",
          top: null,
          right: null,
          marginLeft: "-60px",
        };
      case "bottom":
        return {
          top: "100%",
          left: "50%",
          right: null,
          bottom: null,
          marginLeft: "-60px",
        };

      default:
        return {
          bottom: "100%",
          left: "50%",
          top: null,
          right: null,
          marginLeft: "-60px",
        };
    }
  };

  const getArrowPosition = (side) => {
    switch (side) {
      case "right":
        return {
          top: "50%",
          right: "100%",
          left: null,
          bottom: null,
        };
      case "left":
        return {
          top: "50%",
          left: "100%",
          right: null,
          bottom: null,
        };
      case "bottom":
        return {
          bottom: "100%",
          left: "50%",
          top: null,
          right: null,
        };
      case "top":
        return {
          top: "100%",
          right: "50%",
          left: null,
          bottom: null,
        };

      default:
        return {
          top: "100%",
          right: "50%",
          left: null,
          bottom: null,
        };
    }
  };

  const getArrow = getArrowPosition(side);
  const getPosition = position(side);

  if (!children)
    throw new Error(
      "El componente Tooltip requiere de un elemento HTML o componente de React hijo para que pueda funcionar"
    );
  return (
    <>
      <div className="tooltip">
        {children}
        <span className="tooltipText">{text}</span>
      </div>

      <style jsx>
        {`
                .tooltip {
                    position: relative;
                    display: inline-block;
                }
                .tooltipText {
                    border-radius: 5px;
                    visibility: hidden;
                    width: 120px;
                    margin-left: ${
                      getPosition.marginLeft ? getPosition.marginLeft : "0"
                    }
                    ${
                      getPosition.left
                        ? `left: ${getPosition.left};`
                        : `right: ${getPosition.right};`
                    }
                    ${
                      getPosition.top
                        ? `top: ${getPosition.top};`
                        : `bottom: ${getPosition.bottom};`
                    }
                    background-color: #000000;
                    color: #fff;
                    text-align: center;
                    padding: 5px 0;

                    position: absolute;
                    z-index: 1;
                }

                .tooltip:hover .tooltipText {
                    visibility: visible;
                }
                ${
                  arrow &&
                  `
                    .tooltipText::after {
                      content: " ";
                      position: absolute;
                      ${
                        getArrow.top
                          ? `top: ${getArrow.top};`
                          : `bottom: ${getArrow.bottom};`
                      }
                      ${
                        getArrow.left
                          ? `left: ${getArrow.left};`
                          : `right: ${getArrow.right};`
                      }
                      margin-left: -5px;
                      border-width: 5px;
                      border-style: solid;
                      border-color: black transparent transparent transparent;
                    }
                    `
                }
                `}
      </style>
    </>
  );
}
