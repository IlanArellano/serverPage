import React, { useState, useRef } from "react";
import NavElementContainer from "./NavElementContainer";

export default function MenuNav({ open, setOpen }) {
  const list = useRef();

  const handleClick = (e) => {
    list.current.style.transform = `rotate(${open ? 90 : 0}deg)`;
    setOpen((prevOpen) => !prevOpen);
  };
  return (
    <div className="iMenu">
      <div className="Lista" ref={list} onClick={handleClick}>
        <i className="bi bi-list" />
      </div>
      <NavElementContainer open={open} />

      <style jsx>{`
        .IMenu {
          position: relative;
          color: #ffffff;
        }
        .Lista {
          font-size: 2rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          transition: all 0.3s ease;
        }
      `}</style>
    </div>
  );
}
