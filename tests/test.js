import { Container } from "../src/container.js";

const xContainer = Container.from([1, 2, 3, 4]);
console.log(xContainer.where(x => x > 1).first(2).toString());