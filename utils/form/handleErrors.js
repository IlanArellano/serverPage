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
    case "min":
      return `Este campo solo permite un minimo de ${props.min} carácteres`;
    case "max":
      return `Este campo solo permite un máximo de ${props.max} carácteres`;
    /*case "pattern":
      return `Este campo no acepta ese tipo de caracteres`;*/
    default:
      return null;
  }
};
