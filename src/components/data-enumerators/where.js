//Todo: Add suport to Map constructor
export const where = (condition, content, type) => {
    switch(type) {
        case "Array":
            return content.filter(condition);
        
        case "Object":
            const rawResult = Object.entries(content).filter(condition);
            const objResult = {};

            rawResult.forEach(entry => objResult[entry[0]] = entry[1]);
            return rawResult;

        case "Set":
            return new Set(content.filter(condition));
    }
}