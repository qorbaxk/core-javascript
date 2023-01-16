export const clipboard = (text) => {
  return navigator.clipboard.writeText(text);
};
