import React, { useState, useEffect } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Stepper from "../components/ui/Stepper";
import theElements from "../utils/stepperElements";
import useUser from "../hooks/useUser";

const Step1 = dynamic(theElements[0].component, { loading: () => null });
const Step2 = dynamic(theElements[1].component, { loading: () => null });

//Elimina el import dinamico del componente del objeto para que no se guarde en el state
const stepperElements = theElements.map((el) => {
  delete el.component;
  return el;
});

export default function Register() {
  const { getUser } = useUser();
  const user = getUser();
  const [elements, setElements] = useState(() => {
    stepperElements[0].active = true;
    return stepperElements;
  });
  const [step, setStep] = useState(() => {
    if (user === null || user.error) {
      return 0;
    } else if (
      user.user &&
      user.password &&
      !user.error &&
      user.access_token === undefined
    ) {
      return 1;
    } else {
      return 2;
    }
  });
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    console.log(step);
    setElements((prev) => {
      for (let i = 0; i <= step; i++) {
        prev[i].active = true;
      }
      return prev;
    });
    setUpdate((prev) => !prev);
  }, [elements, step, setUpdate]);

  return (
    <>
      <Head>
        <title>Registro</title>
        <meta name="description" content="The server Page" />
        <link rel="icon" href="/statics/icon.png" />
      </Head>
      <div className="registerMain">
        <div className="registerContainer">
          <Stepper elements={elements} update={update} />
          <div className="StepsContainer">
            {step === 0 ? (
              <Step1 setStep={setStep} />
            ) : step === 1 ? (
              <Step2 setStep={setStep} />
            ) : (
              <div>Wey Noooo</div>
            )}
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .registerMain {
            width: 100%;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .registerContainer {
            background: rgba(255, 255, 255, 0.8);
            border: 1px solid rgba(0, 0, 0, 0.1);
            border-radius: 30px;
            padding: 2rem 0;
            margin: 0 10%;
            min-height: 85%;
          }

          .StepsContainer {
            margin-top: 10rem;
            width: 100%;
            display: flex;
            justify-content: center;
          }

          @media screen and (max-height: 830px) {
            .StepsContainer {
              margin-top: 2rem;
            }
          }
          @media screen and (max-height: 730px) {
            .registerMain {
              justify-content: flex-start;
            }
            .registerContainer {
              margin-top: 2rem;
              min-height: 90%;
            }
          }
          @media screen and (max-height: 685px) {
            .registerMain {
              justify-content: flex-start;
            }
            .registerContainer {
              margin-top: 2rem;
              min-height: 100%;
            }
          }
          @media screen and (max-width: 360px) {
            .registerContainer {
              margin: 1%;
            }
          }
        `}
      </style>
    </>
  );
}
