import React from 'react';
import Icon from '../assets/icons.jsx';
export default function VistasPendientes({ title, description }) { return <><div className="g-h"><h1>{title}</h1><p>{description}</p></div><div className="g-card placeholder-panel"><span className="g-dot" style={{width:48,height:48,background:'#10284C'}}><Icon name="info" size={23}/></span><h3>Sección preparada para la siguiente iteración</h3><p>La ruta y el layout ya están conectados con React Router. Aquí se incorporará el diseño completo después de migrar las pantallas prioritarias del mockup.</p></div></>; }
