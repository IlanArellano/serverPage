import React, { useState, useRef, useEffect } from "react";
import NavElementContainer from "./NavElementContainer";

export default function MenuNav({ open, setOpen }) {
  const list = useRef();
  const [size, setSize] = useState(0);

  const handleClick = (e) => {
    list.current.style.transform = `rotate(${open ? 90 : 0}deg)`;
    setOpen((prevOpen) => !prevOpen);
  };

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setSize(window.innerWidth);
  });
  return (
    <>
      <div className="navFixed">
        <div className="iMenu">
          <div className="Lista" ref={list} onClick={handleClick}>
            <i className="bi bi-list" />
          </div>
          <NavElementContainer open={open} size={size} />
        </div>
      </div>

      <style jsx>{`
        .navFixed {
          position: fixed;
          z-index: 2;
        }
        .iMenu {
          color: #ffffff;
        }
        .Lista {
          font-size: 2rem;
          cursor: pointer;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 80px;
          background: black;
          width: 80px;
          transition: all 0.3s ease;
        }
      `}</style>
    </>
  );
}
