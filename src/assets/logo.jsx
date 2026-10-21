import React from 'react';
import logo from './ogp-logo.png';

export default function Logo({ alt = 'Observatorio Gastronómico de Puebla' }) {
  return <img className="logo-img" src={logo} alt={alt} />;
}
