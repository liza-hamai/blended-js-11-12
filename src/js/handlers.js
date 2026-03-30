import { constants } from "./constants";
import { getProduct, getProducts, getProductsFromCategory } from "./products-api";
import { refs } from "./refs";
import { renderProduct, renderProducts } from "./render-function";

refs.categories.addEventListener("click", async (e) => {
    const btn = e.target.closest(".categories__btn");
    if (!btn) return;

    const currentActiveBtn = refs.categories.querySelector(".categories__btn--active");
    if (currentActiveBtn) {
        currentActiveBtn.classList.remove("categories__btn--active");
    }

    btn.classList.add("categories__btn--active");

    const category = btn.textContent.trim();

    console.log(category);

    if (category === "All") {
        const allProducts = await getProducts();
        console.log(allProducts);
        renderProducts(allProducts);
    }
    else {
        try {
            const products = await getProductsFromCategory(category);
            const productsList = products.products;

            if (!productsList || productsList.length === 0) {
                refs.divNotFound.classList.add("not-found--visible");
                renderProducts([]);
                return;
            }

            renderProducts(products.products);
            console.log(products);

        } catch (error) {
            refs.divNotFound.classList.add("not-found--visible");
        }
    }
}
)


refs.products.addEventListener("click", async (e) => {
    const liElem = e.target.closest("li");
    if (!liElem) return;

    const id = liElem.dataset.id;

    const product = await getProduct(id);

    renderProduct(product);

    refs.modal.classList.add("modal--is-open");

    console.log(product);

})