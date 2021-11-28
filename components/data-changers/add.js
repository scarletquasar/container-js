export const add = (type, reference, ...args) => {
    let content = reference.content();
    let dataToAdd;
    switch(type) {
        case "Object":
            dataToAdd = {};
            dataToAdd[args[0]] = args[1];
            reference.set(Object.assign(content, dataToAdd));
            break;

        case "Array":
            dataToAdd = content;
            dataToAdd.push(args[0]);
            reference.set(dataToAdd);
            break;

        case "Map":
            reference.#content.set(args[0], args[1]);
            reference.#resetAttributes();
            break;

        case "Set":
            let tempValue = Array.from(reference.#content);
            tempValue.push(args[0]);
            reference.#content = new Set(tempValue);
            reference.#resetAttributes();
            break;
        
        case "String":
            reference.#content += args[0];
            reference.#resetAttributes();
            break;
    }
} 