import"./assets/styles-DAE99nJD.js";const i={secondEndPoint:"https://dummyjson.com/products?limit=12&skip=",thirdEndPoint:"https://dummyjson.com/products/",fifthEndPoint:"https://dummyjson.com/products/category-list",sixthEndPoint:"https://dummyjson.com/products/category/"},e={categories:document.querySelector(".categories"),products:document.querySelector(".products"),divNotFound:document.querySelector(".not-found"),modalProduct:document.querySelector(".modal-product"),modal:document.querySelector(".modal")};async function l(){return await(await fetch(i.fifthEndPoint)).json()}async function d(){const t=`${i.secondEndPoint}0`;return(await(await fetch(t)).json()).products}async function p(o){return await(await fetch(`${i.sixthEndPoint}${o}`)).json()}async function u(o){return await(await fetch(`${i.thirdEndPoint}${o}`)).json()}function m(o){e.categories.innerHTML=o.map(t=>`<li class="categories__item">
            <button class="categories__btn" type="button">${t}</button>
            </li>
        `).join("")}function r(o){e.products.innerHTML=o.map(t=>`<li class="products__item" data-id="${t.id}">
        <img class="products__image" src="${t.images[0]}" alt="${t.title}"/>
        <p class="products__title">${t.title}</p>
        <p class="products__brand"><span class="products__brand--bold">Brand: ${t.brand}</span></p>
        <p class="products__category">Category: ${t.category}</p>
        <p class="products__price">Price: ${t.price}$</p>
    </li>`).join("")}function g(o){e.modalProduct.innerHTML=`
    <img class="modal-product__img" src="${o.images[0]}" alt="${o.title}" />
      <div class="modal-product__content">
        <p class="modal-product__title">${o.title}</p>
        <ul class="modal-product__tags">${o.tags}</ul>
        <p class="modal-product__description">${o.description}</p>
        <p class="modal-product__shipping-information">Shipping: ${o.shippingInformation}</p>
        <p class="modal-product__return-policy">Return Policy: ${o.returnPolicy}</p>
        <p class="modal-product__price">Price: ${o.price}$</p>
        <button class="modal-product__buy-btn" type="button">Buy</button>
      </div>
    `}e.categories.addEventListener("click",async o=>{const t=o.target.closest(".categories__btn");if(!t)return;const s=e.categories.querySelector(".categories__btn--active");s&&s.classList.remove("categories__btn--active"),t.classList.add("categories__btn--active");const n=t.textContent.trim();if(console.log(n),n==="All"){const c=await d();console.log(c),r(c)}else try{const c=await p(n),a=c.products;if(!a||a.length===0){e.divNotFound.classList.add("not-found--visible"),r([]);return}r(c.products),console.log(c)}catch{e.divNotFound.classList.add("not-found--visible")}});e.products.addEventListener("click",async o=>{const t=o.target.closest("li");if(!t)return;const s=t.dataset.id,n=await u(s);g(n),e.modal.classList.add("modal--is-open"),console.log(n)});async function _(){const t=["All",...await l()];console.log(t),m(t);const s=await d();console.log(s),r(s)}_();
//# sourceMappingURL=index.js.map
