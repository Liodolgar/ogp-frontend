import React from 'react';
import { Link } from 'react-router-dom';
import useRemoteData from './useRemoteData.js';
import { getCocineras } from '../services/api.js';
import { Loading, PageHeader } from './CatalogPage.jsx';
export default function Cocineras() {
  const {loading,data,error}=useRemoteData(getCocineras,[]);
  // Mientras se carga, data es null; el catálogo usa una lista vacía provisional.
  const registros = Array.isArray(data) ? data : [];
  return <><PageHeader title="Cocineras y Cocineros" description="Directorio de portadoras y portadores de la tradición gastronómica poblana." /><Loading loading={loading} error={error}><div className="catalog-grid">{registros.map(person=><Link to={`/cocineras/${person.id}`} className="catalog-card" key={person.id} style={{padding:12,textDecoration:'none'}}><div style={{display:'flex',gap:12,alignItems:'center'}}><span className="g-av" style={{width:52,height:52,background:person.c,fontSize:18}}>{person.n.split(' ').slice(0,2).map(x=>x[0]).join('')}</span><div><b style={{display:'block',color:'var(--navy)',fontSize:12.5}}>{person.n}</b><small style={{color:'var(--muted)',fontSize:10.5}}>{person.m}</small></div></div><div className="g-chips" style={{marginTop:10}}>{person.esp.map(tag=><span className="g-chip" key={tag}>{tag}</span>)}</div><div className="g-stats"><span>Recetas: {person.rec}</span><span>Mercados: {person.mer}</span></div></Link>)}</div></Loading></>;
}
