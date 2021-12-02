
export const toNumber = (content) => {
    const base = content.toString();
    let result = base.replace(/[^\d.]/g, '');

    return Number(result);
}