---
title: Landing page responsiva
description: Combina secciones, valores y un grid responsivo.
---

Construye una landing page con una sección de ancho completo y un grid de funcionalidades con tamaño automático:

```dart
BreakifyScope(
  child: BreakifySection(
    fullViewport: true,
    padding: const BreakifyValue(
      sm: EdgeInsets.all(16),
      lg: EdgeInsets.symmetric(horizontal: 96, vertical: 48),
    ),
    child: BreakifyResponsiveGrid(
      minItemWidth: 240,
      maxColumns: 4,
      spacing: 16,
      children: features,
    ),
  ),
)
```

Usa `BreakifyBuilder` dentro de la sección cuando el hero necesite contenido distinto según el ancho local.
