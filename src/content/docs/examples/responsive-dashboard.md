---
title: Responsive Dashboard
description: Combine panel and adaptive layouts for a dashboard.
---

Use `BreakifyPanelLayout` for the main content and secondary cards. Use `BreakifyAdaptativeLayout` inside a panel when its own children need a row/column transition.

```dart
BreakifyPanelLayout(
  breakpoint: BreakifyBreakpoint.lg,
  mainPanel: DashboardContent(),
  secondaryPanels: [SummaryCard(), ActionsCard()],
  secondaryDirection: Axis.vertical,
)
```

Set `reverse: true` when the secondary column belongs on the left without changing its item order.
