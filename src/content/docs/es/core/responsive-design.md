---
title: Diseño responsivo
description: Crea interfaces Flutter adaptativas con Breakify.
---

Breakify usa un modelo declarativo: defines cómo cambia un valor o layout y lo resuelves desde el ancho actual. Esto evita repetir comparaciones como `MediaQuery.sizeOf(context).width >= 1024` por toda la interfaz.

Usa el ancho global de `BreakifyScope` para decisiones de aplicación. Usa restricciones locales para componentes reutilizables que puedan colocarse en regiones de distintos tamaños.
