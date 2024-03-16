import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  // makes buttons for each orbit type
  const orbitPathBtns = displaySats.map((sat, index) => {
    return (
      <button onClick={() => filterByType(sat)} key={index}>
        {sat} Orbit
      </button>
    );
  })
  return (
    <div className="flex-container">
      {orbitPathBtns}
      <button onClick={() => setSat(satData)}>All Orbits</button>
    </div>
  );
};

export default Buttons;