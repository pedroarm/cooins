'use client';

import React, { useEffect } from 'react';

declare global {
  interface Window {
    adsbygoogle: unknown[];
  }
}

interface GoogleAdsProps {
  slot: string;
  format?: string;
  fullWidthResponsive?: boolean;
}

export function Ads({ slot, format = 'auto', fullWidthResponsive = true }: GoogleAdsProps) {
  useEffect(() => {
    try {
      window.adsbygoogle = window.adsbygoogle || [];
      window.adsbygoogle.push({});
    } catch (e) {
      console.error('Error loading ads:', e);
    }
  }, []);

  return (
    <ins
      className="adsbygoogle"
      style={{ display: 'block' }}
      data-ad-client={`${process.env.NEXT_PUBLIC_GOOGLE_ADS_ID}`}
      data-ad-slot={slot}
      data-ad-format={format}
      data-full-width-responsive={fullWidthResponsive.toString()}
    ></ins>
  );
};


{/* <ins class="adsbygoogle"
     style="display:block"
     data-ad-client="ca-pub-4384979364408071"
     data-ad-slot="8769553797"
     data-ad-format="auto"
     data-full-width-responsive="true"></ins> */}