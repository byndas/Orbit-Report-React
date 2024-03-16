import satData from "./satData";
import {useState} from "react";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  // makes buttons for each orbit type
  const [activeIndex, setActiveIndex] = useState(null);

  const orbitPathBtns = displaySats.map((sat, index) => {
    return (
      <button className={activeIndex === index ? "active-btn" : ""} onClick={() => {
        filterByType(sat);
        setActiveIndex(index);
      }}
        key={index}>
        {sat} Orbit
      </button>
    );
  })

  return (
    <div className="flex-container">
      {orbitPathBtns}
      <button className={activeIndex === 3 ? "active-btn" : ""} onClick={() => {
        setSat(satData)
        setActiveIndex(3)}}>All Orbits</button>
    </div>
  );
};

export default Buttons;