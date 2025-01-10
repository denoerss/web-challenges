import { useState, useEffect } from "react";
import Controls from "./components/Controls";
import Map from "./components/Map";
import "./styles.css";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function App() {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  // in this case: defining fetch-function outside useEffect!
  // to make it reusable for useEffect AND for refresh-button

  // HOW to fatch data?
  async function getISSCoords() {
    const response = await fetch(URL);
    const fetchedCoords = await response.json();

    setCoords({
      longitude: fetchedCoords.longitude,
      latitude: fetchedCoords.latitude,
    });
  }

  // WHEN to fetch data?
  useEffect(() => {
    const updateCoordinates = setInterval(getISSCoords, 5000);

    return () => {
      clearInterval(updateCoordinates);
    };
  }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={getISSCoords}
      />
    </main>
  );
}
