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
  const [elements, setElements] = useState(() => stepperElements);
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
      <div className="registerContainer">
        <Stepper elements={elements} />
        <div className="registerInformation">dfds</div>
        <Step1 />
        <button onClick={() => console.log(elements)}>Show</button>
      </div>

      <style jsx>
        {`
          .registerContainer {
            width: 100%;
            height: 100%;
            margin: auto 0;
          }
        `}
      </style>
    </>
  );
}
