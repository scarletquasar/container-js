/*  
    add() - add a value based in the target type: [value] to iterable or string and
    [key, value] to dictionary. Supports Object, Array, Map, Set and String
*/
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
            reference.set(args[0], args[1]);
            break;

        case "Set":
            let tempValue = Array.from(reference.content());
            tempValue.push(args[0]);
            reference.set(new Set(tempValue));
            break;
        
        case "String":
            reference.set(reference.content() + args[0]);
            break;
    }
    return reference.content();
} 