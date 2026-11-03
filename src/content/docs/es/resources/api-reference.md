---
title: Referencia de API
description: API pública exportada por Breakify.
---

La API pública se importa desde `package:breakify/breakify.dart`.

### Núcleo

`BreakifyBreakpoints`, `BreakifyScope`, `BreakifyContext`, `BreakifyValue`, `BreakifyFluidValue` y `BreakifyBuilder`.

### Widgets de layout

`BreakifyAdaptativeLayout` incluye `stretchChildren`, `distributeEvenly`, `BreakifyLayoutOrder` y `BreakifyLayoutTemplate`.

`BreakifyGrid` incluye `childAspectRatio`, `heightMode` y los modos compartidos `equal`, `equalInRow` y `natural` de `BreakifyHeightMode`.

`BreakifyResponsiveGrid` incluye cálculo automático por ancho local, espaciado, límites y el mismo `heightMode`.

`BreakifyPanelLayout` incluye `reverse` y `secondaryDirection`. `BreakifySection`, `BreakifyContainer`, `BreakifyListView`, `BreakifyVisibility` y `BreakifyDebugBanner` se documentan por su comportamiento principal y sus ejemplos.

### Navegación

`BreakifyNavbar` incluye `BreakifyNavbarItem`, `BreakifyNavbarMenuType`, `BreakifyNavbarScrollBehavior`, `BreakifyNavbarDrawerSide` y `logoMaxHeight`.

`BreakifySection` y `BreakifyNavbar` son experimentales en 0.3.0. Consulta el código fuente del paquete como autoridad para firmas completas y valores predeterminados.
