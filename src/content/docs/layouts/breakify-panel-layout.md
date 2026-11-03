---
title: BreakifyPanelLayout
description: Arrange main and secondary panels responsively.
---

`BreakifyPanelLayout` places a main panel beside a vertical stack of secondary panels from a selected breakpoint.

Below the breakpoint all panels are arranged vertically. `mainFlex`, `secondaryFlex`, `reverse` and `secondaryDirection` configure the horizontal layout.

```dart
BreakifyPanelLayout(
  breakpoint: BreakifyBreakpoint.lg,
  spacing: const BreakifyFluidValue(sm: 12, lg: 24),
  mainPanel: DashboardContent(),
  secondaryPanels: [
    SummaryCard(),
    ActionsCard(),
  ],
  mainFlex: 2,
  secondaryFlex: 1,
  secondaryDirection: Axis.vertical,
)
```

Set `reverse: true` to place the secondary panels on the left without reversing their order. With `secondaryDirection: Axis.horizontal`, secondary panels share the available width equally in the horizontal layout.
