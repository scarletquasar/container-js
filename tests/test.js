import { Container } from "../src/container.js";

const xContainer = Container.from([1, 2, 3, 4]);
xContainer.addEventListener("set", () => console.log("aeA"));
xContainer.addEventListener("get", () => console.log("aA"));
xContainer.add(1);