---
title: Custom Breakpoints
description: Configure breakpoint thresholds for your application.
---

```dart
const breakpoints = BreakifyBreakpoints(
  sm: 500,
  md: 700,
  lg: 900,
  xl: 1200,
  xxl: 1600,
);

BreakifyScope(
  breakpoints: breakpoints,
  child: MyApp(),
)
```

Custom values are useful when the design system uses different transitions. Keep the order from the smallest to the largest width.
