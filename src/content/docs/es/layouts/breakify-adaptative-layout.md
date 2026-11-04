---
title: BreakifyAdaptativeLayout
description: Cambia entre layouts de fila y columna.
---

`BreakifyAdaptativeLayout` usa una `Column` por debajo del breakpoint y una `Row` desde el breakpoint configurado.

```dart
BreakifyAdaptativeLayout(
  breakpoint: BreakifyBreakpoint.lg,
  spacing: const BreakifyFluidValue(sm: 12, lg: 24),
  distributeEvenly: true,
  stretchChildren: true,
  children: [Sidebar(), Content()],
)
```

`distributeEvenly` usa `Expanded` para los hijos horizontales cuando es `true`; `stretchChildren` aplica `CrossAxisAlignment.stretch` al layout vertical. La propiedad opcional `order` permite elegir grupos distintos por encima y por debajo del breakpoint mediante `BreakifyLayoutOrder` y `BreakifyLayoutTemplate`. Las alturas de grupos no se igualan automáticamente.

## Ordenar hijos

Usa `BreakifyLayoutOrder` para elegir una distribución por debajo y por encima del breakpoint:

```dart
BreakifyLayoutOrder(
  layoutBelow: BreakifyLayoutTemplate.inColumn,
  layoutAbove: BreakifyLayoutTemplate.custom(
    left: [0, 1],
    right: [2],
  ),
)
```

Las plantillas disponibles son `inRow`, `inColumn`, `twoRows`, `twoColumns` y `custom(left:, right:)`. Los índices personalizados corresponden a la lista original de `children`. Cada hijo debe aparecer exactamente una vez, ninguno de los grupos personalizados puede estar vacío y los índices inválidos lanzan un error en debug. Las plantillas de dos grupos colocan los primeros `ceil(n / 2)` hijos en el primer grupo.
