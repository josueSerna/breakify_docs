---
title: BreakifyResponsiveGrid
description: Calculate responsive columns from local width.
---

`BreakifyResponsiveGrid` calculates how many columns fit while keeping a minimum item width.

```dart
BreakifyResponsiveGrid(
  minItemWidth: 240,
  maxColumns: 4,
  spacing: 16,
  children: products,
)
```

Unlike `BreakifyGrid`, it responds to the local width and does not need a value for each breakpoint.

## Height modes

`heightMode` uses the shared `BreakifyHeightMode` enum: `equal` matches the tallest item in the whole grid, `equalInRow` matches items within each row and `natural` preserves each item's natural height. It is null by default and ignores `childAspectRatio` when enabled. Intrinsic measurement is required for equalized modes.
