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

## Method toNumber()
Returns a number selective conversion from the container content.

Example:

<details>

```js
const MyContainer = Container.from("a12b34");

MyContainer.toNumber(); //Returns 1234 
```

</details>

<a id="method-toBoolean"></a>

## Method toBoolean()
Returns the content value as a boolean.

Example:

<details>

```js
const MyContainer = Container.from("true");

MyContainer.toBoolean(); //Returns true 
```

</details>

<a id="method-toBase64"></a>

## Method toBase64()
Returns the content value converted to a Base64 code.

Example:

<details>

```js
const MyContainer = Container.from("123456");

MyContainer.toBase64(); //Returns [Base 64 code] 
```

</details>

<a id="method-toSymbol"></a>

## Method toSymbol()
Returns a new Symbol based in the container content.

Example:

<details>

```js
const MyContainer = Container.from("value");

MyContainer.toSymbol(); //Returns Symbol(value) (unique) 
```

</details>