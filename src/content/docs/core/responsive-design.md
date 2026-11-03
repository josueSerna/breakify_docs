---
title: Responsive Design
description: Build adaptive Flutter interfaces with Breakify.
---

Breakify uses a declarative model: define how a value or layout changes, then resolve it from the current width. This avoids repeating comparisons such as `MediaQuery.sizeOf(context).width >= 1024` throughout the UI.

Use the global width from `BreakifyScope` for application-wide decisions. Use local constraints for reusable components that may be placed in different-sized regions.
