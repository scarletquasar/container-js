export const toNumber = (content, type) => {
    switch (type) {
        case "Container":
            return content.toNumber();
        
        case "String":
            return Number(content);
        
        default:
            return 0;
    }
}