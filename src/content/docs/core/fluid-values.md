---
title: Fluid Values
description: Interpolate values smoothly between breakpoints.
---

`BreakifyFluidValue` interpolates linearly between each pair of defined breakpoint values:

```dart
const spacing = BreakifyFluidValue(
  sm: 8,
  md: 16,
  lg: 24,
);

final resolvedSpacing = context.resolve(spacing);
```

Before the first defined point it uses the first value; after the last it uses the last. Use `resolveRounded` when the result should be rounded to the nearest logical pixel.
