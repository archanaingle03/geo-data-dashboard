function DataTable({ data, selected, onSelect }) {
  return (
    <div style={{ maxHeight: "520px", overflowY: "auto" }}>
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          fontSize: "14px",
        }}
      >
        <thead>
          <tr style={{ background: "#f1f5f9" }}>
            <th style={headerStyle}>Project</th>
            <th style={headerStyle}>Latitude</th>
            <th style={headerStyle}>Longitude</th>
            <th style={headerStyle}>Status</th>
            <th style={headerStyle}>Updated</th>
          </tr>
        </thead>

        <tbody>
          {data.map((item) => (
            <tr
              key={item.id}
              onClick={() => onSelect(item)}
              style={{
                cursor: "pointer",
                background:
                  selected?.id === item.id ? "#dbeafe" : "transparent",
              }}
            >
              <td style={cellStyle}>{item.projectName}</td>
              <td style={cellStyle}>{item.latitude.toFixed(4)}</td>
              <td style={cellStyle}>{item.longitude.toFixed(4)}</td>
              <td style={cellStyle}>{item.status}</td>
              <td style={cellStyle}>{item.updated}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const headerStyle = {
  padding: "10px",
  textAlign: "left",
  borderBottom: "2px solid #e5e7eb",
};

const cellStyle = {
  padding: "8px",
  borderBottom: "1px solid #eee",
};

export default DataTable;
