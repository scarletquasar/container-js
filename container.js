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
    forEach() {
        //Pendent implementation
    }

    //Fetch changed data from container in a new container
    first = (quantity) => Container.from(methods.first(this.content(), this.type(), quantity));
    last = (quantity) => Container.from(methods.last(this.content(), this.type(), quantity, this.length()));
    skip = (quantity) => Container.from(methods.skip(this.content(), this.type(), quantity));

    //Edit data in the container

    /* 
        set() - change the content of the container, is limited to the initial type
    */
    set = (newContent) => {
        if(methods.set(newContent, this.type())) {
            this.#content = newContent;
            this.#resetAttributes();
        }
        else {
            throw new TypeError(this.#errors.notAssignable);
        }
    }

    /*  
        add() - add a value based in the target type: [value] to iterable or string and
        [key, value] to dictionary. Supports Object, Array, Map, Set and String
    */
    add(...args) {
        switch(this.#type) {
            case "Object":
                this.#content[args[0]] = args[1];
                this.#resetAttributes();
                break;

            case "Array":
                this.#content.push(args[0]);
                this.#resetAttributes();
                break;

            case "Map":
                this.#content.set(args[0], args[1]);
                this.#resetAttributes();
                break;

            case "Set":
                let tempValue = Array.from(this.#content);
                tempValue.push(args[0]);
                this.#content = new Set(tempValue);
                this.#resetAttributes();
                break;
            
            case "String":
                this.#content += args[0];
                this.#resetAttributes();
                break;
        }
        return this.content();
    }

    /*  
        remove() - removes target value if content is iterable or target item by value if dictionary. 
        Removes target text if is string. Supports String, Array, Map and Set.
    */
    remove(target) {
        let result;
        switch(this.#type) {
            case "Array":
                result = [];
                this.#content.forEach(element => {
                    if(!compare(element, target)) {
                        result.push(element);
                    }
                });
                this.#content = result;
                this.#resetAttributes();
                break;

            case "Object":
                result = {};
                Object.entries(this.#content).forEach(entry => {
                    if(!compare(entry[1], target)) {
                        result[entry[0]] = entry[1];
                    }
                });
                this.#content = result;
                this.#resetAttributes();
                break;
            
            case "Map":
                result = new Map();
                this.#content.forEach(value, key => {
                    if(!compare(this.#content.get(key), target)) {
                        result.set(key, value);
                    }
                });
                this.#content = result;
                this.#resetAttributes();
                break;

            case "Set":
                result = [];
                Array.from(this.#content).forEach(element => {
                    if(!compare(element, target)) {
                        result.push(element);
                    }
                });
                this.#content = new Set(result);
                this.#resetAttributes();
                break;

            case "String":
                this.#content = this.#content.replaceAll(target, "");
                this.#resetAttributes();
                break;
        }
        return this.content();
    }

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