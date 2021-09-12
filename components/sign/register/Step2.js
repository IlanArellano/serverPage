import React, { useState, useEffect } from "react";
import {
  getDiscordTokenURL,
  getDiscordToken,
} from "../../../services/sign/register";
import useUser from "../../../hooks/useUser";

export default function Step2({ setStep }) {
  const [clientID] = useState(() => process.env.NEXT_PUBLIC_CLIENT_ID);
  const [host] = useState(() => process.env.NEXT_PUBLIC_HOST_URL);
  const { getUser, setUserC } = useUser();
  const user = getUser();

  useEffect(() => {
    (async function () {
      const url = window.location.href;
      if (!url.endsWith("register")) {
        const splitCode = url.split("?");
        if (splitCode.length > 1 && splitCode[1].startsWith("code=")) {
          const code = splitCode[1].slice(5);
          const res = await getDiscordToken(code);
          if (!res.error) {
            setUserC({ ...user, ...res });
            setStep(2);
          }
        }
      }
    })();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const later = () => {
    setUserC({ ...user, access_token: null });
    setStep(2);
  };
  return (
    <>
      <div className="Step2Main">
        <h2>
          Bienvenido {user.user}, te gustaría enlazar tu cuenta de Discord
          ahora?
        </h2>
        <div className="StepButtons">
          <a
            href={getDiscordTokenURL({
              host: `${host}/register`,
              clientID,
              type: "code",
            })}
            className="Discord"
          >
            Conectate con Discord
          </a>
          <button className="later" onClick={() => later()}>
            Hacerlo más tarde
          </button>
        </div>
      </div>
      <style jsx>{`
        h2 {
          text-align: center;
          margin: 2rem 0;
        }
        .StepButtons {
          display: flex;
          flex-direction: column;
        }
        a,
        button {
          text-align: center;
          cursor: pointer;
          border-radius: 5px;
          border: 1px solid rgba(0, 0, 0, 0.1);
          font-size: 1rem;
          font-weight: bold;
          width: 100%;
          padding: 1rem 0;
          margin: 1rem 0;
        }

        .Discord {
          background: hsl(
            235,
            calc(var(--saturation-factor, 1) * 85.6%),
            64.7%
          );
        }

        @media screen and (max-width: 870px) {
          .Step2Main {
            margin: 0 1rem;
          }
        }
      `}</style>
    </>
  );
}
