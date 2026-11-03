---
title: Migration Guide
description: Migration notes for Breakify.
---

## Replacing `equalHeight`

In `BreakifyGrid` and `BreakifyResponsiveGrid`, `equalHeight` was replaced by `heightMode`.

```dart
// Before
equalHeight: true

// After
heightMode: BreakifyHeightMode.equalInRow
```

`equalHeight: false` maps to `heightMode: null` or omitting the property.

From 0.3.0 the minimum requirements are Flutter 3.27.0 and Dart 3.0.0.
