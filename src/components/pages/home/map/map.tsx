import { ENDPOINT, MAP_CENTER } from "@static/constants";
import dynamic from "next/dynamic";
import React from "react";

const Naksha = dynamic(() => import("naksha-components-react"), {
  ssr: false,
  loading: () => <p>Loading...</p>
});

const onObservationGridHover = ({ feature }) => (
  <div>{feature?.properties?.count} Observations</div>
);

export default function Map() {
  return (
    <Naksha
      viewPort={{
        latitude: MAP_CENTER.lat,
        longitude: MAP_CENTER.lng,
        zoom: 3.4,
        bearing: 0,
        pitch: 0
      }}
      loadToC={false}
      mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
      nakshaApiEndpoint={ENDPOINT.NAKSHA}
      geoserver={{ endpoint: ENDPOINT.GEOSERVER, store: "ibp", workspace: "biodiv" }}
      layers={[
        {
          id: "global-observations",
          title: "Observations",
          isAdded: true,
          source: {
            type: "grid",
            endpoint: `${ENDPOINT.NAKSHA}/observation/aggregation?index=extended_observation&type=extended_records&geoField=location&top={top}&left={left}&bottom={bottom}&right={right}&precision={precision}`
          },
          onHover: onObservationGridHover
        }
      ]}
    />
  );
}
