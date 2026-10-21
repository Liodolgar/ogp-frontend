import React from 'react';
export default function BarRanking({ items = [] }) {
  const max = items[0]?.value || 1;
  return <div>{items.map((item,i)=><div className="g-rank" key={item.name}><span className="n">{i+1}</span><div>{item.name}<div className="bar"><u style={{width:`${item.value/max*100}%`}} /></div></div><b>{item.value}</b></div>)}</div>;
}
