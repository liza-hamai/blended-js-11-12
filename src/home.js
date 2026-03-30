import { getCategories, getProducts } from "./js/products-api";
import { renderCategories, renderProducts } from "./js/render-function";
import "./js/handlers";
//Логіка сторінки Home

async function init() {
    const categoriesFromApi = await getCategories();
    const categories = ['All', ...categoriesFromApi];

    console.log(categories);

    renderCategories(categories);

    const products = await getProducts();
    console.log(products);

    renderProducts(products);
}

init();