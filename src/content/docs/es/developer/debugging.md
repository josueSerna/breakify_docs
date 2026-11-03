---
title: Depurar layouts responsivos
description: Diagnostica problemas de breakpoints y restricciones.
---

Usa `BreakifyDebugBanner` durante el desarrollo. Un banner dentro de un contenedor acotado muestra el breakpoint local; un ancho local no acotado usa el ancho de `BreakifyScope`.

Si el layout no cambia, verifica que esté bajo `BreakifyScope`, que el ancho local sea finito y que se alcance el umbral configurado.
