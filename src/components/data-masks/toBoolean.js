export const toBoolean = (content) => {
    const base = content.toString();

    switch(base) {
        case "false":
            return false;
        
        case "true":
            return true;
    }

    return base.length > 0;
}