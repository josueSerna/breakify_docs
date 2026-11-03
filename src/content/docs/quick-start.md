---
title: Quick Start
description: Find the first steps for exploring Breakify.
---

Wrap your application with `BreakifyScope` so responsive information is available throughout the widget tree:

```dart
void main() {
  runApp(
    BreakifyScope(
      child: MaterialApp(
        home: HomePage(),
      ),
    ),
  );
}
```

Then use `context.breakpoint`, `context.breakifyWidth` and `context.resolve(value)` in your responsive widgets.
