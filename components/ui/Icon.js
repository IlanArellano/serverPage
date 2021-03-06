import React from "react";

/**
Pinta un icono proveniente de la libreria de BootstrapIcons
@param {String} className Es la clase del icono correspondiente
@param {Number} size El tamaño del icono, por defecto es 10 px
@see https://icons.getbootstrap.com
*/
export default function Icon({
  className = "bi bi-bug",
  size = 10,
  onClick = undefined,
  ref = undefined,
}) {
  return (
    <>
      <i className={className} ref={ref} onClick={onClick} />

      <style jsx>
        {`
          i {
            font-size: ${size}px;
          }
        `}
      </style>
    </>
  );
}
