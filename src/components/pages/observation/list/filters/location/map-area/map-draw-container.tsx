import styled from "@emotion/styled";
import useObservationFilter from "@hooks/useObservationFilter";
import { MAP_CENTER } from "@static/constants";
import { stringToFeature } from "@utils/location";
import { MapAreaDraw } from "naksha-components-react";
import React, { useMemo } from "react";

const MapDrawBox = styled.div`
  position: relative;
  height: 22rem;
`;

const defaultViewPort = {
  latitude: MAP_CENTER.lat,
  longitude: MAP_CENTER.lng,
  zoom: 2.8,
  bearing: 0,
  pitch: 0
};

const FILTER_NAME = "location";

export default function MapDrawContainer() {
  const { filter, addFilter, removeFilter } = useObservationFilter();
  const defaultFeatures = useMemo(() => stringToFeature(filter?.location), []);

  const handleOnFeatureChange = (features) => {
    if (features.length > 0) {
      addFilter(FILTER_NAME, features[0]?.geometry?.coordinates.toString());
      return;
    }
    removeFilter(FILTER_NAME);
  };

  return (
    <MapDrawBox>
      <MapAreaDraw
        defaultViewPort={defaultViewPort}
        defaultFeatures={defaultFeatures}
        mapboxApiAccessToken={process.env.NEXT_PUBLIC_MAPBOX_TOKEN}
        onFeaturesChange={handleOnFeatureChange}
        isPolygon={true}
      />
    </MapDrawBox>
  );
}
