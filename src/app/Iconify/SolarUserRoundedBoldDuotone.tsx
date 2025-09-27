import React from 'react';
import type { SVGProps } from 'react';

export function SolarUserRoundedBoldDuotone(props: SVGProps<SVGSVGElement>) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={24} viewBox="0 0 24 24" {...props}>
      <circle cx={12} cy={6} r={4} fill="currentColor"></circle>
      <ellipse cx={12} cy={17} fill="currentColor" opacity={0.5} rx={7} ry={4}></ellipse>
    </svg>
  );
}
