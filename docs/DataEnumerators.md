# ContainerJS - Data Enumerators
<a href="./QuickStart.md">⚡ Quick Start</a> - <a href="./DataManagement.md">☢ Data Management</a> - <a href="./DataMasks.md">💠 Data Masks</a> - <a href="./DataEnumerators.md">🌐 Data Enumerators</a>

## Summary

| Content |
| ------- |
| <a href="#method-first">Method **first()**</a> |
| <a href="#method-last">Method **last()**</a> |
| <a href="#method-skip">Method **skip()**</a> |

<a id="method-first"></a>

## Method first(\[Quantity\])
Returns the first X items from an iterable or dictionary object **as a new Container()**.

Example:

<details>

```js
const MyContainer = Container.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Will return the first 5 items as a new Container() ([1, 2, 3, 4, 5])
MyContainer.first(5);
```

</details>

<a id="method-last"></a>

## Method last(\[Quantity\])
Returns the last X items from an iterable or dictionary object **as a new Container()**.

Example:

<details>

```js
const MyContainer = Container.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Will return the first 5 items as a new Container() ([10, 9, 8, 7, 6])
MyContainer.last(5);
```

</details>

## Method skip(\[Quantity\])
Ignore the first X items in the current enumeration and returns a new container of it.

Example:

<details>

```js
const MyContainer = Container.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Will return the first 5 items skipping 3 ([4, 5, 6, 7, 8])
MyContainer.skip(3).first(5);
```

</details>

