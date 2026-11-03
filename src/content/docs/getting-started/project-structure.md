---
title: Project Structure
description: Organize a Flutter project that uses Breakify.
---

Breakify is imported from one public entry point:

```dart
import 'package:breakify/breakify.dart';
```

Keep the application entry point responsible for `BreakifyScope`, then place responsive values and layout decisions close to the widgets that consume them. This keeps the package configuration global while allowing local widgets such as `BreakifyBuilder` and `BreakifyResponsiveGrid` to use their own constraints.

The package exports breakpoints, values, builders, scope and widgets from `lib/breakify.dart`.
