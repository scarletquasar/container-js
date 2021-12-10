import { compare } from "./lib/recursiveComparator.js";
import * as methods from "./components/index.js"; 

class Container {
    #errors = {
        notAssignable: "The value declared is not assignable to the container type.",
        invalidArguments: "The inserted arguments are invalid for this operation."
    }

    static from = (content) => new Container(content)

    #content = null;
    #type = null;
    #length = 0;
    #states = [];
    #events = {
        check: [],
        set: [],
        get: []
    };

    #eventBase = {
        target: this,
        currentTarget: this,
        isTrusted: false
    }

    constructor(content) {
        this.#content = content;
        this.#resetAttributes();
    }

    #triggerEvent(eventName) {
        this.#events[eventName].forEach(event => event(this.#eventBase));
    }

    #resetAttributes() {
        const newProperties = methods.resetAttributes(this.content());
        this.#type = newProperties.type;
        this.#length = newProperties.length;
    }

    addEventListener = (event, callback) => this.#events[event].push(callback);
    removeEventListener = (event, callback) => this.#events[event] = this.#events[event].filter(x => !compare(x, callback));

    //Fetch data from container
    content = () => {
        this.#triggerEvent("get");
        return this.#content;
    };
    length = () => {
        this.#triggerEvent("check");
        return this.#length;
    };
    type = () => {
        this.#triggerEvent("check");
        return this.#type;
    };
    toString = () => {
        return methods.toString(this.content());
    };
    toNumber = () => {
        return methods.toNumber(this.content(), this.type())
    };
    toBoolean = () => {
        return methods.toBoolean(this.content());
    };
    toSymbol = () => {
        return methods.toSymbol(this.content());
    };
    toBase64 = () => {
        return methods.toBase64(this.content());
    };

    //Fetch changed data from container in a new container
    first = (quantity) => {
        return Container.from(methods.first(this.content(), this.type(), quantity));
    };
    last = (quantity) => {
        return Container.from(methods.last(this.content(), this.type(), quantity, this.length()))
    };
    skip = (quantity) => {
        return Container.from(methods.skip(this.content(), this.type(), quantity));
    };
    where = (condition) => {
        return Container.from(methods.where(condition, this.content(), this.type()));
    };

    //Container operations
    forEach = (...args) => {
        methods.forEach(...args, this.content(), this.type());
    };
    map = (...args) => {
        methods.map(...args, this.content(), this.type());
    };
    strictForEach = (callback, condition) => {
        methods.strictForEach(callback, condition, this.content(), this.type());
    };
    strictMap = (callback, condition) => {
        methods.strictMap(callback, condition, this.content(), this.type());
    };

    //Edit data in the container
    set = (newContent) => {
        if(methods.set(newContent, this.type())) {
            this.#triggerEvent("set");
            this.#content = newContent;
            this.#resetAttributes();
        }
        else {
            throw new TypeError(this.#errors.notAssignable);
        }
    }
    saveState = () => {
        this.#triggerEvent("set");
        this.#states.push(this.content());
    };
    getState = (index) => {
        this.#triggerEvent("get");
        this.#states[index];
    };
    restoreState = (index) => {
        this.set(this.getState(index));
    };
    add = (...args) => {
        return Container.from(methods.add(this.type(), this, ...args));
    };
    remove = (target) => {
        return Container.from(methods.remove(this, target));
    }; 
    removeIndex = (targetIndex) => {
        return Container.from(methods.removeIndex(this, targetIndex));
    };
}

export {Container};