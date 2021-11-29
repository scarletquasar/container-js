# ContainerJS - Data Management
<a href="./QuickStart.md">Quick Start</a> - <a href="./DataManagement.md">Data Management</a>

## Summary

| Content |
| ------- |
| <a href="#method-add">Method **add()**</a> |
| <a href="#method-remove">Method **remove()**</a> |
| <a href="#method-removeIndex">Method **removeIndex()**</a> |

<a id="method-add"></a>

## Method add(\[Content\])
Adds a new element to the container's contents.

Examples:

<details>

```js
const MyContainer = Container.from([]);

MyContainer.add(1); //MyContainer content now will be [1]
```

```js
const MyContainer = Container.from({});

MyContainer.add("a", 1); //MyContainer content now will be {a: 1}
```

```js
const MyContainer = Container.from("ab");

MyContainer.add("c"); //MyContainer content now will be "abc"
```

</details>

<a id="method-remove"></a>

## Method remove(\[Content\])
Remove a element from container content by value.

Example:

<details>

```js
const MyContainer = Container.from([1, 2, 3]);

MyContainer.remove(1); //MyContainer content now will be [2, 3]
```

</details>

## Method removeIndex(\[Content\])
Remove a element from container content by index.

Example:

<details>

```js
const MyContainer = Container.from([1, 2, 3]);

MyContainer.removeIndex(0); //MyContainer content now will be [2, 3]
```

</details>