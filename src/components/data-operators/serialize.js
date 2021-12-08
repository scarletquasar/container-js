export const serialize = (reference) => {
    let rawResult = {
        content: null,
        type: null,
        length: null
    };

    return JSON.stringify(rawResult);
};