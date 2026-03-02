'use client'

import { useState } from "react";
import { Address } from "react-daum-postcode";

export function useKakaoPostcode() {
  const [fullAddress, setFullAddress] = useState('')

  const handleComplete = (data: Address) => {
    let full = data.address;
    let extra = '';

    if (data.addressType === 'R') {
      if (data.bname !== '') {
        extra += data.bname;
      }
      if (data.buildingName !== '') {
        extra += extra !== '' ? `, ${data.buildingName}` : data.buildingName;
      }
      full += extra !== '' ? `(${extra})` : '';
    }

    setFullAddress(full);
  }

  return { fullAddress, handleComplete };
}