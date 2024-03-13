import { createContext, useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

export const ProgramsContext = createContext();

export function ProgramsProvider({ children }) {
  const [programs, setPrograms] = useState("");
  const [update, setUpdate] = useState(false);

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
      src: "/assets/images/lowKick.png",
      totalRound: 3,
      restTime: 60,
      roundLength: 180,
    },
  ];
  const combo = [
    [
      { id: 1, name: "Jab", src: "/assets/gifs/jab.gif" },
      { id: 2, name: "Jab", src: "/assets/gifs/jab.gif" },
      { id: 3, name: "Cross", src: "/assets/gifs/cross.gif" },
    ],
    [
      { id: 4, name: "jab", src: "/assets/gifs/jab.gif" },
      { id: 5, name: "Rear hook", src: "/assets/gifs/rearHook.gif" },
      { id: 6, name: "Lead hook", src: "/assets/gifs/leadHook.gif" },
    ],
    [
      { id: 7, name: "jab", src: "/assets/gifs/jab.gif" },
      { id: 8, name: "kick", src: "/assets/gifs/kick.gif" },
      { id: 9, name: "Lead Hook", src: "/assets/gifs/leadHook.gif" },
    ],
  ];

  const stateButton = useMemo(
    () => ({
      programs,
      setPrograms,
      trainings,
      combo,
      update,
      setUpdate,
    }),
    [programs, setPrograms, trainings, combo, update, setUpdate]
  );

  useEffect(() => {
    fetch(`${import.meta.env.VITE_BACKEND_URL}/api/programs`)
      .then((response) => response.json())
      .then((data) => setPrograms(data))
      .catch((error) => console.error(error));
  }, [update]);

  return (
    <ProgramsContext.Provider value={stateButton}>
      {children}
    </ProgramsContext.Provider>
  );
}
ProgramsProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};
