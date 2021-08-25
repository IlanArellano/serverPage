import { useEffect, useState } from "react";
import Image from "next/image";
import serverStatus from "../services/serverStatus";
import MenuNav from "./ui/MenuNav";
import Button from "./ui/Button";

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
      <MenuNav open={open} setOpen={setOpen} />
      <div className="navContainer">
        <div className="Menu">
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
          <Button
            className="Discordbutton"
            onClick={() => alert("No funciona todavia")}
          >
            Iniciar Sesión con{" "}
            <span>
              Discord<i className="bi bi-discord"></i>
            </span>
          </Button>
        </div>
      </div>

      <style jsx>
        {`
          nav {
            background: #272f38;
            color: #ffffff;
            height: 80px;
          }
          .navContainer {
            display: flex;
            padding: 1rem 2rem 1rem 0;
            justify-content: space-between;
            align-items: center;
            width: 100%;
          }
          .status {
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 15%;
          }
          .Discordbutton {
            background: transparent;
            color: #ffffff;
            border: none;
            cursor: pointer;
            transition: all 0.5s ease;
            width: 60%;
          }
          .Discordbutton:hover {
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
            margin-left: 80px;
          }

          @media screen and (max-width: 1070px) {
            .status {
              width: 20%;
            }
            @media screen and (max-width: 810px) {
              .status {
                width: 30%;
              }
            }
            @media screen and (max-width: 768px) {
              nav {
                padding: 0;
              }
            }
            @media screen and (max-width: 560px) {
              .status {
                width: 35%;
              }
            }
            @media screen and (max-width: 490px) {
              .status {
                width: 50%;
              }
            }
          }
        `}
      </style>
    </nav>
  );
}
