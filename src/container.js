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

    //Fetch changed data from container in a new container
    first = (quantity) => Container.from(methods.first(this.content(), this.type(), quantity));
    last = (quantity) => Container.from(methods.last(this.content(), this.type(), quantity, this.length()));
    skip = (quantity) => Container.from(methods.skip(this.content(), this.type(), quantity));
    where = (condition) => Container.from(methods.where(condition, this.content(), this.type()));

    //Container operations
    forEach = (...args) => methods.forEach(...args, this.content(), this.type());
    map = (...args) => methods.map(...args, this.content(), this.type());
    strictForEach = (callback, condition) => methods.strictForEach(callback, condition, this.content(), this.type());
    strictMap = (callback, condition) => methods.strictMap(callback, condition, this.content(), this.type());

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
    saveState = () => this.#states.push(this.content());
    getState = (index) => this.#states[index];
    restoreState = (index) => this.set(this.getState(index));
    add = (...args) => Container.from(methods.add(this.type(), this, ...args));
    remove = (target) => Container.from(methods.remove(this, target)); 
    removeIndex = (targetIndex) => Container.from(methods.removeIndex(this, targetIndex));
}

export {Container}; 