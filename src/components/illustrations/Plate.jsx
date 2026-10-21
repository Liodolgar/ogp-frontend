import React from 'react';
export default function Plate({ color1 = '#4A2416', color2 = '#C89A5B', seed = 1 }) {
  const dots = Array.from({ length: 10 }, (_, i) => {
    const angle = (i * 137.5 + seed * 40) * Math.PI / 180;
    const radius = 8 + ((i * 7 + seed * 3) % 20);
    return { cx: (60 + Math.cos(angle) * radius).toFixed(1), cy: (46 + Math.sin(angle) * radius * 0.7).toFixed(1), r: 2 + (i % 3) };
  });
  return <svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" aria-hidden="true"><rect width="120" height="90" fill="#E4D8C4" /><ellipse cx="60" cy="50" rx="48" ry="34" fill="#F7F3EA" /><ellipse cx="60" cy="47" rx="39" ry="27" fill={color1} />{dots.map((dot, i) => <circle key={i} {...dot} fill={color2} />)}</svg>;
}
