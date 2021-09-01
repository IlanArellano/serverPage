import React from "react";

export default function Footer({ display }) {
  if (!display) return null;

  return (
    <footer>
      <div>
        <h2>BEECRAFTY</h2>
      </div>

      <style jsx>
        {`
          footer {
            background: #18191c;
            color: #ffffff;
          }
        `}
      </style>
    </footer>
  );
}
