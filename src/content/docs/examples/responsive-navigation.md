---
title: Responsive Navigation
description: Add a responsive navbar to a Flutter application.
---

`BreakifyNavbar` uses inline items at its configured breakpoint and a mobile menu below it:

```dart
BreakifyNavbar(
  items: [
    BreakifyNavbarItem(label: 'Home', onTap: goHome),
    BreakifyNavbarItem(label: 'Contact', onTap: goContact),
  ],
  menuType: BreakifyNavbarMenuType.drawer,
)
```

This widget is experimental in 0.3.0; review its limitations before using it in production.
