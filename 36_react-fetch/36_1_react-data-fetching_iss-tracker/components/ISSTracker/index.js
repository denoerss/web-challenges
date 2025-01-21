// import { useEffect, useState } from "react";
import useSWR from "swr";

import Controls from "../Controls/index";
import Map from "../Map/index";

const URL = "https://api.wheretheiss.at/v1/satellites/25544";
const fetcher = async (...args) => {
  const response = await fetch(...args);
  if (!response.ok) {
    throw new Error(`Oops! Error ${response.status}`);
  }
  return response.json();
};

export default function ISSTracker() {
  const {
    data: coords,
    isLoading,
    error,
  } = useSWR(URL, fetcher, { refreshInterval: 5000 });

  if (isLoading) return <h2>is loading...</h2>;
  if (error) return <h2>{error.message}</h2>;

  // const [coords, setCoords] = useState({
  //   longitude: 0,
  //   latitude: 0,
  // });

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        // onRefresh={getISSCoords}
      />
    </main>
  );
}
