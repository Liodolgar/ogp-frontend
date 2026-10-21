import React from 'react';
import useRemoteData from './useRemoteData.js';
import { getRecetas } from '../services/api.js';
import { Loading, CatalogCard, PageHeader } from './CatalogPage.jsx';
export default function Recetas() {
  const {loading,data,error}=useRemoteData(getRecetas,[]);
  // Evita acceder a .length/.map mientras los datos aún son null.
  const registros = Array.isArray(data) ? data : [];
  return <><PageHeader title="Recetas históricas" description="Recetarios, técnicas culinarias y platillos que forman parte del patrimonio gastronómico poblano." /><Loading loading={loading} error={error}>{<><div className="g-count">{registros.length} registros de ejemplo <span>Datos locales del mockup</span></div><div className="catalog-grid">{registros.map((r,i)=><CatalogCard key={r.id} to={`/recetas/${r.id}`} title={r.n} place={r.p} description={r.d} colors={r.cl || ['#4A2416','#C89A5B']} seed={i+1} status={r.v?'✓ Verificada':'En revisión'} />)}</div></>}</Loading></>;
}
