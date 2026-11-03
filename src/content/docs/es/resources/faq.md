---
title: Preguntas frecuentes
description: Preguntas frecuentes sobre Breakify.
---

## ¿Qué versiones son compatibles?

Breakify 0.3.0 requiere Flutter `>=3.27.0` y Dart `>=3.0.0 <4.0.0`.

## ¿Cómo funcionan los breakpoints?

Cada breakpoint se activa en su ancho mínimo configurado, incluido el umbral exacto.

## ¿Grid explícito o responsivo?

Usa `BreakifyGrid` para columnas explícitas por breakpoint y `BreakifyResponsiveGrid` para calcularlas según el ancho local y el ancho mínimo.

## ¿Por qué se ignora `childAspectRatio`?

Se ignora cuando `heightMode` no es null porque la altura se calcula desde el contenido.

## ¿BreakifyNavbar es estable?

No. Es experimental en 0.3.0 y su API puede cambiar.

## ¿Cómo migro desde 0.2.x?

Reemplaza `equalHeight: true` por `heightMode: BreakifyHeightMode.equalInRow`; `equalHeight: false` equivale a `heightMode: null`.
