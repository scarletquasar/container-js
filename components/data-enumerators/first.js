export const first = (target, type, quantity) => {
    let result;
    switch(type) {
        case "Array":
            if(quantity === 0) return target[0];
            result = [];
            while(quantity > 0) {
                result.push(target[index]);
                quantity--;
                index++;
            }
            return result;
        
        case "Object":
            const objectEntries = Object.entries(target);
            result = {};
            if(quantity === 0) return result[objectEntries[0][0]] = objectEntries[0][1];
        
        case "Set":
            if(quantity === 0) return new Set(Array.from(target)[0]);
            result = [];
            let contentArray = Array.from(target);
            while(quantity > 0) {
                result.push(contentArray[index]);
                quantity--;
                index++;
            }
            return result;
    }
}

//todo: Funcionalidade em progresso