---
title: Responsive Values
description: Explore responsive values in Breakify.
---

Use `BreakifyValue` to define a value per breakpoint. Missing values inherit the nearest previous value:

```dart
const columns = BreakifyValue(
  sm: 1,
  md: 2,
  lg: 4,
);

final value = context.resolve(columns);
```

`BreakifyValue` is generic and can resolve values such as `int`, `double` and `EdgeInsets`. For smooth transitions, use `BreakifyFluidValue`; it linearly interpolates between defined breakpoint values.
