import { compare } from "./lib/recursiveComparator.js"
import * as methods from "./components/index.js"; 

class Container {
    #errors = {
        notAssignable: "The value declared is not assignable to the container type.",
        invalidArguments: "The inserted arguments are invalid for this operation."
    }

    static from(content) {
        return new Container(content);
    }

    #content = null;
    #type = null;
    #length = 0;

    constructor(content) {
        this.#content = content;
        this.#resetAttributes();
    }

    #resetAttributes() {
        const newProperties = methods.resetAttributes(this.content());
        this.#type = newProperties.type;
        this.#length = newProperties.length;
    }

    //Fetch data from container
    content = () => this.#content;
    length = () => this.#length;
    type = () => this.#type;
    toString = () => methods.toString(this.content());
    toNumber = () => methods.toNumber(this.content(), this.type());
    toBoolean = () => methods.toBoolean(this.content());
    toSymbol = () => methods.toSymbol(this.content());
    toBase64 = () => methods.toBase64(this.content());
    forEach = () => {}

    //Fetch changed data from container in a new container
    first = (quantity) => Container.from(methods.first(this.content(), this.type(), quantity));
    last = (quantity) => Container.from(methods.last(this.content(), this.type(), quantity, this.length()));
    skip = (quantity) => Container.from(methods.skip(this.content(), this.type(), quantity));

    //Edit data in the container
    set = (newContent) => {
        if(methods.set(newContent, this.type())) {
            this.#content = newContent;
            this.#resetAttributes();
        }
        else {
            throw new TypeError(this.#errors.notAssignable);
        }
    }
    add = (...args) => Container.from(methods.add(this.type(), this, ...args));
    remove = (target) => Container.from(methods.remove(this, target)); 

    /*  
        removeIndex() - removes target index item if content is iterable. Removes target text
        index if is a string. Supports Array, Set and String. 
    */
    removeIndex(targetIndex) {
        if(!typeof(targetIndex) == "number") return this.content();
        let index = 0;
        let result;
        switch(this.#type) {
            case "Array":
                result = [];
                this.#content.forEach(element => {
                    if(index != targetIndex) {
                        result.push(element);
                    }
                    index++;
                });
                this.#content = result;
                this.#resetAttributes();
                break;

            case "Object":
                result = {};
                Object.entries(this.#content).forEach(entry => {
                    if(index != targetIndex) {
                        result[entry[0]] = entry[1];
                    }
                });
                this.#content = result;
                this.#resetAttributes();
                break;

            case "Set":
                result = [];
                Array.from(this.#content).forEach(element => {
                    if(index != targetIndex) {
                        result.push(element);
                    }
                    index++;
                });
                this.#content = new Set(result);
                this.#resetAttributes();
                break;

            case "String":
                result = "";
                this.#content.split("").forEach(char => {
                    if(index != targetIndex) {
                        result += char;
                    }
                    index++;
                });
                this.#content = result;
                this.#resetAttributes();
                break;
        }
        return this.content();
    }
}

window["Container"] = Container;