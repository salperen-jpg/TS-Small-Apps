export const getFromLocalStorage = () =>
  JSON.parse(localStorage.getItem('groceries') || '[]');
