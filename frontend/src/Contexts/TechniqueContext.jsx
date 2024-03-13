import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export const TechniqueContext = createContext();

export function TechniqueProvider({ children }) {
  const [techniques, setTechniques] = useState("");
  const [programs, setPrograms] = useState("");

  const stateButton = useMemo(
    () => ({
      techniques,
      setTechniques,
      programs,
      setPrograms,
    }),
    [techniques, setTechniques, programs, setPrograms]
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/techniques`)
      .then((response) => response.json())
      .then((data) => setTechniques(data))
      .catch((error) => console.error(error));

    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/programs`)
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <TechniqueContext.Provider value={stateButton}>
      {children}
    </TechniqueContext.Provider>
  );
}
TechniqueProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
