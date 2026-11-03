---
title: Grid de productos
description: Elige entre grids explícitos y automáticos.
---

Usa `BreakifyGrid` cuando el diseño defina columnas por breakpoint:

```dart
BreakifyGrid(
  columns: const BreakifyValue(sm: 1, md: 2, lg: 4),
  heightMode: BreakifyHeightMode.equalInRow,
  children: products,
)
```

Usa `BreakifyResponsiveGrid` cuando el ancho mínimo de cada tarjeta sea la restricción principal.
