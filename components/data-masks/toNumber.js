import { toString } from "./toString.js";

//Todo: switch from "map" to "filter" to prevent using character replacement
export const toNumber = (content) => {
    const base = toString(content);
    const numberComponents = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "."];
    let result = base.split("").map((x) => {
        if(numberComponents.includes(x)) {
            return x;
        }
        else {
            return "?";
        }
    }).join("").replaceAll("?", "");

    return result;
}