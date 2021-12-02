export const forEach = (callback, content, type) => {
    let effects = {
        "Array": () => content.forEach(x => callback(x)),
        "Object": () => Object.entries(content).forEach(x => callback(x)),
        "Map": () => content.entries().forEach(x => callback(x)),
        "Set": () => Array.from(content).forEach(x => callback(x))
    }
    
    effects[type]();
}