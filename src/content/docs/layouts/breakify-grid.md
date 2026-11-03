---
title: BreakifyGrid
description: Build grids with responsive columns and heights.
---

`BreakifyGrid` is a responsive grid with configurable columns, spacing and aspect ratio.

`columns`, `spacing`, `crossAxisSpacing`, `mainAxisSpacing` and `childAspectRatio` accept responsive values. Horizontal scrolling is supported. Use `heightMode` to size items from their content; it replaces the removed `equalHeight` option.

```dart
BreakifyGrid(
  columns: const BreakifyValue(sm: 1, md: 2, lg: 3),
  heightMode: BreakifyHeightMode.equalInRow,
  children: cards,
)
```

## Height modes

`BreakifyHeightMode.equal` gives every item the height of the tallest item in the whole grid. `equalInRow` matches items within each row, allowing rows to differ. `natural` preserves each item's natural height and aligns it to the top of its row.

When `heightMode` is not null, `childAspectRatio` is ignored. `Spacer` and `Expanded` work with `equal` and `equalInRow`, but not with `natural`. Children must support intrinsic measurement; widgets such as `LayoutBuilder` are unsupported.
