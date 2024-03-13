import satData from "./satData";

const Buttons = ({ filterByType, setSat, displaySats }) => {
  // makes first three buttons, one for each orbit type
  displaySats.map((sat, id) => {
    return (
      <button onClick={() => filterByType(sat)} key={id}>
        {sat} Orbit
      </button>
    );
  });
  return <button onClick={() => setSat(satData)}>All Orbits</button>
};

export default Buttons;