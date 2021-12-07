# ContainerJS
An experiment with the objective of bringing rational objects using a solid abstraction to provide methods and attributes that follow a fixed pattern and increase the readability and coherence of the code.

## Versions
Info: DO NOT use the development version, use a branch stable version.

| Version | Branch |
| ------- | ------ |
| development | main |
| 1.0.4 | v1.0.4 |
| 1.0.3 | v1.0.3 |
| 1.0.1 | v1.0.1 |
| 1.0.0 | v1.0.0 |

## How it works?
ContainerJS is a library that implements a new JavaScript constructor, **Container**, among its functionalities its main use is to isolate an object in a solid abstraction, allowing safe and coherent operations to be performed with it and keeping it in its initial type, which prevents unwanted behaviors.

A Container can also provide a lot of generic functions to handle, edit and manage the data as it was inspired by tools like Linq (from .NET) and py Linq (an implementation of Linq in Python).

## Interesting use cases

<details>

### Getting data selectively
A container allows recursive operations, one of those possibilities is the ability to get ordered data, such as "the first 5 items of an iterable object", "the last 3 items of an iterable object" or "the first 5 items of an iterable object skipping two objects".

Examples:

<details>

```js
const MyContainer = Container.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Will return the first 5 items ([1, 2, 3, 4, 5])
MyContainer.first(5);

//Will return the last 3 items ([10, 9, 8])
MyContainer.last(3);

//Will return the first 5 items skipping 3 ([4, 5, 6, 7, 8])
MyContainer.skip(3).first(5);
```

</details>

### Unifying data management
A container is capable of dynamically detecting its type when being created, from that it allows the management of data in a unified way using generic methods. It currently supports popular JavaScript types such as Array, Object, Set and Map.

Examples:

<details>

```js
const MyContainer = Container.from([]);

MyContainer.add(1); //Will add the item 1 to MyContainer content
```

```js
const MyContainer = Container.from(new Set([]));

MyContainer.add(1); //Will add the item 1 to MyContainer content
```

```js
const MyContainer = Container.from({});

MyContainer.add("a", 1); //Will add the item {a: 1} to MyContainer content
```

```js
const MyContainer = Container.from(new Map());

MyContainer.add("a", 1); //Will add the item {a: 1} to MyContainer content
```

</details>

</details>

## Installation
Via NPM:

```
npm install container-dot-js
```

Manually:

```
git clone https://github.com/EternalQuasar0206/container-js
```

## Getting Started
To start using ContainerJS in a project just use the snippet:

```js
import { Container } from "container-dot-js"
```

or

```js
import { Container } from "/path/to/repo/container.js"
```

You can get started and learn about all the ContainerJS features <a href="./docs/QuickStart.md">here</a>.