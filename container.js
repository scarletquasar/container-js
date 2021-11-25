import { compare } from "./lib/recursiveComparator.js"

class Container {
    #errors = {
        notAssignable = "The value declared is not assignable to the container type.",
        invalidArguments = "The inserted arguments are invalid for this operation.",
        accessError = "The container can not be accessed. Check if the properties 'locked' and 'sealed' are tru."
    }

    static from(content) {
        return new Container(content);
    }

    #content = null; //Packed content
    #type = null; //Target Type
    #isLocked = false;
    #isSealed = false;
    #length = 0;

    constructor(content) {
        this.#content = content;
        this.#type = content.constructor.name;
        this.#resetAttributes();
    }

    #resetAttributes() {
        switch(this.#type) {
            case "Array":
                this.#length = this.#content.length;
                break;

            case "Object":
                this.#length = Object.keys(this.#content).length;

            case "Map":
                this.#length = this.#content.size;
                break;

            case "Set":
                this.#length = this.#content.size;
                break;
        }
    }

    //Fetch data from container

    forEach() {
        //Pendent implementation
    }

    type() {
        return this.#type;
    }

    content() {
        if(!this.#isLocked && !this.#isSealed) return this.#content;
    }

    length() {
        if(!this.#isSealed) return this.#length;
    }

    toString() {
        if(!this.#isLocked && !this.#isSealed) return this.#content.toString();
    }

    toNumber() {
        if(!this.#isLocked && !this.#isSealed) return Number(this.#content.toString());
    }

    toBoolean() {
        if(!this.#isLocked && !this.#isSealed) return Boolean(Number(this.#content.toString()));
    }

    toSymbol() {
        if(!this.#isLocked && !this.#isSealed) return Symbol(this.#content.toString());
    }

    toBase64() {
        if(!this.#isLocked && !this.#isSealed) return btoa(this.#content.toString());
    }

    //Fetch changed data from container in a new container

    /* 
        first() - get the first X items of the container content
    */
    first(quantity) {
        if(!quantity) return Container.from(this.#content[0]);
        let result;
        let index = 0;
        switch(this.#type) {
            case "Array":
                result = [];
                while(quantity > 0) {
                    result.push(this.#content[index]);
                    quantity--;
                    index++;
                }
                return Container.from(result);
            
            case "Set":
                result = [];
                let contentArray = Array.from(this.#content);
                while(quantity > 0) {
                    result.push(contentArray[index]);
                    quantity--;
                    index++;
                }
                return Container.from(new Set(result));

            case "Object":
                result = {};
                let contentObjectArray = Object.entries(this.#content);
                while(quantity > 0) {
                    result[contentObjectArray[index][0]] = (contentObjectArray[index][1]);
                    quantity--;
                    index++;
                }
                return Container.from(result);
        }
    }

    //Edit data in the container

    /* 
        set() - change the content of the container, is limited to the initial type
    */
    set(newContent) {
        if(this.#isLocked || this.#isSealed) ;
        if(newContent.constructor.name == type.constructor.name) {
            this.#content = content;
            this.#type = type;
            this.#resetAttributes;
        }
        else {
            throw new TypeError(this.#errors.notAssignable);
        }
        return this.content();
    }

    /*  
        add() - add a value based in the target type: [value] to iterable or string and
        [key, value] to dictionary.
    */
    add(...args) {
        if(this.#isLocked || this.#isSealed) this.content();
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
        if(this.#isLocked || this.#isSealed) return;
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
                    if(!compare(entry, target)) {
                        result[entry[0]] = entry[1];
                    }
                });
            
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
        if(this.#isLocked || this.#isSealed) throw new Error(this.#errors.accessError);
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