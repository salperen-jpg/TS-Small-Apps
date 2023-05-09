export const getFromLocalStorage = () =>
  localStorage.getItem('groceries')
    ? JSON.parse(localStorage.getItem('groceries')!)
    : [];
