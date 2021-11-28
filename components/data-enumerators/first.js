export const first = (target, type, quantity) => {
    let result;
    switch(type) {
        case "Array":
            if(quantity === 0) return target[0];
            break;
        
        case "Object":
            const objectEntries = Object.entries(target);
            result = {};
            if(quantity === 0) {
                return result[objectEntries[0][0]] = objectEntries[0][1];
            }
    }
}

//todo: Funcionalidade em progresso