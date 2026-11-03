---
title: BreakifyVisibility
description: Show or hide widgets by breakpoint.
---

`BreakifyVisibility` shows or hides widgets according to the current breakpoint.

Use `minBreakpoint`, `maxBreakpoint` or `BreakifyVisibility.only`. The default mode is global; `BreakifyVisibilityMode.local` resolves visibility from the width available to the widget.

```dart
BreakifyVisibility(
  minBreakpoint: BreakifyBreakpoint.lg,
  mode: BreakifyVisibilityMode.local,
  replacement: const MobileSidebar(),
  child: const DesktopSidebar(),
)
```

Use `BreakifyVisibility.only` when the child should appear only at selected breakpoints:

```dart
BreakifyVisibility.only(
  visibleIn: {
    BreakifyBreakpoint.sm,
    BreakifyBreakpoint.xl,
  },
  child: const CompactLogo(),
)
```
