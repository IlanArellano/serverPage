import { useEffect, useState } from "react";
import Image from "next/image";
import serverStatus from "../services/serverStatus";
import MenuNav from "./ui/MenuNav";

export default function Navbar({ open, setOpen }) {
  const [status, setStatus] = useState({});
  useEffect(() => {
    (async function () {
      //console.log(await serverStatus());
      setStatus(await serverStatus());
    })();
  }, []);
  return (
    <nav>
      <div className="navContainer">
        <div className="Menu">
          <MenuNav open={open} setOpen={setOpen} />
          <div>
            <a className="aInicio" href="#/">
              <Image
                src="/statics/serverLogo.png"
                alt="Inicio"
                width={90}
                height={50}
              />
            </a>
          </div>
        </div>
        <div className="status">
          <div>{`Online: ${
            status.onlinePlayers != undefined && status.maxPlayers != undefined
              ? `${status.onlinePlayers}/${status.maxPlayers}`
              : `${0}/${0}`
          }`}</div>
          <button>
            Iniciar Sesión con{" "}
            <span>
              Discord<i className="bi bi-discord"></i>
            </span>
          </button>
        </div>
      </div>

      <style jsx>
        {`
          nav {
            background: #272f38;
            color: #ffffff;
            padding: 1rem 2rem;
            height: 80px;
          }
          .navContainer {
            display: flex;
            justify-content: space-between;
            align-items: center;
          }
          .status {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 15%;
          }
          button {
            background: transparent;
            color: #ffffff;
            border: none;
            cursor: pointer;
            transition: all 0.5s ease;
            width: 60%;
          }
          button:hover {
            color: red;
          }
          span {
            font-weight: bold;
            color: #5468ff;
          }
          i {
            margin: 0 10px;
            font-size: 1rem;
          }
          .Menu {
            display: flex;
            align-items: center;
          }
        `}
      </style>
    </nav>
  );
}
