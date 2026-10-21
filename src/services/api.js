// Capa de acceso a datos. Las páginas dependen de estas funciones, no de los JSON.
// Cuando exista la API del equipo, sustituir el cuerpo de cada función por fetch/HTTP.
import recetasData from '../data/recetas.json';
import mercadosData from '../data/mercados.json';
import cocinerasData from '../data/cocineras.json';
import declaratoriasData from '../data/declaratorias.json';
import grafoData from '../data/grafo.json';
import analiticaData from '../data/analitica.json';

const copy = (value) => JSON.parse(JSON.stringify(value));
const byId = (items, id) => items.find((item) => String(item.id) === String(id) || item.slug === String(id));

export async function getInicioData() { return copy(analiticaData); }
export async function getRecetas() { return copy(recetasData); }
export async function getRecetaById(id) { return copy(byId(recetasData, id) ?? null); }
export async function getMercados() { return copy(mercadosData); }
export async function getMercadoById(id) { return copy(byId(mercadosData, id) ?? null); }
export async function getCocineras() { return copy(cocinerasData); }
export async function getCocineraById(id) { return copy(byId(cocinerasData, id) ?? null); }
export async function getDeclaratorias() { return copy(declaratoriasData); }
export async function getDeclaratoriaById(id) { return copy(byId(declaratoriasData, id) ?? null); }
export async function getGraphData() { return copy(grafoData); }
export async function getReportData() { return copy(analiticaData); }
