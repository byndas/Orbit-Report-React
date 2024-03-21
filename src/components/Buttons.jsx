import satData from "./satData";
import {useState} from "react";

const Buttons = ({ filterByType, setSat, displaySats, updateBtnState }) => {

  const [activeIndex, setActiveIndex] = useState(3);

  const btnTypes = ["Low Orbit", "Medium Orbit", "High Orbit", "All Orbits"];

  const orbitPathBtns = displaySats.map((satellite, index) => {
    return (
      <button
        key={index}
        className={activeIndex === index ? "active-btn" : ""}
        onClick={() => {
          filterByType(satellite); // updates state with clicked-btn's orbits
          setActiveIndex(index); // adds or removes .active-btn class to clicked-btn
          updateBtnState(btnTypes[index]);
        }}
      >
        {satellite} Orbit
      </button>
    );
  });

  return (
    <div className="flex-container">
      {orbitPathBtns}
      <button
        className={activeIndex === 3 ? "active-btn" : ""}
        onClick={() => {
          setSat(satData); // updates state to include all satellites
          setActiveIndex(3); // adds or removes .active-btn class to "All Orbits" btn
          updateBtnState(btnTypes[3]);
        }}
      >
        All Orbits
      </button>
    </div>
  );
};  // renders buttons for each orbit type & their on-click logic

export default Buttons;