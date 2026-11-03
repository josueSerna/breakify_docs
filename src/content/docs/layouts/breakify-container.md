---
title: BreakifyContainer
description: Center content while limiting its maximum width.
---

`BreakifyContainer` centers its child and limits the maximum width of the content. Use it to keep a readable line length on large screens while allowing the layout to fill smaller screens.

```dart
BreakifyContainer(
  maxWidth: const BreakifyValue(
    sm: 1200,
  ),
  padding: const BreakifyFluidValue(
    sm: EdgeInsets.all(16),
    lg: EdgeInsets.symmetric(horizontal: 32),
  ),
  child: const ArticleContent(),
)
```

`maxWidth` and `padding` accept `BreakifyValue` or `BreakifyFluidValue`. `margin` and `alignment` use Flutter's regular layout types.
