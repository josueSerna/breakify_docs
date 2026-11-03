---
title: BreakifyListView
description: Build lists with responsive spacing and direction.
---

```dart
BreakifyListView(
  spacing: const BreakifyValue(sm: 8, lg: 16),
  itemCount: items.length,
  itemBuilder: (context, index) => ListTile(
    title: Text(items[index]),
  ),
)
```

The widget supports vertical and horizontal scrolling through `scrollDirection`, responsive spacing and a custom separator. When nested, configure `shrinkWrap` and suitable scroll physics for the surrounding scrollable.

For a horizontal list, set the direction explicitly:

```dart
BreakifyListView(
  scrollDirection: Axis.horizontal,
  spacing: const BreakifyFluidValue(sm: 8, lg: 20),
  itemCount: products.length,
  itemBuilder: (context, index) => ProductCard(
    product: products[index],
  ),
)
```
