/* eslint-disable react/jsx-props-no-spreading */
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import Title from "../../components/Title/Title";
import { UserContext } from "../../components/Contexts/userContext";

function Login() {
  const { setAuth } = useContext(UserContext);
  const { register, handleSubmit } = useForm();
  const navigate = useNavigate();
  const onSubmit = (data) => {
    try {
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/login`, {
        method: "post",
        //  credentials: "include",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
        }),
      })
        .then((response) => {
          if (!response.ok) {
            Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Identifiant ou mot de passe incorrects",
            });
          }
          return response.json();
        })
        .then(
          (response) =>
            setAuth({
              mail: response.email,
              id: response.id,
              pseudo: response.pseudo,
              isLogged: true,
            }),
          navigate("/home")
        );

      /*     (fetchedData) => console.log(fetcheData) */
      /*  setAuth({
            mail: fetchedData.email,
            id: fetchedData.id,
            pseudo: fetchedData.pseudo,
            isLogged: true,
          }), */
      //  );
    } catch (error) {
      console.error("error:", error);
    }
  };

  return (
    <>
      <Title />
      <div className="login__container">
        <form className="formLogin__inputs" onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="mail" className="formLogin__label">
            Email address
            <input
              id="mail"
              className="formLogin__inputs__text"
              type="email"
              {...register("mail", { required: true }, { type: "email" })}
              placeholder="azerty@gmail.com"
            />
          </label>
          <label htmlFor="password" className="formLogin__label">
            Password
            <input
              id="password"
              className="formLogin__inputs__text"
              {...register("password", { required: true })}
              type="password"
              placeholder="Password"
            />
          </label>
          <input
            className="formLogin__inputs__submit"
            type="submit"
            value="Connexion"
          />
        </form>
        <Link to="/">
          <button className="login__button-return" type="submit">
            return
          </button>
        </Link>
      </div>
    </>
  );
}

export default Login;
