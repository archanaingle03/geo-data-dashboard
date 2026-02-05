export async function fetchGeoData() {
  const data = [];

  for (let i = 1; i <= 5000; i++) {
    data.push({
      id: i,
      projectName: `Project ${i}`,
      latitude: 18.5 + Math.random(),
      longitude: 73.8 + Math.random(),
      status: ["Active", "Inactive", "Pending"][Math.floor(Math.random() * 3)],
      updated: "2026-02-05",
    });
  }

  return new Promise((resolve) => setTimeout(() => resolve(data), 500));
}
