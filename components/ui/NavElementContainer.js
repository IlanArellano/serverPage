import React from "react";
import NavElements from "./NavElements";
import { navigation } from "../../utils/navigation";

export default function NavElementContainer({ open }) {
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
            position: absolute;
            left: 0;
            top: 80px;
            width: ${open ? "300px" : "80px"};
            padding: 10px ${open ? "20px" : "0"};
            background: rgba(255, 255, 255, 1);
            transition: all 0.3s ease;
            transform: translateX(-1000);
          }
        `}
      </style>
    </ul>
  );
}
