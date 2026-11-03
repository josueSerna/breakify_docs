---
title: Product Grid
description: Choose between explicit and automatic product grids.
---

Use `BreakifyGrid` when the design specifies columns per breakpoint:

```dart
BreakifyGrid(
  columns: const BreakifyValue(sm: 1, md: 2, lg: 4),
  heightMode: BreakifyHeightMode.equalInRow,
  children: products,
)
```

Use `BreakifyResponsiveGrid` when the minimum card width is the main design constraint.
