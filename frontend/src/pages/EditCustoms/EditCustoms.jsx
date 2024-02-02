/* eslint-disable react/jsx-props-no-spreading */
import "./editCustoms.scss";
// import Swal from "sweetalert2";
import { useForm } from "react-hook-form";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useContext } from "react";
import Title from "../../components/Title/Title";
import { UserContext } from "../../components/Contexts/userContext";
import { ProgramsContext } from "../../components/Contexts/ProgramContext";

function EditCustoms() {
  const navigate = useNavigate();
  const { auth } = useContext(UserContext);
  const { update, setUpdate } = useContext(ProgramsContext);
  const { id } = useParams();
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
    try {
      console.warn("data submited:", data);
      // eslint-disable-next-line no-unused-expressions
      fetch(`${import.meta.env.VITE_BACKEND_URL}/api/edit/${id}`, {
        method: "put",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          data,
          auth,
        }),
      }).then(setUpdate(!update), navigate("/rounds"));
      //   (response) => console.log(response)
      /*   response.status === 201
          ? Swal.fire({
              title: "Changes Saved",
              text: "",
              icon: "success",
            })
          : Swal.fire({
              icon: "error",
              title: "Oops...",
              text: "Something went wrong!",
            }) */
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <main className="edit__container">
      <Title />
      <form className="editForm" onSubmit={handleSubmit(onSubmit)}>
        <label className="formInscription__label">
          Change name:
          <input
            className="editForm__inputs__text"
            type="text"
            {...register("name")}
            placeholder=""
          />
        </label>
        <label className="formInscription__label">
          total rounds:
          <input
            className="editForm__inputs__text"
            type="text"
            {...register("totalRound")}
            placeholder=""
          />
        </label>
        <label className="formInscription__label">
          Work time:
          <input
            className="editForm__inputs__text"
            type="text"
            {...register("roundLength")}
            placeholder="in seconds"
          />
        </label>
        <label className="formInscription__label">
          Rest time:
          <input
            className="editForm__inputs__text"
            type="text"
            {...register("restTime")}
            placeholder="in seconds"
          />
        </label>
        <div className="buttonContainer">
          <button className="editForm__inputs__submit" type="submit">
            Save
          </button>
          <Link to="/">
            <button className="editForm__inputs__submit" type="submit">
              Return
            </button>
          </Link>
        </div>
      </form>
    </main>
  );
}

export default EditCustoms;
