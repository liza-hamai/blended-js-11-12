import { constants } from "./constants";
import { refs } from "./refs";

export async function getCategories() {
    const response = await fetch(constants.fifthEndPoint);
    const JSONresponse = await response.json();
    return JSONresponse;
}

export async function getProducts() {
    const currentPage = 1;
    const url = `${constants.secondEndPoint}${(currentPage - 1) * 12}`;

    const response = await fetch(url);
    const JSONresponse = await response.json();

    return JSONresponse.products;
}

export async function getProductsFromCategory(category) {
    const response = await fetch(`${constants.sixthEndPoint}${category}`);
    const JSONresponse = await response.json();

    return JSONresponse;
}

export async function getProduct(id) {
    const response = await fetch(`${constants.thirdEndPoint}${id}`);
    const JSONresponse = await response.json();

    return JSONresponse;
}