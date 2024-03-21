const Table = ({ sat, btnState }) => {
// REFACTORABLE USING STATE?
// date: "N/A" breaks expected results if sorting dates first
  const launchDates = (a, b) => new Date(b.launchDate) - new Date(a.launchDate);
  const activeRecentSats = sat.filter(obj => obj.operational).sort(launchDates);
  const inactiveRecentSats = sat.filter(obj => !obj.operational).sort(launchDates);

  const satRows = [...activeRecentSats, ...inactiveRecentSats].map((data, index) => {

    const satTypes = {
      "Communication": "communication",
      "Positioning" : "positioning",
      "Probe" : "probe",
      "Space Station" : "space-station",
      "Telescope" : "telescope",
      "Space Debris": "inactive"
    };

    const satActive = data.operational ? "active" : "inactive";

    return (
      <tr key = {btnState + data.id}>
        <td className = {satTypes[data.type]}>
          {data.name}
        </td>
        <td className = {satTypes[data.type]}>
          {data.type}
        </td>
        <td className = {satActive}>
          {data.launchDate}
        </td>
        <td className = {satActive}>
          {satActive}
        </td>
      </tr>
    );
  }); // returns row containing four columns of data for each satellite

  return (
    <table>
      <thead>
        <th>Name</th>
        <th>Type of Satellite</th>
        <th>Launch Date</th>
        <th>Status</th>
      </thead>
      <tbody>
        {satRows}
      </tbody>
    </table>
  );
};

export default Table;

// NEED:
//  on btn-click: table row state update fades in out