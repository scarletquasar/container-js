const Types = {
    map: new Map(),
    set: new Set(),
    array: new Array(),
    string: new String(),
    number: new Number(),
    date: new Date(),
    regex: new RegExp()
}

class Container {
    static from(content) {
        return new Container(content);
    }

    #content = null; //Packed content
    #type = null; //Target Type
    #isLocked = false;
    #isSealed = false;
    #isFrozen = false;
    #length = 0;

    constructor(content) {
        this.#content = content;
        this.#type = content.constructor.name;

        //Analisar pra unificar size e length<<<<
    }

    #resetAttributes() {
        //Criar método de setar atributos após alteração
    }

    //Fetch data from container

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

    //Fetch changed data from container

    //Edit data in the container

    set(newContent) {
        if(newContent.constructor.name == type.constructor.name) {
            this.#content = content;
            this.#type = type;
            this.#resetAttributes;
        }
    }

    /* remove() - removes target value if content is iterable. Supports Array, Map and Set. */
    remove(target) {
        let result;
        switch(this.#type) {
            case "Array":
                result = [];
                this.#content.forEach((element) => {
                    if(element != target) {
                        result.push(element);
                    }
                });
                this.#content = result;
                this.#resetAttributes();
                return this.content();
            
            case "Map":
                result = new Map();
                this.#content.forEach((value, key) => {
                    if(this.#content.get(key) != target) {
                        result.set(key, value);
                    }
                });
                this.#content = result;
                this.#resetAttributes();
                return this.content();

            case "Set":
                result = new Set();
                this.#content.forEach((value) => {
                    if(this.#content.get(key) != target) {
                        result.add(value);
                    }
                });
                this.#content = result;
                this.#resetAttributes();
                return this.content();
        }

    }
}

window["Container"] = Container;