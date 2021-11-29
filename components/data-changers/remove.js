import { compare } from "../../lib/recursiveComparator.js";

/*  
    remove() - removes target value if content is iterable or target item by value if dictionary. 
    Removes target text if is string. Supports String, Array, Map and Set.
*/
export const remove = (reference, target) => {
    let result;
        switch(this.#type) {
            case "Array":
                result = [];
                reference.#content.forEach(element => {
                    if(!compare(element, target)) {
                        result.push(element);
                    }
                });
                reference.#content = result;
                reference.#resetAttributes();
                break;

            case "Object":
                result = {};
                Object.entries(reference.#content).forEach(entry => {
                    if(!compare(entry[1], target)) {
                        result[entry[0]] = entry[1];
                    }
                });
                reference.#content = result;
                reference.#resetAttributes();
                break;
            
            case "Map":
                result = new Map();
                reference.#content.forEach(value, key => {
                    if(!compare(reference.#content.get(key), target)) {
                        result.set(key, value);
                    }
                });
                reference.#content = result;
                reference.#resetAttributes();
                break;

            case "Set":
                result = [];
                Array.from(reference.#content).forEach(element => {
                    if(!compare(element, target)) {
                        result.push(element);
                    }
                });
                reference.#content = new Set(result);
                reference.#resetAttributes();
                break;

            case "String":
                reference.#content = reference.#content.replaceAll(target, "");
                reference.#resetAttributes();
                break;
        }
        return reference.content();
}