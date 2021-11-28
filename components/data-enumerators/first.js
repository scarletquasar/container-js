/* 
    first() - get the first X items of the container content. Supports Array, Set and Object
*/
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
            if(quantity === 0) return result[objectEntries[0][0]] = objectEntries[0][1];
            const objectEntries = Object.entries(target);
            result = {};
            let contentObjectArray = Object.entries(target);
            while(quantity > 0) {
                result[contentObjectArray[index][0]] = (contentObjectArray[index][1]);
                quantity--;
                index++;
            }
            return result;
        
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