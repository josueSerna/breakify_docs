---
title: BreakifySection
description: Build responsive full-width sections.
---

`BreakifySection` is an experimental full-width section for web pages and landing pages in Breakify 0.3.0.

It supports background, alignment, responsive padding, `minHeight`, `fullViewport` and `childScale`. Its API may change in a future release.

```dart
BreakifySection(
  backgroundColor: Colors.indigo.shade50,
  minHeight: const BreakifyValue(sm: 130),
  alignment: Alignment.centerRight,
  padding: const BreakifyValue<EdgeInsetsGeometry>(
    sm: EdgeInsets.all(16),
    lg: EdgeInsets.symmetric(horizontal: 96, vertical: 48),
  ),
  childScale: 1.25,
  child: const FlutterLogo(size: 64),
)
```

`childScale` changes the visual scale without changing the space reserved by the layout. Use `fullViewport: true` when the section should be at least as tall as the viewport.
