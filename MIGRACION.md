# Nota de migración del mockup

- CSS original extraído íntegramente del `<style>` de `OGP_Mockup_navegacion.html` y conservado en `src/styles/theme.css`; al final se añadieron algunos ajustes menores para React.
- Se extrajeron 52 símbolos del sprite SVG original a `src/assets/icons.jsx`.
- Se convirtió el PNG del logo embebido a `src/assets/ogp-logo.png` y se creó el wrapper `src/assets/logo.jsx`.
- Datos copiados del mockup y normalizados con IDs para rutas: recetas=6, mercados=5, cocineras/cocineros=6, declaratorias=5, nodos de red=15, conexiones=16.
- `src/pages/Inicio.jsx` implementa la estructura visual principal de `renderInicio()` y consume los datos a través de `src/services/api.js`.
- Los valores del mockup son datos ilustrativos de interfaz, no datos verificados o conectados a un servicio externo.
