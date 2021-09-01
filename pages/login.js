import React from "react";
import Head from "next/head";
import Link from "next/link";
import Icon from "../components/ui/Icon";
import { useForm } from "react-hook-form";
import loginService from "../services/sign/login";

export default function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const { user, password } = data;
    const res = await loginService({ user, password });
    console.log(res);
  };

  return (
    <>
      <Head>
        <title>Iniciar Sesion</title>
        <meta name="description" content="The server Page" />
        <link rel="icon" href="/statics/icon.png" />
      </Head>
      <div className="login">
        <div className="loginContainer">
          <div className="loginForm">
            <h1>Iniciar Sesión</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-control">
                <span className="label">Usuario o Correo Electrónico</span>
                <input type="text" {...register("user", { required: true })} />
                {errors.user && (
                  <span className="errors">Este campo es requerido</span>
                )}
              </div>
              <div className="form-control">
                <span className="label">Contraseña</span>
                <input
                  type="password"
                  {...register("password", { required: true })}
                />
                {errors.password && (
                  <span className="errors">Este campo es requerido</span>
                )}
              </div>
              <div className="form-buttons">
                <button type="submit">Iniciar Sesión</button>
                <button>Iniciar Sesión con Discord</button>
              </div>
              <div className="form-footer">
                <div className="register">
                  <span>Aun no tienes una cuenta?</span>
                  <Link href="/register">
                    <a className="aRegistrarse">Registrate</a>
                  </Link>
                </div>
                <div>
                  <Link href="/">
                    <a className="aRegresar">
                      <Icon
                        className="bi bi-arrow-left-circle-fill"
                        size={20}
                      />
                      <span>Regresar</span>
                    </a>
                  </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          h1 {
            text-align: center;
          }
          .login {
            width: 100vw;
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
          }

          .loginContainer {
            display: flex;
            justify-content: center;
          }
          .loginForm {
            width: 30%;
          }
          form {
            background: #fbfcfc;
            padding: 2rem;
            border-radius: 15px;
          }

          .register {
            text-align: center;
            display: flex;
            flex-direction: column;
          }

          .aRegistrarse {
            color: blue;
          }

          .aRegresar {
            display: flex;
            align-items: center;
            width: 40px;
          }

          .aRegresar:hover {
            color: red;
          }

          .aRegresar span {
            margin-left: 15px;
          }

          @media screen and (max-height: 550px) {
            .login {
              flex-direction: row;
            }
          }

          @media screen and (max-width: 1200px) {
            .loginForm {
              width: 50%;
            }
          }
          @media screen and (max-width: 768px) {
            .loginForm {
              width: 60%;
            }
          }
          @media screen and (max-width: 600px) {
            .loginForm {
              width: 60%;
            }
          }
          @media screen and (max-width: 420px) {
            .loginForm {
              width: 70%;
            }
          }
          @media screen and (max-width: 320px) {
            .loginForm {
              width: 80%;
            }
          }
        `}
      </style>
    </>
  );
}
