---
title: BreakifyPanelLayout
description: Layout para un panel principal y paneles secundarios.
---

`BreakifyPanelLayout` coloca un panel principal junto a una columna de paneles secundarios desde un breakpoint seleccionado. Por debajo, todos los paneles se organizan verticalmente.

`mainFlex`, `secondaryFlex`, `reverse` y `secondaryDirection` configuran el layout horizontal.

```dart
BreakifyPanelLayout(
  breakpoint: BreakifyBreakpoint.lg,
  spacing: const BreakifyFluidValue(sm: 12, lg: 24),
  mainPanel: DashboardContent(),
  secondaryPanels: [
    SummaryCard(),
    ActionsCard(),
  ],
  mainFlex: 2,
  secondaryFlex: 1,
  secondaryDirection: Axis.vertical,
)
```

Usa `reverse: true` para colocar los paneles secundarios a la izquierda sin invertir su orden. Con `secondaryDirection: Axis.horizontal`, los paneles secundarios comparten el ancho disponible en partes iguales.
