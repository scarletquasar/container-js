import { toString } from "./toString.js";

export const toBoolean = (content) => {
    const base = toString(content);

    switch(base) {
        case "false":
            return false;
        
        case "true":
            return true;
    }

    return base.length > 0;
}