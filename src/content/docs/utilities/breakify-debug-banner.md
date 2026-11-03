---
title: BreakifyDebugBanner
description: Display the current breakpoint during development.
---

`BreakifyDebugBanner` displays the current breakpoint during development.

Use `enabled`, `corner` and a custom breakpoint configuration as needed. It should normally be disabled in production.

```dart
BreakifyDebugBanner(
  enabled: true,
  corner: BreakifyBannerCorner.bottomLeft,
  child: const MyApp(),
)
```

The banner resolves its breakpoint from local width and falls back to the `BreakifyScope` width when the local width is unbounded.
