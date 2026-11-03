---
title: Why Breakify?
description: Why use a responsive layout toolkit for Flutter?
---

Responsive code often scatters width checks and `LayoutBuilder` callbacks across a widget tree. Breakify centralizes those decisions in a `BreakifyScope`, responsive values and widgets that resolve their local constraints.

## What it provides

- Named breakpoints with configurable minimum widths.
- `BreakifyValue` for stepped values and `BreakifyFluidValue` for interpolation.
- Layout widgets for adaptive rows, columns, grids, panels and lists.
- Global and local resolution so nested layouts can respond to their own width.

Breakify is deliberately composable: use only the widgets and values that solve the problem in front of you.
