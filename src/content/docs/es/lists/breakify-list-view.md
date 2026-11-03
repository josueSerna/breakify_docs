---
title: BreakifyListView
description: Construye listas con espaciado responsivo.
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

Admite scroll vertical u horizontal, espaciado responsivo y un separador personalizado. En listas anidadas configura `shrinkWrap` y la física de scroll adecuada.

Para una lista horizontal, define la dirección explícitamente:

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
