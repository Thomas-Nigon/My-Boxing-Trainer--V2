import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export const ProgramsContext = createContext();

export function ProgramsProvider({ children }) {
  const [programs, setPrograms] = useState("");

  const trainings = [
    {
      id: 1,
      name: "block",
      src: "/assets/images/block.png",
      totalRound: 3,
      restTime: 60,
      roundLength: 180,
    },
    {
      id: 2,
      name: "Boxing",
      src: "/assets/images/homepic.png",
      totalRound: 3,
      restTime: 60,
      roundLength: 180,
    },
    {
      id: 3,
      name: "Kicks",
      src: "/assets/images/kick.png",
      totalRound: 3,
      restTime: 60,
      roundLength: 180,
    },
    {
      id: 4,
      name: "random",
      src: "/assets/images/random.png",
      totalRound: 3,
      restTime: 60,
      roundLength: 180,
    },
  ];
  const combo = [
    [
      { id: 1, name: "Jab", src: "mypicture" },
      { id: 2, name: "Jab", src: "mypicture" },
      { id: 3, name: "Cross", src: "mypicture" },
    ],
    [
      { id: 4, name: "jab", src: "mypicture" },
      { id: 5, name: "Rear hook", src: "mypicture" },
      { id: 6, name: "Lead hook", src: "mypicture" },
    ],
    [
      { id: 7, name: "jab", src: "mypicture" },
      { id: 8, name: "kick", src: "mypicture" },
      { id: 9, name: "Lead Hook", src: "mypicture" },
    ],
    /*     { id: 2, seq: "Jab, cross" },
    { id: 3, seq: "Jab, Cross, hook" },
    { id: 4, seq: "cross" },
    { id: 5, seq: "cross, hook" },
    { id: 6, seq: "cross, hook, cross" },
    { id: 7, seq: "Jab" },
    { id: 8, seq: "Jab, hook" },
    { id: 19, seq: "Jab; hook, hook" }, */
  ];

  const stateButton = useMemo(
    () => ({
      programs,
      setPrograms,
      trainings,
      combo,
    }),
    [programs, setPrograms, trainings, combo]
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
