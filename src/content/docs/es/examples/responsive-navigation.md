---
title: Navegación responsiva
description: Añade un navbar adaptativo a Flutter.
---

```dart
BreakifyNavbar(
  items: [
    BreakifyNavbarItem(label: 'Home', onTap: goHome),
    BreakifyNavbarItem(label: 'Contact', onTap: goContact),
  ],
  menuType: BreakifyNavbarMenuType.drawer,
)
```

Este widget es experimental en 0.3.0; revisa sus limitaciones antes de usarlo en producción.
