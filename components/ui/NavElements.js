import React from "react";
import Icon from "./Icon";
import Tooltip from "./Tooltip";

export default function NavElements({ open, icon, name, dropdown }) {
  return (
    <li className="NavElements">
      {open ? (
        <>
          <div>
            <Icon size={20} className={icon} />
          </div>
          <span>{name}</span>
        </>
      ) : (
        <>
          <div>
            <Tooltip side="right" text={name} arrow>
              <Icon size={20} className={icon} />
            </Tooltip>
          </div>
        </>
      )}

      <style jsx>
        {`
          .NavElements {
            display: flex;
            justify-content: ${open ? "space-between" : "center"};
            align-items: center;
            list-style: none;
          }
        `}
      </style>
    </li>
  );
}
