# ContainerJS - Data Masks
<a href="./QuickStart.md">Quick Start</a> - <a href="./DataManagement.md">Data Management</a> - <a href="./DataMasks.md">Data Masks</a>

## Summary

| Content |
| ------- |
| <a href="#method-toString">Method **toString()**</a> |
| <a href="#method-toNumber">Method **toNumber()**</a> |
| <a href="#method-toBoolean">Method **toBoolean()**</a> |
| <a href="#method-toBase64">Method **toBase64()**</a> |
| <a href="#method-toSymbol">Method **toSymbol()**</a> |

<a id="method-toString"></a>

## Method toString()
Returns a string raw conversion from the container content.

Example:

<details>

```js
const MyContainer = Container.from([1, 2, 3]);

MyContainer.toString(); //Returns "[1, 2, 3]"
```

</details>
