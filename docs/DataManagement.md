# ContainerJS - Data Management
<a href="./QuickStart.md">Quick Start</a> - <a href="./DataManagement.md">Data Management</a>

## Summary

| Content |
| ------- |
| <a href="#method-add">Method **add()**</a> |
| <a href="#method-remove">Method **remove()**</a> |
| <a href="#method-removeIndex">Method **removeIndex()**</a> |

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

</details>