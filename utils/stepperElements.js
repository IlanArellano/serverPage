let i = 0;

const stepperElements = [
  {
    id: i++,
    name: "Ingresa tus datos",
    active: false,
    component: () => import("../components/sign/register"),
  },
  {
    id: i++,
    name: "Enlaza tu cuenta de Discord",
    active: false,
  },
  {
    id: i++,
    name: "Confirma tu correo electrónico",
    active: false,
  },
];

export default stepperElements;
