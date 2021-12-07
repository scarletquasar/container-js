export const map = (callback, content, type) => {
    let effects = {
        "Array": () => content.map(x => callback(x)),
        "Object": () => Object.entries(content).map(x => callback(x)),
        "Map": () => content.entries().map(x => callback(x)),
        "Set": () => Array.from(content).map(x => callback(x))
    }
    
    effects[type]();
}