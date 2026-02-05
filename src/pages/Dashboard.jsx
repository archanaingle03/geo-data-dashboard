import { useEffect, useState } from "react";
import { fetchGeoData } from "../data/geoApi";
import DataTable from "../components/DataTable";
import MapView from "../components/MapView";

function Dashboard() {
  const [geoData, setGeoData] = useState([]);
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetchGeoData().then(setGeoData);
  }, []);

  // Filter
  const filteredData = geoData.filter((item) =>
    item.projectName.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div style={styles.page}>
      <h1 style={styles.title}>Geo Data Dashboard</h1>

      {/* Search */}
      <input
        placeholder="Search Project..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={styles.search}
      />

      {/* Layout */}
      <div style={styles.layout}>
        {/* Table */}
        <div style={styles.card}>
          <DataTable
            data={filteredData}
            selected={selected}
            onSelect={setSelected}
          />
        </div>

        {/* Map */}
        <div style={styles.card}>
          <MapView
            data={filteredData}
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

/* ---------- STYLES ---------- */

const styles = {
  page: {
    padding: "30px",
    background: "#f4f6f9",
    minHeight: "100vh",
    width: "100%",
    boxSizing: "border-box",
  },

  title: {
    marginBottom: "20px",
    fontSize: "32px",
    fontWeight: "600",
  },

  search: {
    padding: "10px 14px",
    width: "320px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    marginBottom: "25px",
  },

  layout: {
    display: "grid",
    gridTemplateColumns: "1.2fr 2fr", // table smaller, map bigger
    gap: "25px",
    width: "100%",
  },

  card: {
    background: "white",
    borderRadius: "12px",
    padding: "20px",
    boxShadow: "0 2px 8px rgba(0,0,0,0.08)",
    height: "650px", // forces equal height
    overflow: "hidden",
  },
};
