---
title: Dashboard responsivo
description: Combina paneles y layouts adaptativos.
---

Usa `BreakifyPanelLayout` para el contenido principal y tarjetas secundarias:

```dart
BreakifyPanelLayout(
  breakpoint: BreakifyBreakpoint.lg,
  mainPanel: DashboardContent(),
  secondaryPanels: [SummaryCard(), ActionsCard()],
  secondaryDirection: Axis.vertical,
)
```

Usa `reverse: true` para colocar la columna secundaria a la izquierda sin cambiar el orden de sus elementos.
