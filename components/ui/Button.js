import React from "react";
import Icon from "./Icon";

export default function Button({
  children,
  onClick,
  className,
  icon,
  iconSize,
}) {
  if (!children)
    throw new Error(
      "El elemento Button debe tener un elemento HTML o componente React Hijo"
    );
  return (
    <>
      <button onClick={onClick} className={className}>
        {icon && <Icon className={icon} size={iconSize} />}
        <div className="buttonChildren">{children}</div>
      </button>

      <style jsx>
        {`
          button {
            display: flex;
            border: 1px solid rgba(0, 0, 0, 0.1);
            background: transparent;
            color: #ffffff;
          }
        `}
      </style>
    </>
  );
}
