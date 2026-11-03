---
title: Guía de migración
description: Migración a Breakify 0.3.0.
---

## Reemplazo de `equalHeight`

En `BreakifyGrid` y `BreakifyResponsiveGrid`, `equalHeight` fue reemplazado por `heightMode`.

```dart
// Before
equalHeight: true

// After
heightMode: BreakifyHeightMode.equalInRow
```

`equalHeight: false` equivale a `heightMode: null` u omitir la propiedad.

Desde 0.3.0 el requisito mínimo es Flutter 3.27.0 y Dart 3.0.0.
