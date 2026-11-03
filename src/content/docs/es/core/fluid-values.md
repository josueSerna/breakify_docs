---
title: Valores fluidos
description: Interpola valores suavemente entre breakpoints.
---

`BreakifyFluidValue` interpola linealmente entre los valores definidos:

```dart
const spacing = BreakifyFluidValue(
  sm: 8,
  md: 16,
  lg: 24,
);

final resolvedSpacing = context.resolve(spacing);
```

Antes del primer punto usa el primer valor y después del último usa el último. Usa `resolveRounded` para redondear al píxel lógico más cercano.
