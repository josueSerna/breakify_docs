---
title: Debugging Responsive Layouts
description: Diagnose breakpoint and constraint issues.
---

Use `BreakifyDebugBanner` during development to display the resolved breakpoint. A banner inside a constrained container reports that container's local breakpoint; an unbounded local width falls back to the `BreakifyScope` width.

When a layout does not change, verify that it is below a `BreakifyScope`, that the width is finite where local mode is used and that the configured threshold is actually reached.
