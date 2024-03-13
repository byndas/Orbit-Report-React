import Buttons from "./components/Buttons";
import Table from "./components/Table";
import Banner from "./components/Banner"


function App() {
  return (
    <div>
      <Banner />
      <Buttons />
      <Table />
    </div>
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