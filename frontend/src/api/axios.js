/* eslint-disable import/no-extraneous-dependencies */
import axios from "axios";

export default axios.create({
  // baseUrl: `${import.meta.env.VITE_BACKEND_URL}`,
  baseUrl: "http://localhost:3310",
});
