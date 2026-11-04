---
title: Dashboard responsivo
description: Combina paneles y layouts adaptativos.
---

Usa `BreakifyPanelLayout` para el contenido principal y las tarjetas secundarias. Usa `BreakifyAdaptativeLayout` dentro de un panel cuando sus propios hijos necesiten una transición entre fila y columna:

```dart
BreakifyPanelLayout(
  breakpoint: BreakifyBreakpoint.lg,
  mainPanel: DashboardContent(),
  secondaryPanels: [SummaryCard(), ActionsCard()],
  secondaryDirection: Axis.vertical,
)
```

Usa `reverse: true` para colocar la columna secundaria a la izquierda sin cambiar el orden de sus elementos.
