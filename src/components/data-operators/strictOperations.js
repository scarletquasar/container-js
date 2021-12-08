const _strictForEach = (callback, condition, content) => {
    let index = 0;
    while(index < content.length && index != -1) {
        !condition(callback(content[index])) ? index = -1 : index++;
    }

    if(index !== -1) return true;
    return false;
}

const _strictMap = (callback, condition, content) => {
    let index = 0;
    let result = [];
    while(index < content.length && index != -1) {
        if(condition(callback(content[index]))) {
            result.push(content[index]);
            index++;
        }
        else {
            index = -1;
        }
    }

    return result;
}

const strictForEach = (callback, condition, content, type) => {
    let effects = {
        "Array": () => _strictForEach(callback, condition, content),
        "Object": () => Object.entries(content)._strictForEach(callback, condition, content),
        "Map": () => content.entries()._strictForEach(callback, condition, content),
        "Set": () => Array.from(content)._strictForEach(callback, condition, content)
    }
    
    effects[type]();
}

const strictMap = (callback, condition, content, type) => {
    let effects = {
        "Array": () => _strictMap(callback, condition, content),
        "Object": () => Object.entries(content)._strictMap(callback, condition, content),
        "Map": () => content.entries()._strictMap(callback, condition, content),
        "Set": () => Array.from(content)._strictMap(callback, condition, content)
    }
    
    effects[type]();
}

export { strictForEach, strictMap }