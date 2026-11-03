---
title: Global and Local Constraints
description: Choose between application width and local layout width.
---

Widgets that use the global mode resolve the width exposed by `BreakifyScope`. Widgets with local resolution use the finite width available where they are placed.

`BreakifyBuilder`, `BreakifyResponsiveGrid`, `BreakifyVisibility` in local mode and `BreakifyDebugBanner` use local constraints where supported. If local width is unbounded, the documented fallback is the width from `BreakifyScope`.

This distinction matters inside sidebars, cards and panel layouts: a component can be responsive to its own region instead of the full window.
