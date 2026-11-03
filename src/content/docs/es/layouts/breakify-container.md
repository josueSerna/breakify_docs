---
title: BreakifyContainer
description: Centra contenido y limita su ancho máximo.
---

`BreakifyContainer` centra su hijo y limita el ancho máximo del contenido. Úsalo para mantener una longitud de lectura cómoda en pantallas grandes y ocupar el espacio disponible en pantallas pequeñas.

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

`maxWidth` y `padding` aceptan `BreakifyValue` o `BreakifyFluidValue`. `margin` y `alignment` usan los tipos de layout normales de Flutter.
