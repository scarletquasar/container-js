import { ContainerErrors } from "./errors.js";
import { Types } from "./types.js";

if(window) {
    window["Types"] = Types;
}
else {
    console.warn("Warning: window parent not found, some features may not work properly.");
}

class Container {
    raw = null;

    //Property Attributes
    keys = null;
    values = null;
    entries = null;
    length = 0;
    size = 0;

    //Other Attributes
    functionSet = [];
    type = null;

    constructor(value, type) {
        
        /*  The definitive type of the Container content
            is "Object" by default.
        */
        if(value.constructor.name == type.constructor.name) {

            this.raw = value;
            this.type = type.constructor.name;

            this.#setAttributes(type);
        }
        else {
            throw new TypeError(ContainerErrors.NotAssignableException);
        }
    }

    #setAttributes(type) {
        this.keys = null;
        this.values = null;
        this.entries = null;
        this.length = 0;
        this.size = 0;
        this.functionSet = [];

        switch(type.constructor) {
            case Object:
                this.keys = Object.keys(value);
                this.values = Object.values(value);
                this.entries = Object.entries(value);
                this.length = this.raw.length;
                this.functionSet.push("forEach");
                break;
            case Array:
                this.entries = this.raw;
                this.length = this.raw.length;
                this.functionSet.push("forEach");
                break;
            case Map:
                this.keys = this.raw.keys();
                this.values = this.raw.values();
                this.entries = this.raw.entries();
                this.size = this.raw.size;
                this.functionSet.push("forEach");
                break;
            case Set:
                this.values = this.raw.values();
                this.entries = this.raw.entries();
                this.size = this.raw.size;
                this.functionSet.push("forEach");
                break;
            case String:
                this.length = this.raw.length;
                this.functionSet.push("forEach");
                break;
        }
    }

    forEach = (...args) => {
        if(!this.functionSet.includes("forEach")) throw new ReferenceError(ContainerErrors.NotSupportedException);
        this.type == "Array" ? this.raw.forEach(...args) : {}
    }
}

window["Container"] = Container;