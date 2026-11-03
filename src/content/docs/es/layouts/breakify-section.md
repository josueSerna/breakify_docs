---
title: BreakifySection
description: Secciones de ancho completo para páginas web.
---

`BreakifySection` es un widget experimental para páginas web y landing pages en Breakify 0.3.0.

Admite fondo, alineación, padding responsivo, `minHeight`, `fullViewport` y `childScale`. Su API puede cambiar en futuras versiones.

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

`childScale` cambia la escala visual sin cambiar el espacio reservado por el layout. Usa `fullViewport: true` cuando la sección deba tener como mínimo la altura del viewport.
