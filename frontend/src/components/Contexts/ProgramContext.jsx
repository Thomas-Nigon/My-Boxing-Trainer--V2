import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export const ProgramsContext = createContext();

export function ProgramsProvider({ children }) {
  const [programs, setPrograms] = useState("");

  const stateButton = useMemo(
    () => ({
      programs,
      setPrograms,
    }),
    [programs, setPrograms]
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/programs`)
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <ProgramsContext.Provider value={stateButton}>
      {children}
    </ProgramsContext.Provider>
  );
}
ProgramsProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
