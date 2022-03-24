export const isValidParam = (param: string | string[] | undefined) => !(Array.isArray(param) || param === undefined);
