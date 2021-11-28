export const toSymbol = (content) => {
    return Symbol(JSON.stringify(content));
}