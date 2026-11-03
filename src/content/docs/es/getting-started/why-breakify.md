---
title: ¿Por qué Breakify?
description: Razones para usar un toolkit responsivo en Flutter.
---

El código responsivo suele dispersar comprobaciones de ancho y callbacks de `LayoutBuilder`. Breakify centraliza esas decisiones en `BreakifyScope`, valores responsivos y widgets que resuelven sus restricciones locales.

## Qué incluye

- Breakpoints con nombre y anchos mínimos configurables.
- `BreakifyValue` para valores escalonados y `BreakifyFluidValue` para interpolación.
- Widgets de layout para filas, columnas, grids, paneles y listas adaptativas.
- Resolución global y local para que los layouts anidados respondan a su propio ancho.

Breakify es composable: utiliza solo los widgets y valores que resuelvan el problema actual.
