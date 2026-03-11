'use client'

import { useKakaoLoader as useKakaoLoaderOrigin } from "react-kakao-maps-sdk"

export default function useKakaoLoader() {
  useKakaoLoaderOrigin({   
    appkey: "fe4b909c72d006b3f01065e7586cc4b9",
    libraries: ["clusterer", "drawing", "services"],
  })
}