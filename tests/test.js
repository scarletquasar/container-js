import { Container } from "../src/container.js";

const xContainer = Container.from([1, 2, 3]);
xContainer.map(x => console.log(x));