---
title: Consideraciones de rendimiento
description: Crea layouts responsivos eficientes.
---

Prefiere `BreakifyValue` para cambios discretos del sistema de diseño y usa `BreakifyFluidValue` solo cuando la interpolación aporte valor. `BreakifyResponsiveGrid` calcula las columnas a partir del ancho local, mientras que `BreakifyGrid` usa un número explícito de columnas responsivas.

Para los modos de altura de los grids, `equalInRow` suele ser más económico para listas largas. `equal` mide todas las tarjetas durante el layout y los cambios de ancho, así que debe reservarse para grids que necesiten una altura común en todas sus filas. `natural` evita la igualación intrínseca, pero no admite hijos de altura no acotada como `Spacer` o `Expanded`.
