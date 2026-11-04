---
title: Historial de cambios
description: Historial de versiones de Breakify.
---

## 0.3.0

### Cambios incompatibles

- `equalHeight` fue reemplazado por `heightMode` nullable en `BreakifyGrid` y `BreakifyResponsiveGrid`.
- `equalHeight: true` equivale a `BreakifyHeightMode.equalInRow`; `false` equivale a `null`.
- `childAspectRatio` se ignora cuando `heightMode` no es null.
- El mínimo de Flutter pasó a ser 3.27.0.

### Añadido

- `BreakifyHeightMode.equal`, `equalInRow` y `natural`.
- `reverse` y `secondaryDirection` en `BreakifyPanelLayout`.
- `order` en `BreakifyAdaptativeLayout`, junto con `BreakifyLayoutOrder` y `BreakifyLayoutTemplate`.
- `childScale` experimental en `BreakifySection`.
- `BreakifyNavbar` experimental con items, menús dropdown/drawer, comportamientos de scroll y `logoMaxHeight`.
- Ejemplos de grids con alturas iguales y de ordenamiento de layouts.

### Limitaciones

- Los modos de altura requieren medición intrínseca; widgets como `LayoutBuilder` no son compatibles.
- `natural` no admite `Spacer` ni `Expanded`.

## 0.2.1

- Corrección de la resolución de breakpoints en los umbrales mínimos exactos, incluidas configuraciones personalizadas.
- Mejoras en la documentación de `BreakifyResponsiveGrid` y cobertura del cálculo de ancho local.
- Añadido soporte opt-in de `equalHeight` a `BreakifyResponsiveGrid`.
- Añadidos el logo de Breakify y los assets de la mascota Brix.
- Actualizado `BreakifyDebugBanner` para usar restricciones locales con fallback global.
- Mejorada la aplicación de ejemplo.

## 0.2.0

- Añadidos `BreakifyPanelLayout`, `BreakifyResponsiveGrid` y modos de visibilidad local/global.
- Ampliado el ejemplo y las pruebas.
- Ampliada la documentación en inglés y español.

## 0.1.1

- Añadido `stretchChildren` a `BreakifyAdaptativeLayout`.
- Añadido `equalHeight` a `BreakifyGrid`.
- Corregido el scroll horizontal de `BreakifyGrid` y `BreakifyListView`.
- Añadida documentación README en inglés y español, junto con una aplicación de ejemplo completa.
- El comportamiento existente no cambió de forma predeterminada.

## 0.1.0

- Lanzamiento inicial con breakpoints, valores, valores fluidos, container, layout, grid, lista, visibilidad y banner de debug.
