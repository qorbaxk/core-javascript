export const typeError = (message) => {
  throw new TypeError(message);
};
export const refError = (message) => {
  throw new ReferenceError(message);
};
export const syntaxError = (message) => {
  throw new SyntaxError(message);
};
