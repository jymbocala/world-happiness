// Get all countries
const fetchRankings = async () => {
  try {
    const response = await fetch(
      "https://d2h6rsg43otiqk.cloudfront.net/prod/countries",
      {
        headers: {
          "X-API-KEY": "EzensCqxyl63t09mVG6jr2AXriDQeimS95s4CdpV",
          "Content-Type": "application/json",
        },
      }
    );
    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.message);
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};

export { fetchRankings };