---
title: Changelog
description: Release history for Breakify.
---

## 0.3.0

### Breaking changes

- Replaced `equalHeight` in `BreakifyGrid` and `BreakifyResponsiveGrid` with nullable `heightMode`.
- `equalHeight: true` maps to `BreakifyHeightMode.equalInRow`; `false` maps to `null`.
- `childAspectRatio` is ignored when `heightMode` is not null.
- Minimum Flutter version is now 3.27.0.

### Added

- `BreakifyHeightMode.equal`, `equalInRow` and `natural`.
- `BreakifyPanelLayout.reverse` and `secondaryDirection`.
- `BreakifyAdaptativeLayout.order` with `BreakifyLayoutOrder` and `BreakifyLayoutTemplate`.
- Experimental `BreakifySection.childScale`.
- Experimental `BreakifyNavbar` with items, dropdown/drawer menus, scroll behaviors and `logoMaxHeight`.
- Equal-height grid examples and layout-order examples.

### Limitations

- Intrinsic measurement is required for height modes; widgets such as `LayoutBuilder` are unsupported.
- `natural` does not support `Spacer` or `Expanded`.

## 0.2.1

- Fixed breakpoint resolution at exact minimum widths, including custom configurations.
- Improved `BreakifyResponsiveGrid` documentation and local-width calculation coverage.
- Added opt-in `equalHeight` support to `BreakifyResponsiveGrid`.
- Added the Breakify logo and Brix mascot assets.
- Updated `BreakifyDebugBanner` to use local constraints with a global fallback.
- Improved the example application.

## 0.2.0

- Added `BreakifyPanelLayout` and `BreakifyResponsiveGrid`.
- Added local and global visibility modes.
- Expanded the example app, tests and English/Spanish documentation.

## 0.1.1

- Added `stretchChildren` to `BreakifyAdaptativeLayout`.
- Added `equalHeight` to `BreakifyGrid`.
- Fixed horizontal scrolling for `BreakifyGrid` and `BreakifyListView`.
- Added English and Spanish README documentation and a complete example app.
- Existing behavior remained unchanged by default.

## 0.1.0

- Initial release with responsive breakpoints, values, fluid values, container, layout, grid, list, visibility and debug banner.
