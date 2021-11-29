# ContainerJS - Quick Start
## Summary

| Content |
| ------- |
| Creating a container |
| Method **content()** |
| Method **type()** |
| Method **length()** |

## Creating a simple container
There are two ways to create a container, either directly using its constructor with `new Container(content)` or using the shorthand: `Container.from(content)`. After creation the container can **ONLY** receive the same data type in which it was created, it was made that way to be more robust and less tolerant to problems such as mutability, thus avoiding several bugs throughout development.

