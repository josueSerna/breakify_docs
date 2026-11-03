---
title: Estructura del proyecto
description: Organiza un proyecto Flutter que usa Breakify.
---

Importa toda la API pública desde un único punto:

```dart
import 'package:breakify/breakify.dart';
```

Coloca `BreakifyScope` en la entrada de la aplicación y sitúa las decisiones de valores y layouts responsivos cerca de los widgets que los consumen. Así la configuración del paquete permanece global, mientras widgets locales como `BreakifyBuilder` y `BreakifyResponsiveGrid` pueden usar sus propias restricciones.

El paquete exporta breakpoints, valores, builders, scope y widgets desde `lib/breakify.dart`.
