---
title: Performance Considerations
description: Build efficient responsive layouts with Breakify.
---

Prefer `BreakifyValue` for discrete design-system changes and use `BreakifyFluidValue` only where interpolation adds value. `BreakifyResponsiveGrid` calculates columns from local width, while `BreakifyGrid` uses an explicit responsive column count.

For grid height modes, `equalInRow` is lazy and generally cheaper for long lists. `equal` measures all cards on layout and width changes, so reserve it for grids that need one height across every row. `natural` avoids intrinsic equalization but cannot support unbounded-height children such as `Spacer` or `Expanded`.
