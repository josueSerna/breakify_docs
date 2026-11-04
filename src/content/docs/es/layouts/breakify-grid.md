---
title: BreakifyGrid
description: Construye grids con columnas y alturas responsivas.
---

`BreakifyGrid` es un grid responsivo con columnas, espaciado y proporción configurables.

`columns`, `spacing`, `crossAxisSpacing`, `mainAxisSpacing` y `childAspectRatio` aceptan valores responsivos. También admite scroll horizontal. Usa `heightMode` para calcular alturas desde el contenido; esta opción reemplaza a `equalHeight`.

```dart
BreakifyGrid(
  columns: const BreakifyValue(sm: 1, md: 2, lg: 3),
  heightMode: BreakifyHeightMode.equalInRow,
  children: cards,
)
```

## Modos de altura

`BreakifyHeightMode.equal` da a todos los elementos la altura del elemento más alto del grid. `equalInRow` iguala los elementos de cada fila, permitiendo que las filas difieran. `natural` conserva la altura natural de cada elemento y lo alinea arriba.

Cuando `heightMode` no es null, `childAspectRatio` se ignora. `Spacer` y `Expanded` funcionan con `equal` y `equalInRow`, pero no con `natural`. Los hijos deben admitir medición intrínseca; widgets como `LayoutBuilder` no son compatibles.
