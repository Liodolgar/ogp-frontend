import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useRemoteData from './useRemoteData.js';
import { getRecetaById } from '../services/api.js';
import { Loading } from './CatalogPage.jsx';
import Plate from '../components/illustrations/Plate.jsx';
export default function RecetaDetalle() {
  const {id}=useParams(); const {loading,data,error}=useRemoteData(()=>getRecetaById(id),[id]);
  return <Loading loading={loading} error={error}>{data ? <><Link className="detail-back" to="/recetas">← Volver a recetas</Link><div className="g-h"><h1>{data.n}</h1><p>{data.p} · {data.e}</p></div><div className="detail-layout"><section className="g-card"><div style={{height:180,borderRadius:10,overflow:'hidden',marginBottom:14}}><Plate color1={data.cl?.[0]} color2={data.cl?.[1]} seed={1} /></div><h3>Descripción</h3><p className="g-p">{data.d}</p><h3>Ingredientes documentados</h3>{(data.ing||[]).map(([name,desc])=><div className="g-row" key={name}><div><b>{name}</b><small>{desc}</small></div></div>)}<h3 style={{marginTop:14}}>Fuentes</h3>{(data.fu||[]).map((source)=> <p className="g-p" key={source}>{source}</p>)}</section><aside className="g-detail"><span className={`g-tag ${data.v?'ok':'warn'}`}>{data.v?'Verificada':'En revisión'}</span><div className="g-kv"><div><small>Origen principal</small><b>{data.p}</b></div><div><small>Época</small><b>{data.e}</b></div><div><small>Relaciones</small><b>{data.rel ?? '—'}</b></div></div><p className="g-p">La ficha utiliza los datos de ejemplo del mockup; la API real se conectará más adelante.</p></aside></div></> : <div className="empty-state">No se encontró una receta con ID “{id}”. <Link to="/recetas">Volver al catálogo</Link></div>}</Loading>;
}
