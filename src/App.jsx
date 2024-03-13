import Buttons from "./components/Buttons";
import Table from "./components/Table";


function App() {
  return (
    <div>
      <Buttons />
      <Table />
    </div>
  );
}

export default App;

/*
create components to render a searchable, sortable table of satellites
    via button-click-handling connective function

create table showing satellites with orbit paths: Low, Medium, or High

NEED:
  banner introducing project & providing app instructions

  table that renders satellite info depending on orbit path:
    NAME -- SATELLITE TYPE -- LAUNCH DATE -- STATUS

  four satellite-rendering buttons:
    on button-click, table renders LOW, MEDIUM, HIGH or ALL orbit path satellites

  presentable styling
*/