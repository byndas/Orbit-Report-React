// import "./styling.css"

const Table = ({ sat }) => {
  //  return data to each row
  const row = sat.map((data, index) => {
    return (
    <tr key={index}>
          {/* row with four columns of data for each satellite */}
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{data.operational ? "active" : "inactive"}</td>
        </tr>
    );
  });

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Type of Satellite</th>
          <th>Launch Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {row}
      </tbody>
    </table>
  );
};

export default Table;