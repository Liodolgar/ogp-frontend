import React from 'react';
import useRemoteData from './useRemoteData.js';
import { getMercados } from '../services/api.js';
import { Loading, CatalogCard, PageHeader } from './CatalogPage.jsx';
export default function Mercados() {
  const {loading,data,error}=useRemoteData(getMercados,[]);
  // data comienza como null mientras se cargan los registros.
  const registros = Array.isArray(data) ? data : [];
  return <><PageHeader title="Mercados y tianguis" description="Espacios de abasto, intercambio y transmisión de saberes que sostienen las cocinas tradicionales." /><Loading loading={loading} error={error}>{<div className="catalog-grid">{registros.map((m,i)=><CatalogCard key={m.id} to={`/mercados/${m.id}`} title={m.n} place={m.m} description={m.d} type="market" colors={['#D89A2E','#C89A5B']} seed={i+1} status={m.tp} />)}</div>}</Loading></>;
}
