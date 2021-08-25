import Head from "next/head";
import Image from "next/image";
import Card from "../components/ui/card";

export default function Home() {
  return (
    <div className="principalContainer">
      <div>
        <Head>
          <title>Bienvenidos a Nuestro Servidor!</title>
          <meta name="description" content="The server Page" />
          <link rel="icon" href="/statics/icon.png" />
        </Head>
        <div className="mainContainer">
          <div className="logoContainer">
            <Image
              src="/statics/serverLogo.png"
              alt="logo"
              width={2048}
              height={1152}
            />
          </div>
          <span>Bienvenidos a Nuestro Servidor!</span>
        </div>
        <div>
          <h2>Nuestros rangos</h2>
        </div>
        <div className="cards">
          <Card />
          <Card />
          <Card />
        </div>
      </div>

      <style jsx>
        {`
          h2 {
            text-align: center;
          }
          .principalContainer {
            background-image: url("/statics/fondo1.png");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
            opacity: 1;
            animation-name: cargarImagen;
            animation-duration: 1s;
          }
          .mainContainer {
            background: rgba(255, 255, 255, 0.5);
            margin: 0 25vw;
            text-align: center;
            font-size: 3em;
            display: flex;
            flex-direction: column;
            justify-content: center;
            height: 500px;
            animation-name: bienvenida;
            animation-duration: 2s;
          }

          .logoContainer {
            animation-name: logo;
            animation-duration: 3s;
          }

          .cards {
            margin: 50px 10vw 0 10vw;
            display: grid;
            gap: 4rem;
            grid-template-columns: repeat(auto-fill, minmax(15rem, 1fr));
            justify-content: center;
            align-content: center;
          }

          @keyframes cargarImagen {
            from {
              background-image: none;
              opacity: 0;
            }
            to {
              opacity: 1;
              background-image: url("/statics/fondo1.png");
              background-repeat: no-repeat;
              background-size: cover;
              background-position: center;
            }
          }

          @keyframes bienvenida {
            from {
              height: 50px;
            }

            to {
              height: 500px;
            }
          }

          @keyframes logo {
            from {
              opacity: 0;
            }
            to {
              opacity: 1;
            }
          }

          @media screen and (min-width: 1620px) {
            .mainContainer {
              font-size: 1rem;
            }
          }
          @media screen and (min-width: 1200px) {
            .mainContainer {
              font-size: 1.5rem;
            }
          }
          @media screen and (max-width: 1000px) {
            .mainContainer {
              margin: 0 15vw;
            }
          }
          @media screen and (max-width: 768px) {
            .mainContainer {
              margin: 0 10vw;
            }
          }
        `}
      </style>
    </div>
  );
}
