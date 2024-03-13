import useState from "react";
import satData from "./components/satData";
import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner";


function App() {
  //  sat compares state changes
  //  setSat updates state
  const [sat, setSat] = useState(satData);
  //  Set() method prevents duplicate button elements
  const displaySats = [...new Set(satData.map((data) => data.orbitType))];
  //  ---------------------------------------
  //  const filterByType = (currentType) => {
  //   //  updates displaySats via .filter()
  //   function newSatDisplay() {
  //     return newSatDisplay.orbitType === currentType;
  //   }
  //   displaySats.filter(newSatDisplay);
// ----------------------------------------
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
create components that render a searchable, sortable table of satellites
    via button-click-handling connective functions

table shows satellites with Low, Medium, High, or All orbit paths

NEED:
  banner introducing project & providing app instructions

  table columns:
    NAME -- SATELLITE TYPE -- LAUNCH DATE (YEAR-MONTH-DATE || N/A) -- STATUS (ACTIVE || INACTIVE)

  four satellite-rendering buttons:
    on button-click, table renders LOW, MEDIUM, HIGH or ALL orbit path satellites

  satellite class component for satelittes of each orbit path to inherit

  presentable styling
*/