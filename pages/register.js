import React, { useState, useEffect, lazy, Suspense } from "react";
import Head from "next/head";
import dynamic from "next/dynamic";
import Stepper from "../components/ui/Stepper";
import theElements from "../utils/stepperElements";

const Step1 = dynamic(theElements[0].component, { loading: () => null });

//Elimina el import dinamico del componente del objeto para que no se guarde en el state
const stepperElements = theElements.map((el) => {
  delete el.component;
  return el;
});

export default function Register() {
  const [elements, setElements] = useState(() => {
    stepperElements[0].active = true;
    return stepperElements;
  });
  const [step, setStep] = useState(0);

  useEffect(() => {
    setElements((prev) => {
      //Limpia el estado de active antes de asignarselo al paso que sigue
      for (let i = 0; i < prev.length; i++) {
        prev[i].active = false;
      }
      prev[step].active = true;
      return prev;
    });
  }, [step]);

  return (
    <>
      <Head>
        <title>Registro</title>
        <meta name="description" content="The server Page" />
        <link rel="icon" href="/statics/icon.png" />
      </Head>
      <div className="registerMain">
        <div className="registerContainer">
          <Stepper elements={elements} />
          <div className="StepsContainer">
            <Step1 />
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
