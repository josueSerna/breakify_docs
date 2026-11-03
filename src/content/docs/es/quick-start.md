---
title: Inicio rápido
description: Primeros pasos para usar Breakify.
---

Envuelve tu aplicación con `BreakifyScope` para que la información responsiva esté disponible en todo el árbol de widgets:

```dart
void main() {
  runApp(
    BreakifyScope(
      child: MaterialApp(
        home: HomePage(),
      ),
    ),
  );
}
```

Después puedes usar `context.breakpoint`, `context.breakifyWidth` y `context.resolve(value)` en tus widgets responsivos.
