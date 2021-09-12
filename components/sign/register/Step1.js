import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Icon from "../../ui/Icon";
import { handleErrors } from "../../../utils/form/handleErrors";
import registerController from "../../../services/sign/register";
import Loader1 from "../../ui/loaders/Loader1";
import useUser from "../../../hooks/useUser";

const usernameLenght = 12;
const passwordmaxLenght = 16;

const emailPattern =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const existMessage = (field) =>
  `El ${field} que has registrado ya existe, por favor selecciona otro`;

export default function Step1({ setStep }) {
  const { setUserC } = useUser();
  const [mainError, setMainError] = useState(null);
  const [disable, setDisable] = useState(false);

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ mode: "onChange" });

  const onSubmit = async (data) => {
    setDisable(true);
    setMainError(null);
    const { email, user, password } = data;
    if (!emailPattern.test(email)) {
      setMainError(
        "El formato en el campo de Correo Electrónico no esta permitido"
      );
      setDisable(false);
      return;
    }
    if (data.password !== data.Rpassword) {
      setMainError(
        "La contraseña no coincide con el campo de Repetir contraseña"
      );
      setDisable(false);
      return;
    }

    //addUser
    const registrarUsuario = await registerController({
      email,
      username: user,
      password,
    });
    if (registrarUsuario.error) {
      setMainError("Ha ocurrido un error Inesperado");
      setDisable(false);
      return;
    } else if (registrarUsuario.userExist && registrarUsuario.emailExist) {
      setMainError(existMessage("usuario y correo"));
      setDisable(false);
      return;
    } else if (registrarUsuario.userExist) {
      setMainError(existMessage("usuario"));
      setDisable(false);
      return;
    } else if (registrarUsuario.emailExist) {
      setMainError(existMessage("correo"));
      setDisable(false);
      return;
    }
    setMainError(null);
    setDisable(false);

    setUserC({ user, email });
    setTimeout(() => setStep(1), 1000);
  };

  return (
    <>
      <div className="registerForm">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="Principalerror">{mainError}</div>
          <div className="form-control">
            <span className="label">Correo Electrónico*</span>
            <input
              type="text"
              {...register("email", {
                required: true,
              })}
            />
            {errors.email && (
              <span className="errors">{handleErrors(errors.email)}</span>
            )}
          </div>
          <div className="form-control">
            <span className="label">Nombre de usuario*</span>
            <input
              type="text"
              {...register("user", {
                required: true,
                maxLength: usernameLenght,
              })}
            />
            {errors.user && (
              <span className="errors">
                {handleErrors(errors.user, {
                  maxLenght: usernameLenght,
                })}
              </span>
            )}
          </div>
          <div className="form-control">
            <span className="label">Contraseña*</span>
            <input
              type="password"
              {...register("password", {
                required: true,
                maxLength: passwordmaxLenght,
              })}
            />
            {errors.password && (
              <span className="errors">
                {handleErrors(errors.password, {
                  maxLenght: passwordmaxLenght,
                })}
              </span>
            )}
          </div>
          <div className="form-control">
            <span className="label">Repetir Contraseña*</span>
            <input
              type="password"
              {...register("Rpassword", {
                required: true,
                maxLength: passwordmaxLenght,
              })}
            />
            {errors.Rpassword && (
              <span className="errors">
                {handleErrors(errors.Rpassword, {
                  maxLenght: passwordmaxLenght,
                })}
              </span>
            )}
          </div>
          <div className="form-buttons">
            <button
              type="submit"
              className={!disable ? "SiguienteHover" : ""}
              disabled={disable}
            >
              {disable ? (
                <Loader1 color="black" />
              ) : (
                <>
                  <span>Siguiente</span>
                  <Icon className="bi bi-arrow-right-circle-fill" size={20} />
                </>
              )}
            </button>
          </div>
          <div className="form-footer"></div>
        </form>
      </div>

      <style jsx>
        {`

        button[disabled] {
          cursor: progress;
        }
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
