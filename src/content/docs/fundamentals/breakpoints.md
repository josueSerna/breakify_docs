---
title: Breakpoints
description: Understand the Breakify breakpoint concept.
---

Breakify includes five default breakpoints:

| Breakpoint | Minimum width |
| --- | ---: |
| `sm` | 640 |
| `md` | 768 |
| `lg` | 1024 |
| `xl` | 1280 |
| `xxl` | 1536 |

You can provide a custom `BreakifyBreakpoints` configuration to `BreakifyScope`. Each breakpoint becomes active at its configured minimum width, including the exact threshold.

```dart
const breakpoints = BreakifyBreakpoints(
  sm: 500,
  md: 700,
  lg: 900,
  xl: 1200,
  xxl: 1600,
);
```
