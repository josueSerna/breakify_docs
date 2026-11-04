---
title: BreakifyNavbar
description: Construye una barra de navegación responsiva experimental.
---

`BreakifyNavbar` es una barra de navegación responsiva experimental. Desde el breakpoint seleccionado, por defecto `md`, los elementos se muestran horizontalmente; por debajo se usa un menú desplegable o drawer.

Requiere `BreakifyScope` y un ancestor de Material.

## Configuración del navbar

`BreakifyNavbarItem` define una entrada con `label`, `icon` opcional, `onTap` y `enabled`. `BreakifyNavbarMenuType.dropdown` expande bajo la barra; `drawer` abre un panel lateral configurado con `BreakifyNavbarDrawerSide`.

`BreakifyNavbarScrollBehavior.fixed` mantiene la barra visible, `static` la desplaza con el contenido y `hideOnScroll` la oculta al bajar. Los modos `static` y `hideOnScroll` requieren un scroll vertical como scrollable principal del `body`.

`logoMaxHeight` tiene un valor predeterminado de `80` y permite mostrar logos altos sin comprimirlos. El layout de escritorio no hace scroll cuando hay demasiados elementos y el botón atrás de Android no cierra el menú móvil.

> **Experimental:** BreakifyNavbar es experimental en 0.3.0. Su API y comportamiento pueden cambiar en futuras versiones.

```dart
BreakifyNavbar(
  logo: Image.asset('assets/logo.png', height: 32),
  items: [
    BreakifyNavbarItem(
      label: 'Home',
      icon: Icons.home,
      onTap: goHome,
    ),
    BreakifyNavbarItem(
      label: 'Services',
      icon: Icons.work,
      onTap: goToServices,
    ),
    BreakifyNavbarItem(
      label: 'Contact',
      onTap: goToContact,
      enabled: false,
    ),
  ],
  menuType: BreakifyNavbarMenuType.drawer,
  scrollBehavior: BreakifyNavbarScrollBehavior.hideOnScroll,
  drawerSide: BreakifyNavbarDrawerSide.right,
  logoMaxHeight: 80,
  body: ListView(
    children: const [PageContent()],
  ),
)
```
