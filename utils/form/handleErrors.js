const defaultProps = {
  maxLenght: 0,
  pattern: /^[A-Za-z]+$/i,
  min: 0,
  max: 0,
};

export const handleErrors = (errorField = null, props = defaultProps) => {
  switch (errorField?.type) {
    case "required":
      return `Este campo es requerido`;
    case "maxLength":
      return `Este campo solo permite un máximo de ${props.maxLenght} carácteres`;
    default:
      return "Ha ocurrido un error inesperado";
  }
};
