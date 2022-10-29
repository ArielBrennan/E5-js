import {products, split} from './data.js'

/* console.log(products) */
/* console.log(split) */

let xBtn = document.getElementById("x");
let userIcon = document.getElementById("userIcon");
let cartIcon = document.getElementById("cartIcon");
let cMoreBtn = document.getElementById("cMoreBtn");

let addToCartBtn = document.getElementsByClassName("addToCartBtn");
/* let addToCartBtn = document.querySelectorAll(".addToCartBtn"); */
console.log(addToCartBtn)

let addUnitBtn = document.getElementById("addUnitBtn");
let restUnitBtn = document.getElementById("restUnitBtn");
let categoryAction = document.getElementById("category");
let carrito = document.getElementById("carrito");
let overlay = document.getElementById("overlay");
let carritoContainer = document.getElementById("carritoPContainer");
let popuContainer = document.getElementById("products-container");
let recoContainer = document.getElementById("reco-container");
let categoryBtns = document.getElementsByClassName("category");
/* let categoryBtn1 = document.getElementById("populares");
let categoryBtn2 = document.getElementById("pizzas");
let categoryBtn3 = document.getElementById("hamburguesas");
let categoryBtn4 = document.getElementById("napapuki");
let categoryBtn5 = document.getElementById("wraps");
let categoryBtn6 = document.getElementById("mexican-food");
let categoryBtn7 = document.getElementById("batidos");
let categoryBtns = [categoryBtn1, categoryBtn2, categoryBtn3, categoryBtn4, categoryBtn5, categoryBtn6, categoryBtn7]

console.log(categoryBtns) */



let carritoLs = JSON.parse(localStorage.getItem("carrito")) || [];

console.log(carritoLs)


let saveLs = (products) => localStorage.setItem("carrito", JSON.stringify(products));




let renderProduct = (product) => { 
    
    let {img, name, info, price} = product


    return    `<div class="popu">
    <img src="${img}" alt="">
    <div class="popu-data">
        <p>${name}</p>
        <p>${info}</p>
    </div>
    <div class="popu-price-add">
        <p>${price}</p>
        <button 
        data-img='${img}'
        data-name='${name}'
        data-info='${info}'
        data-price='${price}' class="addToCartBtn">
        Agregar
        </button>
    </div>
</div>`
}


let renderRecoProduct = (product) => {
    let {img, name, info, price} = product;

    return `    <div class="reco">
    <div><img src="${img}" alt=""></div>
    <div>
        <p class="cart-product-info-a">${name}</p>
        <p class="cart-product-info-b">${info}</p>
        <p class="cart-product-info-c">${price}</p>
    </div>
    <div>
        <button 
        data-img='${img}'
        data-name='${name}'
        data-info='${info}'
        data-price='${price}' class="addToCartBtn" >Agregar</button>
    </div>
</div>`
}


let popuArray = split[0].map(product => renderProduct(product));

popuContainer.innerHTML = popuArray.join("");

let recoArray = products.slice(0, 3).map(reco => renderRecoProduct(reco));

recoContainer.innerHTML = recoArray.join("");


/* let active = (item) => {
    item.classList.toggle("active")
} */





/* categoryBtn1.addEventListener("click", active) */


/* categoryBtn7.addEventListener("click", active) */



let renderCartProduct = product => {let {img, name, info, price, quantity} = product

return `        
<div class="cart-product">
    <div><img src="${img}" alt=""></div>
    <div class="cart-product-info"><p>${name}</p><p class="cart-product-info-b">${info}</p><p class="cart-product-info-c">${price}</p></div>
    <div class="cart-btns"><button 
    data-img='${img}'
    data-name='${name}'
    data-info='${info}'
    data-price='${price}'
    id="restUnitBtn" class="substract-btn">-</button><span>${quantity}</span><button class="add-btn">+</button></div>
</div>`

}
let sendToCart = (e) => {

    
    const { img, name, info, price } = e.target.dataset


    
    let product = {img, name, info, price};
    console.log(product)
    /* console.log(name); */
    /* carritoLs = [...carritoLs, { ...product, quantity: 1 }]; */
    
    if (isExistingCartProduct(product)) {
        addUnitToProduct(product);
    } else {
        createCartProduct(product)
    }
    
    saveLs(carritoLs)

    carritoContainer.innerHTML = carritoLs.map(product => renderCartProduct(product)).join("");
}






/* const addUnit = (e) => {

    console.log("boton add unit")

    const { img, name, info, price } = e.target.dataset    
    let product = {img, name, info, price};

    carritoLs = carritoLs.map((cartProduct) => {
    return cartProduct.name === product.name
        ? {...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct;
    });
};
addUnitBtn.addEventListener("click", addUnit) */



const addUnitToProduct = (product) => {
    carritoLs = carritoLs.map((cartProduct) => {
    return cartProduct.name === product.name
        ? { ...cartProduct, quantity: cartProduct.quantity + 1 }
        : cartProduct;
    });
};
const isExistingCartProduct = (product) => {
    return carritoLs.find((item) => item.name === product.name);
};
const createCartProduct = (product) => {
    carritoLs = [...carritoLs, { ...product, quantity: 1 }];
};




let showCart = (e) => {
    e.preventDefault()
    overlay.classList.add("show-hidden");
    carrito.classList.add("show-hidden")
};


let closeCart = e => { e.preventDefault()
    overlay.classList.remove("show-hidden");
    carrito.classList.remove("show-hidden")
}

/* console.log(addToCartBtn) */



const changeBtnActiveState = (selectedCategory) => {
    const categories = [...categoryBtns];
    categories.forEach((categoryBtn) => {
    if (categoryBtn.dataset.category !== selectedCategory) {
        categoryBtn.classList.remove("active");
        return;
    }
    categoryBtn.classList.toggle("active");
    });
};

const changeFilterState = (e) => {
    const selectedCategory = e.target.dataset.category;
    changeBtnActiveState(selectedCategory);
    renderFilter(selectedCategory)
};


/* categoryBtns.addEventListener("click", changeFilterState) */


const renderFilter = (category) => {
    const productsList = products.filter(
    (product) => product.category === category
    );
    popuContainer.innerHTML = productsList.map(renderProduct).join("");
};





/* addToCartBtn.addEventListener("click", sendToCart) */


/* let addEvent = () => {
    for (let i = 0; i < addToCartBtn.length; i++) {
        addToCartBtn[i].addEventListener("click", sendToCart)
    }    
}

addEvent() */





let addEvent = (items, funcion) => {
    for (let i = 0; i < items.length; i++) {
        items[i].addEventListener("click", funcion);
    }    
}

addEvent(addToCartBtn, sendToCart)
addEvent(categoryBtns, changeFilterState)
/* addEvent(categoryBtns, active) */






/* addToCartBtn.addEventListener("click", sendToCart) */

/* addEvent() */

xBtn.addEventListener("click", closeCart)

/* addUnitBtn.addEventListener("click", )

restUnitBtn.addEventListener("click", )
 */

cartIcon.addEventListener("click", showCart)


/* document.addEventListener("DOMContentLoaded", renderProduct) */


/* console.log(carritoLs) */