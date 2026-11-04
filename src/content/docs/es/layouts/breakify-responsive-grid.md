---
title: BreakifyResponsiveGrid
description: Calcula columnas responsivas a partir del ancho local.
---

`BreakifyResponsiveGrid` calcula cuántas columnas caben manteniendo un ancho mínimo por elemento.

```dart
BreakifyResponsiveGrid(
  minItemWidth: 240,
  maxColumns: 4,
  spacing: 16,
  children: products,
)
```

Responde al ancho local y no necesita definir un valor para cada breakpoint.

## Modos de altura

`heightMode` usa el enum compartido `BreakifyHeightMode`: `equal` iguala con el elemento más alto del grid, `equalInRow` iguala dentro de cada fila y `natural` conserva la altura natural. Es null por defecto e ignora `childAspectRatio` cuando se activa. Los modos que igualan alturas requieren medición intrínseca.
