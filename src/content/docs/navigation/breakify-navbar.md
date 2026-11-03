---
title: BreakifyNavbar
description: Build an experimental responsive navigation bar.
---

`BreakifyNavbar` is an experimental responsive navbar. From the selected breakpoint (default `md`) items are horizontal; below it, a dropdown or drawer menu is used.

It supports configurable logo, menu type, colors, dimensions, drawer settings, animation and scroll behavior. It requires `BreakifyScope` and a Material ancestor.

## Navbar configuration

`BreakifyNavbarItem` defines an entry with `label`, optional `icon`, `onTap` and `enabled`. `BreakifyNavbarMenuType.dropdown` expands below the bar; `drawer` opens a side panel configured with `BreakifyNavbarDrawerSide`.

`BreakifyNavbarScrollBehavior.fixed` keeps the bar visible, `static` scrolls it with the content and `hideOnScroll` hides it while scrolling down. Static and hide-on-scroll modes require a vertical scrollable as the top-level `body` scrollable.

`logoMaxHeight` defaults to `80` and allows a taller logo to render without being squeezed to the bar height. The desktop layout does not scroll when too many items overflow. The Android back button does not close the mobile menu.

> **Experimental:** BreakifyNavbar is experimental in 0.3.0. Its API and behavior may change in future releases.

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
