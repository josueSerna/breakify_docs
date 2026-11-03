---
title: Restricciones globales y locales
description: Elige entre el ancho de la aplicación y el ancho local.
---

Los widgets que usan el modo global resuelven el ancho expuesto por `BreakifyScope`. Los widgets con resolución local usan el ancho finito disponible donde se colocan.

`BreakifyBuilder`, `BreakifyResponsiveGrid`, `BreakifyVisibility` en modo local y `BreakifyDebugBanner` usan restricciones locales cuando corresponde. Si el ancho local no está acotado, se usa el ancho de `BreakifyScope` como fallback.

Esta diferencia es importante dentro de sidebars, tarjetas y layouts de panel: un componente puede responder a su propia región en lugar de hacerlo a toda la ventana.
