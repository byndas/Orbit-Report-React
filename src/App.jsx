import {useState} from "react";
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";
import "./styling.css";

function App() {
  //  sat compares state changes
  //  setSat updates state
  const [sat, setSat] = useState(satData);
  //  Set() method prevents duplicate button elements
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

const filterByType = (currentType) => {

  const displaySats = satData.filter((newSatDisplay) => {
     return newSatDisplay.orbitType === currentType;
  });

  setSat(displaySats);
};

  return (
    <>
      <Banner />
      <Buttons
        filterByType={filterByType}
        setSat={setSat}
        displaySats={displaySats}
      />
      <Table sat={sat} />
    </>
  );
}

export default App;

/*
NEED:
  buttons that render filterable table of satellites

  table columns:
    NAME -- SATELLITE TYPE -- LAUNCH DATE -- STATUS (ACTIVE || INACTIVE)

  four satellite-rendering buttons:
    on button-click, filters & renders in table: LOW, MEDIUM, HIGH, or ALL orbit satellites

  presentable styling
*/