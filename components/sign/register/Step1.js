import React from "react";
import { useForm } from "react-hook-form";

export default function Step1() {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    //const res = await loginService({ user, password });
    console.log(data);
  };

  return (
    <>
      <div className="registerForm">
        <h1>Iniciar Sesión</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="form-control">
            <span className="label">Correo Electrónico</span>
            <input type="text" {...register("email", { required: true })} />
            {errors.email && (
              <span className="errors">Este campo es requerido</span>
            )}
          </div>
          <div className="form-control">
            <span className="label">Nombre de usuario</span>
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
          <div className="form-control">
            <span className="label">Repetir Contraseña</span>
            <input
              type="password"
              {...register("Rpassword", { required: true })}
            />
            {errors.Rpassword && (
              <span className="errors">Este campo es requerido</span>
            )}
          </div>
          <div className="form-buttons">
            <button type="submit">Iniciar Sesión</button>
            <button>Iniciar Sesión con Discord</button>
          </div>
          <div className="form-footer"></div>
        </form>
      </div>

      <style jsx>
        {`
          .registerForm {
            width: 30%;
          }
        `}
      </style>
    </>
  );
}
