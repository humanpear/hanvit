"use client";

import useKakaoLoader from "@/hooks/useKakaoLoader";
import { Map as KakaoMap, MapMarker } from "react-kakao-maps-sdk";

function KakaoMaps() {
  useKakaoLoader();

  return (
    <KakaoMap
      id="map"
      center={{ lat: 37.6570514917423, lng: 127.281444460251 }}
      style={{ width: '100%', height: '100%', borderRadius: '12px'}}
      level={3}
    >
      <MapMarker
        position={{
          lat: 37.6570514917423,
          lng: 127.281444460251,
        }}
      />
    </KakaoMap>
  );
}

export default KakaoMaps;
