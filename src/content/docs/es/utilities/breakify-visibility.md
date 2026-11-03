---
title: BreakifyVisibility
description: Muestra u oculta widgets según el breakpoint.
---

`BreakifyVisibility` muestra u oculta widgets según el breakpoint actual. Puedes usar `minBreakpoint`, `maxBreakpoint` o `BreakifyVisibility.only`.

El modo predeterminado es global; `BreakifyVisibilityMode.local` usa el ancho disponible para el widget.

```dart
BreakifyVisibility(
  minBreakpoint: BreakifyBreakpoint.lg,
  mode: BreakifyVisibilityMode.local,
  replacement: const MobileSidebar(),
  child: const DesktopSidebar(),
)
```

Usa `BreakifyVisibility.only` cuando el hijo deba aparecer solo en breakpoints concretos:

```dart
BreakifyVisibility.only(
  visibleIn: {
    BreakifyBreakpoint.sm,
    BreakifyBreakpoint.xl,
  },
  child: const CompactLogo(),
)
```
