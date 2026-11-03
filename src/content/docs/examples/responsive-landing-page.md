---
title: Responsive Landing Page
description: Combine sections, values and a responsive grid.
---

Build a landing page with a full-width section and an automatically sized feature grid:

```dart
BreakifyScope(
  child: BreakifySection(
    fullViewport: true,
    padding: const BreakifyValue(
      sm: EdgeInsets.all(16),
      lg: EdgeInsets.symmetric(horizontal: 96, vertical: 48),
    ),
    child: BreakifyResponsiveGrid(
      minItemWidth: 240,
      maxColumns: 4,
      spacing: 16,
      children: features,
    ),
  ),
)
```

Use `BreakifyBuilder` inside the section when the hero needs different content for a local width.
