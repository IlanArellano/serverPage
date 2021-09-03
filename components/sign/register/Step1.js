import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Icon from "../../ui/Icon";
import { handleErrors } from "../../../utils/form/handleErrors";

const usernameLenght = 8;
const passwordLenght = 16;

export default function Step1() {
  const [mainError, setMainError] = useState(null);
  const {
    handleSubmit,
    register,
    formState: { errors, isValid, isDirty },
    reset,
  } = useForm({ mode: "onChange" });
  const onSubmit = (data) => {
    if (data.password !== data.Rpassword) {
      setMainError(
        "La contraseña no coincide con el campo de Repetir contraseña"
      );
      return;
    }
    setMainError(null);
    console.log(data);

    alert("Has completado el primer paso!");
    reset();
  };

  return (
    <>
      <div className="registerForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Principalerror">{mainError}</div>
          <div className="form-control">
            <span className="label">Correo Electrónico</span>
            <input type="text" {...register("email", { required: true })} />
            {errors.email && (
              <span className="errors">{handleErrors(errors.email)}</span>
            )}
          </div>
          <div className="form-control">
            <span className="label">Nombre de usuario</span>
            <input
              type="text"
              {...register("user", {
                required: true,
                maxLength: usernameLenght,
              })}
            />
            {errors.user && (
              <span className="errors">
                {handleErrors(errors.user, { maxLenght: usernameLenght })}
              </span>
            )}
          </div>
          <div className="form-control">
            <span className="label">Contraseña</span>
            <input
              type="password"
              {...register("password", {
                required: true,
                maxLength: passwordLenght,
              })}
            />
            {errors.password && (
              <span className="errors">
                {handleErrors(errors.password, { maxLenght: passwordLenght })}
              </span>
            )}
          </div>
          <div className="form-control">
            <span className="label">Repetir Contraseña</span>
            <input
              type="password"
              {...register("Rpassword", {
                required: true,
                maxLength: passwordLenght,
              })}
            />
            {errors.Rpassword && (
              <span className="errors">
                {handleErrors(errors.Rpassword, { maxLenght: passwordLenght })}
              </span>
            )}
          </div>
          <div className="form-buttons">
            <button
              type="submit"
              className={`${isValid || isDirty ? "SiguienteHover" : ""}`}
            >
              <span>Siguiente</span>
              <Icon className="bi bi-arrow-right-circle-fill" size={20} />
            </button>
          </div>
          <div className="form-footer"></div>
        </form>
      </div>

      <style jsx>
        {`
          .registerForm {
            width: 40%;
          }

          .SiguienteHover {
            transition: all ease .3s;
          }
          .SiguienteHover:hover {
            color: white;
            background: black;
          }

          @media screen and (max-width: 1200px) {
            .registerForm {
              width: 50%;
            }
          }
          @media screen and (max-width: 768px) {
            .registerForm {
              width: 65%;
            }
          @media screen and (max-width: 420px) {
            .registerForm {
              width: 75%;
            }
          }
        `}
      </style>
    </>
  );
}
