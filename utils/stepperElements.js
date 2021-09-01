const stepperElements = [
  {
    name: "Ingresa tus datos",
    active: false,
    component: () => import("../components/sign/register"),
  },
  {
    name: "Enlaza tu cuenta de Discord",
    active: false,
  },
  {
    name: "Confirma tu correo electrónico",
    active: false,
  },
];

export default stepperElements;
