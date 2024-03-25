import { useState, useEffect } from "react";
import { fetchRankings } from "../api/rankings";

const Rankings = () => {
  const [rankings, setRankings] = useState(["1", "2"]);

  useEffect(() => {
    const fetchRankingsData = async () => {
      const data = await fetchRankings();
      setRankings(data);
    };
    fetchRankingsData();
  }
  , []);


  const renderRankings = () => {
    return rankings?.map((ranking, index) => {
      return <li key={index}>{ranking}</li>;
    });
  };

  return (
    <>
      <h1 className="mb-12">Rankings</h1>
      <h3 className="underline mb-2">Here are the rankings:</h3>
      <ul>{renderRankings()}</ul>
    </>
  );
};

export default Rankings;
