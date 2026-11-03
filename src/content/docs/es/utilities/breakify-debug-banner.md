---
title: BreakifyDebugBanner
description: Muestra el breakpoint actual durante el desarrollo.
---

`BreakifyDebugBanner` muestra el breakpoint actual durante el desarrollo. Puedes configurar `enabled`, `corner` y una configuración personalizada de breakpoints.

Normalmente debe deshabilitarse en producción.

```dart
BreakifyDebugBanner(
  enabled: true,
  corner: BreakifyBannerCorner.bottomLeft,
  child: const MyApp(),
)
```

El banner resuelve el breakpoint desde el ancho local y usa el ancho de `BreakifyScope` como fallback cuando el ancho local no está acotado.
