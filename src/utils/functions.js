export const saveToLocalStorage = (data) => {
    localStorage.setItem("choferes", JSON.stringify(data));
};
