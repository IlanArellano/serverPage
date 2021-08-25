import React, { useEffect, useState } from "react";
import NavElements from "./NavElements";
import { navigation } from "../../utils/navigation";

export default function NavElementContainer({ open, size }) {
  return (
    <ul className="iMenuCollapse">
      {navigation.map((nav) => {
        return <NavElements key={nav.id} open={open} {...nav} />;
      })}

      <style jsx>
        {`
          .iMenuCollapse {
            color: #000000;
            font-weight: bold;
            display: flex;
            flex-direction: column;
            width: ${open ? "300px" : "80px"};
            padding: 10px ${open ? "20px" : "0"};
            background: rgba(255, 255, 255, 1);
            transition: all 0.3s ease;
            transform: translateX(-1000);
          }

          @media screen and (max-width: 768px) {
            .iMenuCollapse {
              width: ${open ? `${size}px` : "80px"};
            }
          }
        `}
      </style>
    </ul>
  );
}
