import {useState} from "react";
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";

import moon from "./orbitPhotos/moon.png";
import satellite from "./orbitPhotos/satellite.png";

import "./styling.css";

function App() {
  //  sat compares with imported satData object for changes
  //  setSat updates satData object with changes
  const [sat, setSat] = useState(satData);
  const [btnState, setBtnState] = useState('All Orbits');

  //  Set() method prevents duplicate button elements --> [ "Low", "Medium", "High" ]
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];

  const filterByType = (clickedOrbitType) => {

    const filteredSatsByClickedOrbitType = satData.filter((satellite) =>
      satellite.orbitType === clickedOrbitType
    );

    setSat(filteredSatsByClickedOrbitType);
  };  //  updates satData state with satellite data of button-clicked orbit-type

  const updateBtnState = (btnType) => {
    setBtnState(btnType);
  };

  return (
    <>
      <div class="header">
        <img src={satellite} alt="satellite image" id="satellite" />
        <img src={moon} alt="moon image" id="moon" />
        <Banner />
        <Buttons
          filterByType={filterByType}
          setSat={setSat}
          displaySats={displaySats}
          updateBtnState={updateBtnState}
        />
      </div>

      <Table sat={sat} btnState={btnState} />
    </>
  );
}

export default App;

/*
NEED:
  four buttons that filter & render rows of satellite data for LOW, MEDIUM, HIGH, or ALL orbits

  columns:  NAME -- SATELLITE TYPE -- LAUNCH DATE -- STATUS (ACTIVE || INACTIVE)

  styling:
    clicked-button background-color: dark red
    active status text color: dark green
    inactive status text color: brick red
    unique text colors for each satellite-type
*/