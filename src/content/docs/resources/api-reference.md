---
title: API Reference
description: Public API exported by Breakify.
---

The package exports its public API from `package:breakify/breakify.dart`.

### Core

`BreakifyBreakpoints`, `BreakifyScope`, `BreakifyContext`, `BreakifyValue`, `BreakifyFluidValue` and `BreakifyBuilder`.

### Layout widgets

`BreakifyAdaptativeLayout` includes `stretchChildren`, `distributeEvenly`, `BreakifyLayoutOrder` and `BreakifyLayoutTemplate`.

`BreakifyGrid` includes `childAspectRatio`, `heightMode` and the shared `BreakifyHeightMode` modes `equal`, `equalInRow` and `natural`.

`BreakifyResponsiveGrid` includes automatic local-width column calculation, spacing, limits and the shared `heightMode`.

`BreakifyPanelLayout` includes `reverse` and `secondaryDirection`. `BreakifySection`, `BreakifyContainer`, `BreakifyListView`, `BreakifyVisibility` and `BreakifyDebugBanner` are documented by their primary behavior and examples.

### Navigation

`BreakifyNavbar` includes `BreakifyNavbarItem`, `BreakifyNavbarMenuType`, `BreakifyNavbarScrollBehavior`, `BreakifyNavbarDrawerSide` and `logoMaxHeight`.

`BreakifySection` and `BreakifyNavbar` are experimental in 0.3.0. Use the source API and package documentation as the authority for constructor signatures.
