---
title: Breakpoints personalizados
description: Configura umbrales propios para tu aplicación.
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

Los valores personalizados son útiles cuando tu sistema de diseño usa transiciones diferentes.
