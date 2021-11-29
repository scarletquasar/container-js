# ContainerJS - Quick Start
## Summary

| Content |
| ------- |
| <a href="#simple-container">Creating a container</a> |
| <a href="#method-content">Method **content()**</a> |
| <a href="#method-set">Method **set()**</a> |
| <a href="#method-type">Method **type()**</a> |
| <a href="#method-length">Method **length()**</a> |

<a id="simple-container"></a>

## Creating a simple container
There are two ways to create a container, either directly using its constructor with `new Container(content)` or using the shorthand: `Container.from(content)`. After creation the container can **ONLY** receive the same data type (constructor) in which it was created, it was made that way to be more robust and less tolerant to problems such as mutability, thus avoiding several bugs throughout development.

<a id="method-content"></a>

## Method content()
The `[container].content()` method will fetch the exact content that is currently populating the container. It is a get method only and cannot be used to set new values.

Example:

<details>

```js
const MyContainer = Container.from([1, 2, 3]);
MyContainer.content(); //Will return an Array [1, 2, 3]
```

</details>

<a id="method-set"></a>

## Method set(\[newContent\])
The `[container].set([newContent])` will try to change the container's content to the new content. It will only work if the new content type is the same as the old content.

Example:

<details>

```js
const MyContainer = Container.from(1);
MyContainer.set(2); //Success, will return the new content
MyContainer.set({}); //Will throw a TypeError
```

</details>

<a id="method-type"></a>

## Method type()
`[container].type()` returns the container base constructor.

Examples:

<details>

```js
const MyContainer = Container.from(1);
MyContainer.type(); //Will return "Number"
```

```js
const MyContainer = Container.from({});
MyContainer.type(); //Will return "Object"
```

```js
const MyContainer = Container.from(new Map());
MyContainer.type(); //Will return "Map"
```

</details>

<a id="method-length"></a>

## Method length()
`[container].length()` returns the container content length.

Examples:

<details>

```js
const MyContainer = Container.from([1, 2, 3]);
MyContainer.length(); //Will return 3
```

```js
const MyContainer = Container.from({a: 1, b: 2});
MyContainer.length(); //Will return 2
```

```js
const MyContainer = Container.from(new Set([1, 2, 3, 4]));
MyContainer.length(); //Will return 4
```

</details>