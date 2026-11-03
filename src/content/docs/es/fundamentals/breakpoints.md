---
title: Breakpoints
description: Configura los tamaños responsivos de Breakify.
---

Breakify incluye cinco breakpoints predeterminados:

| Breakpoint | Ancho mínimo |
| --- | ---: |
| `sm` | 640 |
| `md` | 768 |
| `lg` | 1024 |
| `xl` | 1280 |
| `xxl` | 1536 |

Puedes proporcionar una configuración personalizada de `BreakifyBreakpoints` a `BreakifyScope`. Cada breakpoint se activa en su ancho mínimo configurado, incluido el umbral exacto.

```dart
const breakpoints = BreakifyBreakpoints(
  sm: 500,
  md: 700,
  lg: 900,
  xl: 1200,
  xxl: 1600,
);
```
