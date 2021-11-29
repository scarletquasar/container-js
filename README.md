# ContainerJS
An experiment with the objective of bringing rational objects using a solid abstraction to provide methods and attributes that follow a fixed pattern and increase the readability and coherence of the code.

## How it works?
ContainerJS is a library that implements a new JavaScript constructor, **Container**, among its functionalities its main use is to isolate an object in a solid abstraction, allowing safe and coherent operations to be performed with it and keeping it in its initial type, which prevents unwanted behaviors.

A Container can also provide a lot of generic functions to handle, edit and manage the data as it was inspired by tools like Linq (from .NET) and py Linq (an implementation of Linq in Python).

## Interesting use cases
### Getting data selectively
A container allows recursive operations, one of those possibilities is the ability to get ordered data, such as "the first 5 items of an iterable object", "the last 3 items of an iterable object" or "the first 5 items of an iterable object skipping two objects".

Examples:

<details>

```js
const MyContainer = Container.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);

//Will return the first 5 items ([1, 2, 3, 4, 5])
MyContainer.first(5);

//Will return the last 3 items ([10, 9, 8])
MyContainer.first(3);

//Will return the first 5 items skipping 3 ([4, 5, 6, 7, 8])
MyContainer.skip(3).first(5);
```

</details>