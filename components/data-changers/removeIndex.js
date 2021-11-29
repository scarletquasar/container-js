export const removeIndex = (reference, targetIndex) => {
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