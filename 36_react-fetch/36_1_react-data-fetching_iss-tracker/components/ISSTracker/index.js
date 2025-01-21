import useSWR from "swr";

import Controls from "../Controls/index";
import Map from "../Map/index";

export default function ISSTracker({ url_ }) {
  const { data: coords, isLoading, error, mutate } = useSWR(url_);

  if (error) return <h2>{error.message}</h2>;
  if (isLoading) return <h2>is loading...</h2>;

  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        onRefresh={() => mutate()}
      />
    </main>
  );
}
