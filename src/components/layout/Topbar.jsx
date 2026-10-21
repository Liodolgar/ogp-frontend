import React, { useState } from 'react';
import Icon from '../../assets/icons.jsx';

export default function Topbar() {
  const [query, setQuery] = useState('');
  return (
    <header className="topbar">
      <button type="button" className="menu-toggle" aria-label="Abrir o cerrar navegación" onClick={() => window.dispatchEvent(new Event('ogp:toggle-menu'))}>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
      </button>
      <div className="utils">
        <label className="search" aria-label="Buscar en el observatorio">
          <Icon name="search" size={16} />
          <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Buscar en el observatorio…" />
        </label>
        <button type="button" className="iconbtn" aria-label="Notificaciones" title="Notificaciones"><Icon name="bell" size={18} /><span className="dot" /></button>
        <button type="button" className="iconbtn" aria-label="Ayuda" title="Ayuda"><Icon name="help" size={18} /></button>
        <div className="avatar" aria-label="Cuenta del Observatorio">OG</div>
      </div>
    </header>
  );
}
