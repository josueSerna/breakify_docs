---
title: BreakifyBuilder
description: Build widgets from the current local breakpoint.
---

`BreakifyBuilder` builds widgets using the breakpoint resolved from its local constraints:

```dart
BreakifyBuilder(
  builder: (context, breakpoint, constraints) {
    return Text(breakpoint.name);
  },
)
```

The builder receives the current `BuildContext`, the resolved `BreakifyBreakpoint` and local `BoxConstraints`.
