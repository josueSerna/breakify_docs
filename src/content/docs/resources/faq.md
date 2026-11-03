---
title: FAQ
description: Frequently asked questions about Breakify.
---

## Which Flutter versions are supported?

Breakify 0.3.0 requires Flutter `>=3.27.0` and Dart `>=3.0.0 <4.0.0`.

## How do breakpoints work?

Each breakpoint becomes active at its configured minimum width, including the exact threshold.

## Grid or responsive grid?

Use `BreakifyGrid` for explicit columns per breakpoint. Use `BreakifyResponsiveGrid` when the available local width and minimum item width should determine the columns.

## Why is `childAspectRatio` ignored?

It is ignored when `heightMode` is not null because item height comes from content.

## Is BreakifyNavbar stable?

No. It is experimental in 0.3.0 and its API may change.

## How do I migrate from 0.2.x?

Replace `equalHeight: true` with `heightMode: BreakifyHeightMode.equalInRow`; `equalHeight: false` becomes `heightMode: null`.
