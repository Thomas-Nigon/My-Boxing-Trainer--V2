import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../../Contexts/userContext";
import axios from "../../api/axios";

function UserPage() {
  const { setAuth } = useContext(UserContext);
  const navigate = useNavigate();
  const handleLogOut = async (e) => {
    e.preventDefault();
    try {
      await axios.get(`${import.meta.env.VITE_BACKEND_URL}/api/logout`, {
        headers: { "Content-Type": "application/json" },
        withCredentials: true,
      });
      await setAuth({
        email: null,
        id: null,
        pseudo: null,
        isLogged: false,
        token: null,
      });
      await navigate("/");
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <main className="userPage">
      <h1>hello userpage</h1>
      <button className="navButtons" onClick={handleLogOut} type="button">
        Logout
      </button>
    </main>
  );
}

export default UserPage;
