import React from 'react';
export default function StallArt({ color = '#D89A2E' }) {
  return <svg viewBox="0 0 120 90" preserveAspectRatio="xMidYMid slice" width="100%" height="100%" aria-hidden="true"><rect width="120" height="90" fill="#DDE6F0" /><rect y="62" width="120" height="28" fill="#C9BFA9" /><rect x="14" y="30" width="92" height="40" fill="#F4E6C9" /><path d="M8 30h104l-8-18H16Z" fill={color} /><path d="M30 12l-4 18M52 12l-2 18M74 12l2 18M96 12l4 18" stroke="#fff" strokeWidth="3" opacity=".7" /><rect x="50" y="44" width="20" height="26" fill="#8A5A2B" /><circle cx="30" cy="60" r="6" fill="#4F7A4A" /><circle cx="92" cy="60" r="6" fill="#C1531E" /></svg>;
}
