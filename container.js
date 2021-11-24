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
    #content = null; //Packed content
    #type = null; //Target Type
    #isLocked = false;
    #isSealed = false;
    #isFrozen = false;
    #length = 0;

    constructor(content, type) {
        if(content.constructor.name == type.constructor.name) {
            this.#content = content;
            this.#type = type;

            //Analisar pra unificar size e length<<<<
        }
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

    remove(target, targetIndex = -1) {
        switch(type.constructor.name) {
            case "Array":
                let result = [];
                this.#content.forEach(element, index => {
                    if(index != -1) {
                        if(element != target && index == targetIndex) {
                            result.push(element);
                        }
                    }
                    else {
                        if(element != target) {
                            result.push(element);
                        }
                    }
                });
                this.#resetAttributes();
                return this.content();
                
        }

    }
}

window["Container"] = Container;