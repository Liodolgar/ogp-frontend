# Observatorio Gastronómico de Puebla — Frontend React

Primera iteración de frontend con Vite + React + React Router. El estilo, el logo, el sprite SVG y los datos de ejemplo se extraen del archivo `OGP_Mockup_navegacion.html`.

## Requisitos
- Node.js 20.19+ o 22.12+ recomendado.
- npm.

## Ejecutar
```bash
npm install
npm run dev
```
Abre la URL local que indique Vite (normalmente `http://localhost:5173`).

## Construir para producción
```bash
npm run build
npm run preview
```

## Decisiones
- Las páginas no importan JSON directamente: consumen `src/services/api.js` con funciones async.
- Los datos de `/src/data` son mocks derivados del mockup; no se conecta ninguna API ni base de datos.
- El diseño del layout usa navegación superior con menús desplegables, tal como aparece en la última revisión (v5.3) del mockup.
- La página Inicio tiene la implementación visual principal de esta primera iteración. Las demás pantallas son bases navegables y catálogos sencillos; aún no equivalen a todas las interacciones del HTML original.

## Rutas
`/`, `/mapa`, `/red-conocimiento`, `/recetas`, `/recetas/:id`, `/mercados`, `/mercados/:id`, `/cocineras`, `/cocineras/:id`, `/proteccion-legal`, `/proteccion-legal/:id`, `/reportes`, `/acerca`, `/memoria`, `/podcast`, `/experiencias`, `/admin`.
