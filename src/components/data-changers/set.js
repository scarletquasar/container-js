/* 
    set() - change the content of the container, is limited to the initial type
*/
export const set = (newContent, type) => newContent.constructor.name == type;