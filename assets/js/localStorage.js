// /* LocalStorage */
const getLocalStorage = () => JSON.parse(localStorage.getItem("dbProducts")) ?? [];
const setLocalStorage = (dbProducts) => localStorage.setItem("dbProducts", JSON.stringify(dbProducts));

const createProduct = (product) =>{
    const dbProducts = getLocalStorage();
    dbProducts.push(product);
    setLocalStorage(dbProducts);
}

const readProduct = () => getLocalStorage();

const upDateCard = (index, card) => {
    const dbCard = getLocalStorage();
    dbCard[index] = card;
    setLocalStorage(dbCard);
}

const deleteProduct = (index) => {
    const dbProducts = getLocalStorage();
    dbProducts.splice(index, 1);
    setLocalStorage(dbProducts);
}

const clearProducts = () => {
    localStorage.removeItem("dbProducts");
}

export { createProduct, readProduct, upDateCard, deleteProduct, clearProducts};

















