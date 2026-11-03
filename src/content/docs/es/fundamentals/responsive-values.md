---
title: Valores responsivos
description: Define valores que se adaptan al tamaño disponible.
---

Usa `BreakifyValue` para definir un valor por breakpoint. Los valores ausentes heredan el valor anterior más cercano:

```dart
const columns = BreakifyValue(
  sm: 1,
  md: 2,
  lg: 4,
);

final value = context.resolve(columns);
```

Para transiciones suaves usa `BreakifyFluidValue`, que interpola linealmente entre los valores definidos.
