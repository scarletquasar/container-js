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
        this.#events[eventName].forEach(event => event(eventBase));
    }

    #resetAttributes() {
        const newProperties = methods.resetAttributes(this.content());
        this.#type = newProperties.type;
        this.#length = newProperties.length;
    }

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
        this.#triggerEvent("get");
        return methods.toString(this.content());
    };
    toNumber = () => {
        this.#triggerEvent("get");
        return methods.toNumber(this.content(), this.type())
    };
    toBoolean = () => {
        this.#triggerEvent("get");
        return methods.toBoolean(this.content());
    };
    toSymbol = () => {
        this.#triggerEvent("get");
        return methods.toSymbol(this.content());
    };
    toBase64 = () => {
        this.#triggerEvent("get");
        return methods.toBase64(this.content());
    };

    //Fetch changed data from container in a new container
    first = (quantity) => {
        this.#triggerEvent("get");
        return Container.from(methods.first(this.content(), this.type(), quantity));
    };
    last = (quantity) => {
        this.#triggerEvent("get");
        return Container.from(methods.last(this.content(), this.type(), quantity, this.length()))
    };
    skip = (quantity) => {
        this.#triggerEvent("get");
        return Container.from(methods.skip(this.content(), this.type(), quantity));
    };
    where = (condition) => {
        this.#triggerEvent("get");
        return Container.from(methods.where(condition, this.content(), this.type()));
    };

    //Container operations
    forEach = (...args) => {
        this.#triggerEvent("get");
        methods.forEach(...args, this.content(), this.type());
    };
    map = (...args) => {
        this.#triggerEvent("get");
        methods.map(...args, this.content(), this.type());
    };
    strictForEach = (callback, condition) => {
        this.#triggerEvent("get");
        methods.strictForEach(callback, condition, this.content(), this.type());
    };
    strictMap = (callback, condition) => {
        this.#triggerEvent("get");
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
        this.#triggerEvent("set");
        this.set(this.getState(index));
    };
    add = (...args) => {
        this.#triggerEvent("set");
        return Container.from(methods.add(this.type(), this, ...args));
    };
    remove = (target) => {
        this.#triggerEvent("set");
        return Container.from(methods.remove(this, target));
    }; 
    removeIndex = (targetIndex) => {
        this.#triggerEvent("set");
        return Container.from(methods.removeIndex(this, targetIndex));
    };
}

export {Container}; 