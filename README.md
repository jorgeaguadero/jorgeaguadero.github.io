# jorgeaguadero.github.io

Mi portfolio y CV en una sola página, en español e inglés. Al imprimirla
(botón "Guardar como PDF") sale como un CV de 2 páginas A4.

Hecho con React, TypeScript y Vite, sin más dependencias que `react` y
`react-dom`. Se publica en GitHub Pages en cada push a `main`.

## Arrancarlo

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # comprobación de tipos y build en dist/
```

## Contenido

Todo el texto, en los dos idiomas, está en `src/content/cv.ts`. Un texto que
es igual en español e inglés se escribe una sola vez como string; si cambia,
como `{ es, en }`.

## Fechas

- Formato `'2025-09'` (año y mes) o `'2025'` (solo año). `end: null` significa
  "actualidad".
- La duración cuenta el mes de inicio y el de fin (de enero a agosto son
  8 meses) y solo aparece si las dos fechas llevan mes.
- En el cronograma, un inicio con solo año empieza en enero; un fin con mes se
  corta en ese mes, para que dos puestos consecutivos queden pegados sin
  solaparse; un fin con solo año llega a enero del año siguiente. Las entradas
  anteriores a 2021 solo salen en la lista.

## PDF

En el diálogo de impresión hay que marcar "Gráficos de fondo" para que el
cronograma salga con sus colores.
