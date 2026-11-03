---
title: BreakifyAdaptativeLayout
description: Switch a group between responsive row and column layouts.
---

`BreakifyAdaptativeLayout` switches between a `Column` below a breakpoint and a `Row` from that breakpoint onward.

```dart
BreakifyAdaptativeLayout(
  breakpoint: BreakifyBreakpoint.lg,
  spacing: const BreakifyFluidValue(sm: 12, lg: 24),
  distributeEvenly: true,
  stretchChildren: true,
  children: [Sidebar(), Content()],
)
```

`distributeEvenly` uses `Expanded` for horizontal children when true; `stretchChildren` applies `CrossAxisAlignment.stretch` to the vertical layout. The optional `order` property uses `BreakifyLayoutOrder` and `BreakifyLayoutTemplate` to choose different groups above and below the breakpoint. Group heights are not automatically equalized.

## Ordering children

Use `BreakifyLayoutOrder` to select a distribution below and above the configured breakpoint:

```dart
BreakifyLayoutOrder(
  layoutBelow: BreakifyLayoutTemplate.inColumn,
  layoutAbove: BreakifyLayoutTemplate.custom(
    left: [0, 1],
    right: [2],
  ),
)
```

Available templates are `inRow`, `inColumn`, `twoRows`, `twoColumns` and `custom(left:, right:)`. Custom indices refer to the original `children` list. Every child must appear exactly once, neither custom group may be empty, and invalid indices throw in debug mode. Two-group templates place the first `ceil(n / 2)` children in the first group.
