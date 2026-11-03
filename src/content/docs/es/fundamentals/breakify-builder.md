---
title: BreakifyBuilder
description: Construye widgets según el breakpoint local.
---

`BreakifyBuilder` construye widgets usando el breakpoint resuelto desde sus restricciones locales:

```dart
BreakifyBuilder(
  builder: (context, breakpoint, constraints) {
    return Text(breakpoint.name);
  },
)
```

El builder recibe el `BuildContext`, el `BreakifyBreakpoint` resuelto y el `BoxConstraints` local.
